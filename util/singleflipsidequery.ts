import { Flipside, QueryResultSet, Query } from "@flipsidecrypto/sdk/dist/src";

export const flipsideQueryResult: (sql: string, pageSize: number) => Promise<QueryResultSet> = async (sql: string, pageSize: number) => {
    // Initialize `Flipside` with your API key
    const flipside = new Flipside(
        process.env.SHROOMDK_API_KEY ?? "11e049d7-99aa-4559-91bb-4c715c9f86ba", // default to a public API KEY. TODO somehow env variable doesn't work yet
        "https://api-v2.flipsidecrypto.xyz"
      );

    const query: Query = {
        sql: sql,
        ttlMinutes: 10,
    }
    const result: QueryResultSet = await flipside.query.run(query);

    return result;
}