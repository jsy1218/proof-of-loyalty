import { Row, QueryResultSet, QueryResultRecord } from "@flipsidecrypto/sdk/dist/src";

export const flipsideQueryResult: (sql: string, pageSize: number) => Promise<QueryResultSet> = async (sql: string, pageSize: number) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", process.env.SHROOMDK_API_KEY ?? "11e049d7-99aa-4559-91bb-4c715c9f86ba"); // default to a public API KEY. TODO somehow env variable doesn't work yet);
    

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
    
    var queryState = 'UNDEFINED'
    do {
      try {
        const queryRun = await fetch("https://api-v2.flipsidecrypto.xyz/json-rpc", requestOptions)
          .then(response => {
            return response.text();
          } 
        );
        queryState = JSON.parse(queryRun).result.queryRun.state
      } catch (error) {
        console.log(error)
      }
    } while (queryState !== "QUERY_STATE_SUCCESS")
          
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