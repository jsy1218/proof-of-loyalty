import { RotatingLines } from 'react-loader-spinner';
import { Flipside, Query, QueryResultSet } from "@flipsidecrypto/sdk/dist/src";
import { useEffect, useState } from 'react';
import Leaderboard from "../pages/leaderboard";
import TableHeaderProps from "./tableheaderprops";
import TableRowsProps from "./tablerowprops";
import delimiter from "../constants/addressdelimiter";

const topCreatorFeesPaid = async (addresses: Array<string>) => {
    // Initialize `Flipside` with your API key
    const flipside = new Flipside(
      process.env.SHROOMDK_API_KEY ?? "11e049d7-99aa-4559-91bb-4c715c9f86ba", // default to a public API KEY. TODO somehow env variable doesn't work yet
      "https://api-v2.flipsidecrypto.xyz"
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
                  SPLIT(data.nft_contract_address, ';') AS input -- input can be separated by semi-colons
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
                    WHEN to_timestamp_ntz(data.snapshot_time) > date_trunc('minute', current_timestamp) THEN date_trunc('day', current_timestamp) -- adjust the time if input is a future time
                    ELSE date_trunc('day', to_timestamp_ntz(data.snapshot_time))
                END AS snapshot_time -- use the end of the previous day / start of specified day as the snapshot time
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
    
        , snapshot_time_check AS (
            SELECT
                CASE
                    /* if the required day of data is incomplete, set time to the previous day */
                    WHEN block_time < (SELECT snapshot_time FROM input_time) THEN (SELECT snapshot_time FROM input_time) - interval '1 day'
                    /* otherewise, use the originally calculated time */
                    ELSE (SELECT snapshot_time FROM input_time)
                END AS actual_snapshot_time
            FROM (
                SELECT MAX(block_timestamp) AS block_time FROM ethereum.core.ez_nft_transfers WHERE block_timestamp > current_timestamp - interval '24 hour'
            )
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
            , APPROX_COUNT_DISTINCT(tx_hash) AS num_txns
          FROM ethereum.core.ez_nft_sales s
          LEFT JOIN ethereum.core.fact_hourly_token_prices p ON date_trunc('hour', s.block_timestamp) = p.hour
            AND s.currency_address = p.token_address
          LEFT JOIN ethereum.core.fact_hourly_token_prices p_eth ON date_trunc('hour', s.block_timestamp) = p_eth.hour
            AND p_eth.symbol = 'WETH'
          WHERE true 
            AND block_timestamp <= (SELECT snapshot_time FROM input_time)
            AND s.price_usd > 0
            AND COALESCE(s.creator_fee_usd,0) >= 0
            AND s.nft_address IN (SELECT nft_contract_address FROM input_contracts)
          GROUP BY 1
        )
    
        , output AS (
          SELECT
            s.wallet
            , COALESCE(s.num_txns,0) AS num_sales
            , s.vol_eth
            , s.vol_usd
            , s.creator_fee_eth
            , COALESCE(s.creator_fee_usd,0) AS creator_fee_usd
            , COALESCE(DIV0NULL(s.creator_fee_usd, s.vol_usd),0) AS creator_fee_perc
            , CASE
              WHEN s.vol_usd is null THEN ''
              WHEN s.vol_usd is not null AND DIV0NULL(s.creator_fee_usd, s.vol_usd) >= (SELECT creator_fee_perc FROM input_creator_fee_perc) THEN TRUE
              ELSE FALSE
            END AS full_creator_fees_paid
            , (SELECT actual_snapshot_time FROM snapshot_time_check) AS snapshot_time
          FROM sales s
          ORDER BY creator_fee_usd DESC
        )
    
      select TOP 10 * from output`,
        ttlMinutes: 10,
    };
    
    // Send the `Query` to Flipside's query engine and await the results
    const result: QueryResultSet = await flipside.query.run(query);

    // Iterate over the results
    result?.records?.forEach((record) => {
        const walletAddress = record.wallet;
        const creatorFeeEth = record.creator_fee_eth;
        const creatorFeePerc = record.creator_fee_perc;
        const fullCreatorFeesPaid = record.full_creator_fees_paid;
        const snapshotTime = record.snapshot_time;
        console.log(`address ${walletAddress} creator fee ${creatorFeeEth} creator fee percent ${creatorFeePerc} full creator fees paid ${fullCreatorFeesPaid} snapshot time ${snapshotTime}.`);
    });

    return result;
}

// TODO improve ugly way to keep track of the UI state and react to new addresses input
var currentAddresses = Array<string>();
const TopCreatorFeesPaid = (addresses: Array<string>) => {
    const [topCollectors, setTopCreatorFeesPaid] = useState<QueryResultSet | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const newData = await topCreatorFeesPaid(addresses);
            setTopCreatorFeesPaid(value => value = newData);
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
            {header: "Creator Fees Paid (ETH)"},
            {header: "Creator Fees Percent"},
            {header: "Full Creator Fees Paid"},
        ]
    };

    const dataArrs: Array<Array<string | number | boolean | null>> = []
      
    topCollectors?.records?.forEach((record, index) => {
        const dataArr: Array<string | number | boolean | null> = []
        dataArr.push(index + 1);

        const walletAddress = record.wallet;
        dataArr.push(walletAddress);

        const creatorFeeEth = record.creator_fee_eth;
        dataArr.push(creatorFeeEth);

        const creatorFeePerc = record.creator_fee_perc;
        dataArr.push(creatorFeePerc);

        const fullCreatorFeesPaid = record.full_creator_fees_paid;
        dataArr.push(fullCreatorFeesPaid);

        dataArrs.push(dataArr);
    });

    const tableRows: TableRowsProps<Array<string | number | boolean | null>> = {
        data: dataArrs
    };

    return Leaderboard(tableHeaders, tableRows);
}

export default TopCreatorFeesPaid;