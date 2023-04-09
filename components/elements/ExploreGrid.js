import React from 'react';
import  Link  from 'next/link';

const ExploreGrid = () => {

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
            id: 2,
            title: "Mark",
            img: "3.jpg",
        },
        {
            id: 2,
            title: "Mark",
            img: "4.jpg",
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-xl-6">
                    <div className="explore-grid">
                        <div className="igo-status">
                            TBA
                        </div>
                        <div className="explore-grid-content">
                            <img src={`/images/items/${item.img}`} alt="" className="me-4" />
                            <div className="game-desc">
                                <h4>Pixel Pix</h4>
                                <p>Unleash your creativity starting with one PIXEL. Create anything you can imagine in the PIXELVERSE or buy pre-made PIXIES.</p>
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
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className='game-info'>Total raise:<span>500k</span></div>
                            </div>
                            <div className="col-md-4">
                                <div className='game-info'>Total raise:<span>500k</span></div>
                            </div>
                            <div className="col-md-4">
                                <div className='game-info'>Total raise:<span>500k</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ExploreGrid;