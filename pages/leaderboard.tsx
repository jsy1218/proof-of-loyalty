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
                                <th>Creator Fees Paid (ETH)</th>
                                <th>Creator Fees Percent</th>
                                <th>Full Creator Fees Paid</th>
                                <th>Snapshot Time</th>
                            </tr>
                            {data?.records?.map((record, i) => (
                                <tr>
                                    <td>{i}</td>
                                    <td>{record.wallet}</td>
                                    <td>{record.creator_fee_eth}</td>
                                    <td>{record.creator_fee_perc}</td>
                                    <td>{record.full_creator_fees_paid}</td>
                                    <td>{record.snapshot_time}</td>
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