import React from 'react';
import Link from 'next/link';

const TeamMember = () => {

    const data = [
        {
            id: 1,
            title: "Avy",
            img: "1.png",
        },
        {
            id: 2,
            title: "Mark",
            img: "2.png",
        },
        {
            id: 2,
            title: "Mark",
            img: "3.png",
        },
        {
            id: 2,
            title: "Mark",
            img: "4.png",
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-lg-3 col-md-6">
                    <div className="team-content">
                        <img src={`/images/avatar/${item.img}`} alt="" width={100} />
                        <h3>John Abraham</h3>
                        <p>Cheif Executive Officer</p>
                        <div className="team-social">
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

            ))}
        </>
    );
};

export default TeamMember;