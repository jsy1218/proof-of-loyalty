import Link from "next/link";
import { useState } from "react";
import LayoutFront from "../components/layout/LayoutFront";
const Staking2 = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const data = [
        {
            id: 1,
            title: "Avy",
            img: "1.jpg",
        },
        {
            id: 2,
            title: "Mark",
            img: "2.jpg",
        },
        {
            id: 3,
            title: "Mark",
            img: "3.jpg",
        },
        {
            id: 4,
            title: "Mark",
            img: "4.jpg",
        },
    ];

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Stacking"}
                pageTitle={"Stacking"}
                pageTitleSub={"Welcome Stacking Page"}
                parent={"Home"}
                child={"Stacking"}>
                <div className="stacking section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="section-title">
                                    <h2>Stacking</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                {data.map((item, i) => (
                                    <div className="card">
                                        <div className="stacking-content card-body">
                                            <div className="stacking-toggle" onClick={() => handleOnClick(item.id)}>
                                                <i className={activeIndex === item.id ? "bi bi-chevron-down" : "bi bi-chevron-right"}></i>
                                            </div>
                                            <div className="stacking-img">
                                                <img src="/images/igos/1.png" alt="" width={150} className="me-4" />
                                                <div className="stacking-desc">
                                                    <h4>GAME LP Staking</h4>
                                                    <span>GAME-BUSD / GAME</span>
                                                    <p>Stake GAME LP tokens to participate in IDOs. Details on <Link href="#">
                                                        <a>GAME Levels page</a>
                                                    </Link></p>

                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5>0 LP</h5>
                                                                <p>Staked</p>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5 className="mb-0">0.00 GAME</h5>
                                                                <p>Earned</p>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5>21%</h5>
                                                                <p>APR</p>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5>$5,655,490.81</h5>
                                                                <p>LP Price</p>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="stack-info">
                                                                <h5>$148,456.08</h5>
                                                                <p>Total Value Locked</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className={activeIndex === item.id ? "d-block" : "d-none"} >
                                                <hr />
                                                <div className="row" >
                                                    <div className="col-md-4">
                                                        <form>
                                                            <label className="form-label">
                                                                Deposit
                                                            </label>
                                                            <input type="text" className="form-control mb-4" />
                                                            <button className="btn w-100">Approve</button>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <form>
                                                            <label className="form-label">
                                                                Withdraw
                                                            </label>
                                                            <input type="text" className="form-control mb-4" />
                                                            <button className="btn w-100">Withdraw</button>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <form>
                                                            <label className="form-label">
                                                                Pending rewards
                                                            </label>
                                                            <h5 className="mb-0">0.00 GAME</h5>
                                                            <small>Rewards are depleted, ask admins to fund it.</small>
                                                            <button className="btn w-100 claim-btn">Claim</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Staking2;