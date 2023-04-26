import { QueryResultSet } from "@flipsidecrypto/sdk/dist/src";

const Leaderboard = (data?: QueryResultSet) => {
    return (
        <>
            <div className="leaderboard-table">
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th># RANK</th>
                                <th>Public Key</th>
                                <th>Creators Fee Contributed (ETH)</th>
                            </tr>
                            {data?.records?.map((record, i) => (
                                <tr>
                                    <td>{i}</td>
                                    <td>{record.wallet}</td>
                                    <td>{record.creator_fee_eth}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Leaderboard;