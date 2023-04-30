import React from 'react';
import Link from 'next/link';

const TeamMember = () => {

    const data = [
        {
            id: 1,
            title: "Data",
            name: "Denze",
            img: "denze pfp.png",
            twitter: "https://twitter.com/_denze",
        },
        {
            id: 2,
            title: "Artist and Graphic Designer",
            name: "Joey",
            img: "joey pfp.png",
            twitter: "https://twitter.com/joey_lu",
        },
        {
            id: 3,
            title: "Data",
            name: "Karina",
            img: "karina pfp.png",
            twitter: "https://twitter.com/karinadoteth",
        },
        {
            id: 4,
            title: "Engineering",
            name: "Siyu",
            img: "siyu pfp.png",
            twitter: "https://twitter.com/JohnJsy0216",
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
                        <div className="team-social">
                            <Link href={item.twitter}>
                                <a><i className="bi bi-twitter"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>

            ))}
        </>
    );
};

export default TeamMember;