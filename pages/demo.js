import Link from "next/link";
import HeaderDemo from "../components/layout/HeaderDemo";
function Demo() {

    const dataFront = [
        {
            title: "home",
            img: "home.png",
            path: "",
        },
        {
            title: "explore grid",
            img: "explore-grid.png",
            path: "explore-grid",
        },
        {
            title: "explore list",
            img: "explore-list.png",
            path: "explore-list",
        },
        {
            title: "explore details",
            img: "explore-details.png",
            path: "explore-details",
        },
        {
            title: "staking",
            img: "staking.png",
            path: "staking-one",
        },
        {
            title: "farming",
            img: "farming.png",
            path: "farming",
        },
        {
            title: "leaderboard",
            img: "leaderboard.png",
            path: "leaderboard",
        },
        {
            title: "ranking",
            img: "ranking.png",
            path: "ranking",
        },
        {
            title: "roadmap",
            img: "roadmap.png",
            path: "roadmap",
        },
        {
            title: "team",
            img: "team.png",
            path: "team",
        },
        {
            title: "contact",
            img: "contact.png",
            path: "contact",
        },
        {
            title: "signin",
            img: "signin.png",
            path: "signin",
        },
        {
            title: "signup",
            img: "signup.png",
            path: "signup",
        }


    ];
    // const dataAdmin = [
    //     {
    //         title: "dashboard",
    //         img: "dashboard.png",
    //         path: "dashboard",
    //     },
    //     {
    //         title: "bids",
    //         img: "bids.png",
    //         path: "bids",
    //     },
    //     {
    //         title: "saved",
    //         img: "saved.png",
    //         path: "saved",
    //     },
    //     {
    //         title: "collections",
    //         img: "collections.png",
    //         path: "collections",
    //     },
    //     {
    //         title: "wallet",
    //         img: "wallet.png",
    //         path: "wallet",
    //     },
    //     {
    //         title: "settings",
    //         img: "settings.png",
    //         path: "settings",
    //     },
    //     {
    //         title: "application",
    //         img: "application.png",
    //         path: "application",
    //     },
    //     {
    //         title: "security",
    //         img: "security.png",
    //         path: "security",
    //     },
    //     {
    //         title: "log",
    //         img: "log.png",
    //         path: "log",
    //     },
    //     {
    //         title: "payment",
    //         img: "payment.png",
    //         path: "payment",
    //     },
    //     {
    //         title: "api",
    //         img: "api.png",
    //         path: "apis",
    //     },
    //     {
    //         title: "signin",
    //         img: "signin.png",
    //         path: "signin",
    //     },
    //     {
    //         title: "signup",
    //         img: "signup.png",
    //         path: "signup",
    //     },
    //     {
    //         title: "locked",
    //         img: "locked.png",
    //         path: "locked",
    //     },
    //     {
    //         title: "otp1",
    //         img: "otp1.png",
    //         path: "otp1",
    //     },
    //     {
    //         title: "otp2",
    //         img: "otp2.png",
    //         path: "otp2",
    //     },
    //     {
    //         title: "email",
    //         img: "email.png",
    //         path: "email",
    //     },
    //     {
    //         title: "reset",
    //         img: "reset.png",
    //         path: "reset",
    //     },

    // ];

    return (
        <>
            <HeaderDemo />
            {/* <div className="intro section-padding bg-light" id="intro">
                <div className="container">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-xl-5 col-md-5 py-md-5">

                            <div className="intro-content my-5">
                                <h1>
                                    Neftify - NFT Marketplace React Nextjs App
                                </h1>
                                <p>
                                    Neftify is the complete UX & UI dashboard for
                                    NFT. Here included bids, collection,
                                    wallet, and all user setting pages
                                    including profile, application, activity,
                                    payment method, api, sign in & sign up etc.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-7 py-md-5">
                            <div className="intro-demo_img">
                                <img
                                    src="/images/demo/intro.png"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="demo section-padding mb-5 mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Demo</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {dataFront.map((item, i) => (
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href={`/${item.path}`}>
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src={`/images/demo/${item.img}`}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Admin</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {dataAdmin.map((item, i) => (
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href={`/${item.path}`}>
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src={`/images/demo/${item.img}`}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>

            <div className="features section-padding bg-light" data-scroll-index="2">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <span>Problem?</span>
                                <h2>Don't Worry, I am waiting your question</h2>
                                <p>Refreshing my inbox, waiting for your mail </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="customer-support-content">
                                <span><i className="fab fa-whatsapp"></i></span>
                                <h4>+8801843666660</h4>
                                <p>Without sleeping time, I am avaiable in Whstsapp. I recommend Whstsapp</p>
                                <a href="https://api.whatsapp.com/send?phone=008801843666660">Send Message <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="customer-support-content">
                                <span><i className="fab fa-skype"></i></span>
                                <h4>sporsho9</h4>
                                <p>Without sleeping time, I am avaiable in skype. I also recommend Skype</p>
                                <a href="skype:profile_name?sporsho9">Add Skype <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="customer-support-content">
                                <span><i className="fas fa-envelope"></i></span>
                                <h4>imsaifun@gmail.com</h4>
                                <p>When you send me email, I get notification, and quickly reply you</p>
                                <a href="mailto:imsaifun@gmail.com">Send Email <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="customer-support-content">
                                <span><i className="fas fa-headset"></i></span>
                                <h4>Pre sale question</h4>
                                <p>You have need more design or customization? Dont worry about Quality</p>
                                <a href="https://docs.google.com/forms/d/1KjSr2pRP9GSydodBYOz05ke6faVX0MgFCAznaYdKl6E">Hire
                                    Now <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Demo;
