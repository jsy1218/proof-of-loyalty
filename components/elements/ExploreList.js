import Link from 'next/link';

const ExploreList = () => {

    const data = [
        {
            id: 1,
            title: "Avy",
            img: "1.jpg",
            avatar: "1.jpg",
        },
        {
            id: 2,
            title: "Mark",
            img: "2.jpg",
            avatar: "2.jpg",
        },
        {
            id: 2,
            title: "Mark",
            img: "3.jpg",
            avatar: "3.jpg",
        },
        {
            id: 2,
            title: "Mark",
            img: "3.jpg",
            avatar: "3.jpg",
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-xl-3 col-md-6">
                    <div className="card explore-list">
                        <div className="explore-list-banner">
                            <img
                                src={`/images/items/${item.img}`}
                                alt=""
                                width={150}
                                className="card-img-top"
                            />
                        </div>


                        <div className="card-body">

                            <div className="explore-list-profile">
                                <img src={`/images/avatar/${item.avatar}`} alt="" />
                                <h4 className="card-title">
                                    Hydraverse
                                </h4>
                                <span>$RETH</span>
                                <div className="game-social">

                                    <Link href="#">
                                        <a><i className="bi bi-tiktok"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="bi bi-telegram"></i></a>
                                    </Link>
                                    <Link href="#">
                                        <a><i className="bi bi-discord"></i></a>
                                    </Link>
                                </div>
                            </div>


                            <p>
                                The revolutionary crowd sourced
                                funding platform. Own the show and
                                get your cut too!
                            </p>
                            <div className="d-flex justify-content-between align-items-center">

                                <span>Total raise</span>
                                <h5> 300,000 </h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Starts</span>
                                <h5> April 7, 11:00 UTC</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Price</span>
                                <h5> 1 RETH = 0.01 BUSD</h5>
                            </div>

                            <div className="complete-progress">
                                <div className="d-flex justify-content-between">
                                    <span>registration opens in 2 days, 3 hours</span>
                                    <span>0%</span>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>0 BUSD</span>
                                    <span>0 / 568742648.35 RETH</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div>
                                    <span>1x(approx)=</span>
                                    <h6>$33.17</h6>
                                </div>
                                <div className='text-end'>
                                    <span>Listing Time</span>
                                    <h6>April 15, 2022 11:00 UTC</h6>
                                </div>
                            </div>
                            <hr />
                            <Link href="#">
                                <a className="btn btn-primary w-100">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ExploreList;