import { RotatingLines } from 'react-loader-spinner';
import { Flipside, Query, QueryResultSet } from "@flipsidecrypto/sdk/dist/src";
import { useEffect, useState } from 'react';
import Leaderboard from "../pages/leaderboard";
import TableHeaderProps from "./tableheaderprops";
import TableRowsProps from "./tablerowprops";

const topHoldingPeriod = async(addresses: Array<string>) => {
    // Initialize `Flipside` with your API key
    const flipside = new Flipside(
        process.env.SHROOMDK_API_KEY ?? "850f9f6e-c08a-48e4-8490-5e1f029c8f5e", // default to a public API KEY. TODO somehow env variable doesn't work yet
        "https://node-api.flipsidecrypto.com"
    );
    
    // Parameters can be passed into SQL statements via simple & native string interpolation
    const nftContractAddress = addresses.join(';');
    const creatorFeePercentage = 0.03;
    const snapshotTime = "2032-01-01 12:00";

    // Create a query object for the `query.run` function to execute
    const query: Query = {
        sql: `WITH
            input_contracts AS (
                SELECT
                  trim(F.value) AS nft_contract_address
                FROM (
                  SELECT
                      SPLIT(data.nft_contract_address, ';') AS input
                  FROM VALUES
                      (lower('${nftContractAddress}'))
                  AS data(nft_contract_address)
                ) i
                , Table(Flatten(i.input)) AS F
                WHERE trim(F.value) regexp '^0x[0-9a-fA-F]{40}$' -- check address is a valid format, i.e. starts with 0x and has 42 characters total
                
            )
        
             , input_time AS (
                SELECT
                    CASE
                        WHEN to_timestamp_ntz(data.snapshot_time) > date_trunc('minute', current_timestamp) THEN date_trunc('minute', current_timestamp)
                        ELSE date_trunc('minute', to_timestamp_ntz(data.snapshot_time))
                    END AS snapshot_time
                FROM VALUES
                    ('${snapshotTime}')
                AS data(snapshot_time)
            )
        
            , input_creator_fee_perc AS (
                SELECT
                    *
                FROM VALUES
                    (${creatorFeePercentage})
                AS data(creator_fee_perc)
            )
        
            -- get all nft transfers
            , nft_transfers AS (
              SELECT
                t.nft_address AS nft_contract_address
                , t.tokenid AS token_id
                , t.block_timestamp AS block_time
                , date_trunc('day', t.block_timestamp) AS day
                , t.nft_from_address AS from_address
                , t.nft_to_address AS to_address
                , COALESCE(erc1155_value, 1) AS amount
                , CASE WHEN erc1155_value is not null THEN 'true' ELSE 'false' END AS is_erc1155
                , ROW_NUMBER() OVER (PARTITION BY t.nft_address, t.tokenid ORDER BY block_number ASC, event_index ASC) AS rank_asc
                , ROW_NUMBER() OVER (PARTITION BY t.nft_address, t.tokenid ORDER BY block_number DESC, event_index DESC) AS rank_desc
              FROM ethereum.core.ez_nft_transfers t
              INNER JOIN input_contracts c ON t.nft_address = c.nft_contract_address
              WHERE block_timestamp <= (SELECT snapshot_time FROM input_time)
            )
        
            -- wallet holdings of each token_id
            , erc1155_holdings AS (
                SELECT
                    wallet
                    , nft_contract_address
                    , token_id
                    , SUM(num_transfers) AS num_held
                FROM (
                    SELECT
                        to_address AS wallet -- all wallets that have ever received the NFT
                        , nft_contract_address
                        , token_id
                        , SUM(amount) AS num_transfers -- transfers IN
                    FROM nft_transfers tr
                    WHERE true
                        AND is_erc1155 = 'true'
                    GROUP BY 1,2,3
                    
                    UNION all
                    
                    SELECT
                        from_address AS wallet -- all wallets that have ever sent the NFT
                        , nft_contract_address
                        , token_id
                        , -1 * SUM(amount) AS num_transfers -- transfers OUT
                    FROM nft_transfers tr
                    WHERE true
                        AND is_erc1155 = 'true'
                    GROUP BY 1,2,3
                )
                GROUP BY 1,2,3
                HAVING SUM(num_transfers) > 0
            )
        
            , erc721_holdings AS (
              SELECT
                  to_address AS wallet
                  , nft_contract_address
                  , token_id
                  , '1' AS num_held
              FROM nft_transfers tr
              WHERE true
                  AND is_erc1155 = 'false'
                  AND rank_desc = 1
          )
        
            , all_holdings AS (
                SELECT wallet, nft_contract_address, token_id, num_held FROM erc1155_holdings
                UNION ALL
                SELECT wallet, nft_contract_address, token_id, num_held FROM erc721_holdings
            )
        
        /*************************************************************/
        
            , all_wallets AS (
                SELECT
                    to_address AS wallet
                    , MIN(block_time) AS time_first_acquisition
                FROM nft_transfers
                GROUP BY 1
            )
            
            , all_times AS (
              select
                time
              from (
                select 
                  row_number() over(order by 0) i
                  , start_date
                  , dateadd(day, (i-1), start_date) AS time
                  , end_date
                from table(generator(rowcount => 10000 )) x
                left join (
                  select
                    date_trunc('day', min(block_time)) AS start_date 
                    , date_trunc('day', (SELECT snapshot_time FROM input_time)) AS end_date
                  from nft_transfers
                ) a ON true
              )
              where time <= end_date
              order by time ASC
          )
        
            , base AS (
                SELECT
                    at.time
                    , aw.wallet
                    , aw.time_first_acquisition
                FROM all_times at
                FULL JOIN all_wallets aw ON true
            )
        
            , holdings_over_time AS (
                SELECT
                    day AS time
                    , wallet
                    , SUM(change) AS daily_change
                FROM (
                    SELECT
                        day
                        , to_address AS wallet
                        , SUM(amount) AS change
                    FROM nft_transfers
                    GROUP BY 1,2
                    
                    UNION ALL
                    
                    SELECT
                        day
                        , from_address AS wallet
                        , -1 * SUM(amount) AS change
                    FROM nft_transfers
                    GROUP BY 1,2
                )
                GROUP BY 1,2
            )
        
            , days_held AS (
                SELECT
                    wallet
                    , COUNT(*) AS days_held
                    , MIN(time_first_acquisition) AS time_first_acquisition
                FROM (
                    SELECT
                        b.time
                        , b.wallet
                        , SUM(COALESCE(daily_change,0)) OVER (PARTITION BY b.wallet ORDER BY b.time ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS num_held
                        , b.time_first_acquisition
                    FROM base b
                    LEFT JOIN holdings_over_time h USING (time, wallet)
                )
                WHERE (num_held) > 0
                GROUP BY 1
                ORDER BY days_held DESC
            )
        
            -- get the time of the latest data for reference in the output
            -- to ensure that the actual snapshot time is the expected snapshot time
            , snapshot_time_check AS (
                SELECT
                    CASE
                        WHEN MIN(block_time) >= (SELECT snapshot_time FROM input_time) THEN (SELECT snapshot_time FROM input_time)
                        ELSE MIN(block_time)
                    END AS actual_snapshot_time
                FROM (
                    SELECT MAX(block_timestamp) AS block_time FROM ethereum.core.ez_nft_transfers
                )
            )
        
            , current_holders AS (
              SELECT
                wallet
                , COUNT(distinct nft_contract_address) AS num_collections
                , SUM(num_held) AS num_held
              FROM all_holdings
              WHERE true
                AND wallet NOT IN (
                    lower('0x000000000000000000000000000000000000dead')
                    , lower('0x0000000000000000000000000000000000000000')
                    , lower('0x0000000000000000000000000000000000000001')
                )
              GROUP BY 1
            )
        
            , sales AS (
              SELECT
                s.seller_address AS wallet
                , SUM (
                  CASE 
                    WHEN s.currency_symbol IN ('ETH' , 'WETH') THEN s.price
                    ELSE s.price * p.price / p_eth.price
                    END
                ) AS vol_eth
                , SUM (
                  CASE 
                    WHEN s.currency_symbol IN ('ETH' , 'WETH') THEN s.creator_fee
                    ELSE s.creator_fee * p.price / p_eth.price
                    END
                ) AS creator_fee_eth
                , SUM(s.price_usd) AS vol_usd
                , SUM(s.creator_fee_usd) AS creator_fee_usd
                , COUNT(distinct tx_hash) AS num_txns
              FROM ethereum.core.ez_nft_sales s
              LEFT JOIN ethereum.core.fact_hourly_token_prices p ON date_trunc('hour', s.block_timestamp) = p.hour
                AND s.currency_address = p.token_address
              LEFT JOIN ethereum.core.fact_hourly_token_prices p_eth ON date_trunc('hour', s.block_timestamp) = p_eth.hour
                AND p_eth.symbol = 'WETH'
              WHERE true 
                AND block_timestamp <= (SELECT snapshot_time FROM input_time)
                AND s.price_usd > 0
                AND COALESCE(s.creator_fee_usd,0) >= 0
                AND EXISTS(SELECT 1 FROM input_contracts c WHERE s.nft_address = c.nft_contract_address)
              GROUP BY 1
            )
        
            , output AS (
              SELECT
                ch.wallet
                , ch.num_collections
                , ch.num_held
                , dh.days_held
                , dh.time_first_acquisition
                , COALESCE(s.num_txns,0) AS num_sales
                , s.vol_eth
                , s.vol_usd
                , s.creator_fee_eth
                , s.creator_fee_usd
                , s.creator_fee_usd / s.vol_usd AS creator_fee_perc
                , CASE
                  WHEN s.vol_usd is null THEN ''
                  WHEN s.vol_usd is not null AND s.creator_fee_usd / s.vol_usd >= (SELECT creator_fee_perc FROM input_creator_fee_perc) THEN TRUE
                  ELSE FALSE
                END AS full_creator_fees_paid
                , (SELECT actual_snapshot_time FROM snapshot_time_check) AS snapshot_time
              FROM current_holders ch
              LEFT JOIN sales s USING (wallet)
              LEFT JOIN days_held dh USING (wallet)
              ORDER BY num_held DESC, num_collections DESC, creator_fee_eth DESC
            )
        
          select TOP 10 * from output`,
        ttlMinutes: 10,
    };

    // Send the `Query` to Flipside's query engine and await the results
    const result: QueryResultSet = await flipside.query.run(query);

    // Iterate over the results
    result?.records?.forEach((record) => {
        const walletAddress = record.wallet;
        const numCollections = record.num_collections;
        const numHeld = record.num_held;
        const daysHeld = record.days_held;
        const creatorFeeEth = record.creator_fee_eth;
        const snapshotTime = record.snapshot_time;

        console.log(`address ${walletAddress} num collections ${numCollections} num held ${numHeld} days held ${daysHeld} creator fee eth ${creatorFeeEth} snapshot time ${snapshotTime}.`);
    });

    return result;
}

