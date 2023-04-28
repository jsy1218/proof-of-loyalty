import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider = () => {

    const data = [
        {
            img: "1.jpg",
            avatar: "1.png",
            title: "PFP",
            author: "Azuki"
        },
        {
            img: "2.jpg",
            avatar: "2.png",
            title: "BEANZ",
            author: "AzukiBox"
        },
        {
            img: "3.jpg",
            avatar: "3.png",
            title: "Doodles",
            author: "Doodles LLC"
        },
        {
            img: "4.jpg",
            avatar: "4.png",
            title: "Space Doodles",
            author: "Doodles LLC"
        },
        {
            img: "5.jpg",
            avatar: "5.png",
            title: "Dooplicators",
            author: "Doodles LLC"
        },
        {
            img: "6.jpg",
            avatar: "6.png",
            title: "Genesis box",
            author: "Doodles LLC"
        },
        {
            img: "7.jpg",
            avatar: "7.png",
            title: "YOU THE REAL MVP",
            author: "9GAG"
        },
        {
            img: "8.jpg",
            avatar: "8.png",
            title: "CAPTAINZ",
            author: "9GAG"
        },
        {
            img: "9.jpg",
            avatar: "9.png",
            title: "POTATOZ",
            author: "9GAG"
        },
        {
            img: "10.jpg",
            avatar: "10.png",
            title: "Proof Collective",
            author: "Proof"
        },
        {
            img: "11.jpg",
            avatar: "11.png",
            title: "Moonbirds",
            author: "Proof"
        },
        {
            img: "12.jpg",
            avatar: "12.png",
            title: "Oddities",
            author: "Proof"
        },
        {
            img: "13.jpg",
            avatar: "13.png",
            title: "Clone X",
            author: "RTFKT"
        },
        {
            img: "14.jpg",
            avatar: "14.png",
            title: "Bored Ape Yacht Club",
            author: "Yugalabs"
        },
        {
            img: "15.jpg",
            avatar: "15.png",
            title: "Mutant Ape Yacht Club",
            author: "Yugalabs"
        },
        {
            img: "16.jpg",
            avatar: "16.png",
            title: "Bored Ape Kennel Club",
            author: "Yugalabs"
        },
        {
            img: "17.jpg",
            avatar: "17.png",
            title: "Bored Ape Kennel Club",
            author: "Yugalabs"
        },
        {
            img: "18.jpg",
            avatar: "18.png",
            title: "Meebits",
            author: "Yugalabs"
        },
        {
            img: "19.jpg",
            avatar: "19.png",
            title: "Otherdeed for Otherside",
            author: "Yugalabs"
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".intro_prev",
                    nextEl: ".intro_next",
                }}
                className="custom-class"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="slider-item">
                            <img
                                src={`/images/items/${item.img}`}
                                alt=""
                                className="img-fluid"
                            />
                            {/* <div className="slider-item-avatar">
                                <img
                                    src={`/images/avatar/${item.avatar}`}
                                    alt=""
                                />
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.author}</p>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}

                <div className="arrows">
                    <span className="intro_prev">
                        <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className="intro_next">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </div>
            </Swiper>


        </>
    );
};

export default IntroSlider;

