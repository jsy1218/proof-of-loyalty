import React from 'react';
import Link from 'next/link';

const TeamMember = () => {

    const data = [
        {
            id: 1,
            title: "Data",
            name: "0xD",
            img: "denze pfp.png",
        },
        {
            id: 2,
            title: "Advisor",
            name: "0xJ",
            img: "joey pfp.png",
        },
        {
            id: 3,
            title: "Advisor",
            name: "0xK",
            img: "karina pfp.png",
        },
        {
            id: 4,
            title: "Engineering",
            name: "0xS",
            img: "siyu pfp.png",
        },
    ];

    return (
        <>
            {data.map((item, i) => (

                <div className="col-lg-3 col-md-6">
                    <div className="team-content">
                        <img src={`/images/avatar/${item.img}`} alt="" width={100} />
                        <h3>{item.name}</h3>
                        <p>{item.title}</p>
                    </div>
                </div>

            ))}
        </>
    );
};

export default TeamMember;