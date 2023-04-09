import LayoutFront from "../components/layout/LayoutFront";

const IgoRanking = () => {

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
    ];



    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Ranking"}
                pageTitle={"Ranking"}
                pageTitleSub={"Welcome Ranking Page"}
                parent={"Home"}
                child={"Ranking"}
            >
                <div className="ranking section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="ranking-table">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th># RANK</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>CHG 24H</th>
                                                    <th>Market CAP</th>
                                                    <th>VOL 24h</th>
                                                    <th>IGO ROI</th>
                                                </tr>
                                                {data.map((item, i) => (
                                                    <tr>
                                                        <td>01</td>
                                                        <td><img src="/images/items/1.jpg" alt="Previous-Image" width={30} /> Dragon Run (DCON)</td>
                                                        <td>$25.00</td>
                                                        <td>3.88%</td>
                                                        <td>$26.99</td>
                                                        <td>$1.7M</td>
                                                        <td>54.096x</td>
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


export default IgoRanking;