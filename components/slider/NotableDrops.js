import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"

SwiperCore.use([Autoplay, Navigation]);
const NotableDrops = () => {

    const data = [
        {
            img: "1.jpg",
            title: "Chito x Givenchy",
            desc: " Make your offers before 12pm EST Nov 29th"
        },
        {
            img: "2.jpg",
            title: "   The Space Cowboys",
            desc: "50 1/1's from Roger Allan Cleaves around the world"
        },
        {
            img: "3.jpg",
            title: "Extra Dimensional",
            desc: "A collection of 100 1/1 Extra Dimensional Beings"
        },
        {
            img: "4.jpg",
            title: "Extra Dimensional",
            desc: "A collection of 100 1/1 Extra Dimensional Beings"
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".ndp_prev",
                    nextEl: ".ndp_next",
                }}
                className="notable-drops-slider"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="card">
                            <img
                                className="img-fluid card-img-top"
                                src={`/images/items/${item.img}`}
                                alt=""
                            />
                            <div className="card-body">
                                <div className="notable-drops-content-img"></div>
                                <h4 className="card-title">
                                    Chito x Givenchy
                                </h4>
                                <p>
                                    Make your offers before 12pm EST Nov
                                    29th
                                </p>
                                <Link href="/explore"><a>
                                    Explore
                                    <i className="bi bi-arrow-right-short"></i>
                                </a></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            

            <div className="arrows">
                    <span className="ndp_prev">
                        <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className="ndp_next">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </div>


        </>
    );
};

export default NotableDrops;

