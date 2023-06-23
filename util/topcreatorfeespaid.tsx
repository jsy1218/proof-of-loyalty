import { RotatingLines } from 'react-loader-spinner';
import { Row, QueryResultSet, QueryResultRecord } from "@flipsidecrypto/sdk/dist/src";
import { useEffect, useState } from 'react';
import Leaderboard from "../pages/leaderboard";
import TableHeaderProps from "./tableheaderprops";
import TableRowsProps from "./tablerowprops";

const topCreatorFeesPaid = async (addresses: Array<string>) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", process.env.SHROOMDK_API_KEY ?? "11e049d7-99aa-4559-91bb-4c715c9f86ba"); // default to a public API KEY. TODO somehow env variable doesn't work yet);

    // Parameters can be passed into SQL statements via simple & native string interpolation
    const nftContractAddress = addresses.join(';');
    const creatorFeePercentage = 0.03;
    const snapshotTime = "2032-01-01 12:00";
    const pageSize = 10
    
    // Create a query object for the `query.run` function to execute
    const sql = `WITH
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
              ('${creatorFeePercentage}')
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
          , e.ens_name || '.eth' AS ens
          , COALESCE(e.ens_name || '.eth', s.wallet) AS ens_or_wallet
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
        LEFT JOIN crosschain.core.ez_ens e ON e.ens_set = 'Y' AND e.owner = s.wallet
        ORDER BY creator_fee_usd DESC
      )

    select TOP ${pageSize} * from output`;

    var raw = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "createQueryRun",
      "params": [
        {
          "resultTTLHours": 1,
          "maxAgeMinutes": 0,
          "sql": sql,
          "tags": {
            "source": "proof-of-loyalty",
            "env": "prod"
          },
          "dataSource": "snowflake-default",
          "dataProvider": "flipside"
        }
      ],
      "id": 1
    });

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch("https://api-v2.flipsidecrypto.xyz/json-rpc", requestOptions)
      .then(response => { 
        return response.text();
      } 
    );
    const queryRunId = JSON.parse(response).result.queryRun.id

    var raw = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "getQueryRun",
      "params": [
        {
          "queryRunId": queryRunId
        }
      ],
      "id": 1
    });
    
    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    var queryRun = await fetch("https://api-v2.flipsidecrypto.xyz/json-rpc", requestOptions)
      .then(response => {
        return response.text();
      } 
    );
    var queryState = JSON.parse(queryRun).result.queryRun.state
    
    while (queryState !== "QUERY_STATE_SUCCESS") {
      queryRun = await fetch("https://api-v2.flipsidecrypto.xyz/json-rpc", requestOptions)
        .then(response => {
          return response.text();
        } 
      );
      queryState = JSON.parse(queryRun).result.queryRun.state
    }
          
    var raw = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "getQueryRunResults",
      "params": [
        {
          "queryRunId": queryRunId,
          "format": "csv",
          "page": {
            "number": 1,
            "size": pageSize
          }
        }
      ],
      "id": 1
    });
    
    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const queryResult = await fetch("https://api-v2.flipsidecrypto.xyz/json-rpc", requestOptions)
      .then(response => {
        return response.text(); 
      } 
    );
    const resultJson = JSON.parse(queryResult)
    console.log(resultJson)
    console.log(resultJson.result.rows)
    const rows: Array<Row> = resultJson.result.rows
    const columns: Array<string> = resultJson.result.columnNames
    const columnTypes: Array<string> = resultJson.result.columnTypes

    console.log(rows)

    const records: Array<QueryResultRecord> = rows.map((row) => 
      { 
        let record: QueryResultRecord = {};
        row.map((item, itemIndex) => 
        { 
          record[columns[itemIndex].toLowerCase()] = item
        }) 
        return record
      }
    )

    const result: QueryResultSet = { queryId: queryRunId, status: "finished", columns: columns, columnTypes: columnTypes, rows: rows, runStats: null, records: records, error: null }

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