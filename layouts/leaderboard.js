import LayoutFront from "@components/LayoutFront";

const Leaderboard = () => {

    const data = [
        {
            id: 1,
            title: "Avy"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
        {
            id: 2,
            title: "Mark"
        },
    ];



    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Leaderboard"}
                pageTitle={"Leaderboard"}
                pageTitleSub={"Welcome Leaderboard Page"}
                parent={"Home"}
                child={"Leaderboard"}

            >
                <div className="leaderboard section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="leaderboard-table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th># RANK</th>
                                                    <th>Name</th>
                                                    <th>Public Key</th>
                                                    <th>locked</th>
                                                    <th>Balance</th>
                                                </tr>
                                                {data.map((item, i) => (
                                                    <tr>
                                                        <td>01</td>
                                                        <td>John Doe</td>
                                                        <td>0x95e441....ddd97400</td>
                                                        <td>365 Days</td>
                                                        <td>$305,626.99</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Leaderboard;