import React from 'react';
import Link from 'next/link';

const CompleteList = () => {

    const data = [
        {
            id: 1,
            title: "Avy",
            img: "3.jpg",
        },
        {
            id: 2,
            title: "Mark",
            img: "4.jpg",
        },
        {
            id: 2,
            title: "Mark",
            img: "5.jpg",
        },
        {
            id: 2,
            title: "Mark",
            img: "5.jpg",
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-xl-3 col-md-6">
                    <div className="card explore-list ">
                        <img
                            src={`/images/items/${item.img}`}
                            alt=""
                            width={150}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h4 className="card-title">
                                Hydraverse
                            </h4>
                            <p>
                                The revolutionary crowd sourced
                                funding platform. Own the show and
                                get your cut too!
                            </p>

                            <div className="complete-progress">
                                <h5 className='mb-2'>USDT/USDC</h5>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                    <span>Targeted raise</span>
                                    <h5> BUSD</h5>
                                </div>
                                <div>
                                    <h5> 300,000 </h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-end">
                                <div>
                                    <span>Token price</span>
                                    <h5> BUSD</h5>
                                </div>
                                <div>
                                    <h5> 0.04500 </h5>
                                </div>
                            </div>
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

export default CompleteList;