// TODO improve ugly way to keep track of the UI state and react to new addresses input
var currentAddresses = Array<string>();
const TopHoldingPeriod = (addresses: Array<string>) => {
    const [topCollectors, setTopHoldingPeriod] = useState<QueryResultSet | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {  
        async function fetchData() {
            setLoading(true);
            const newData = await topHoldingPeriod(addresses);
            setTopHoldingPeriod(value => value = newData);
            setLoading(false);
        }

        if (JSON.stringify(currentAddresses) !== JSON.stringify(addresses)) {
            console.log("currentAddresses " + currentAddresses + " addresses " + addresses);
            fetchData();
            currentAddresses = addresses;
        }
    }, [addresses]);

    const loadingImage = <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
    />
    if (isLoading) return loadingImage;

    const tableHeaders: TableHeaderProps = {columns: 
        [
          {header: "# RANK"},
          {header: "Wallet"},
          {header: "# of tokens held"},
          {header: "# of collections held"},
          {header: "# of days held"},
          {header: "Creator Fee ETH"},
          {header: "Snapshot Time"},
        ]
      };

    const dataArrs: Array<Array<string | number | boolean | null>> = []
      
    topCollectors?.records?.forEach((record, index) => {
        const dataArr: Array<string | number | boolean | null> = []
        dataArr.push(index);

        const walletAddress = record.wallet;
        dataArr.push(walletAddress);

        const numHeld = record.num_held;
        dataArr.push(numHeld);

        const numCollections = record.num_collections;
        dataArr.push(numCollections);

        const daysHeld = record.days_held;
        dataArr.push(daysHeld);

        const creatorFeeEth = record.creator_fee_eth;
        dataArr.push(creatorFeeEth);

        const snapshotTime = record.snapshot_time;
        dataArr.push(snapshotTime);

        dataArrs.push(dataArr);
    });

    const tableRows: TableRowsProps<Array<string | number | boolean | null>> = {
        data: dataArrs
    };

    return Leaderboard(tableHeaders, tableRows);
}

export default TopHoldingPeriod;