import dynamic from 'next/dynamic';
import Link from "next/link";
import React, { useState } from "react";
const ThemeSwitch = dynamic(() => import('../elements/ThemeSwitch'), {
    ssr: false
})
function HeaderLanding() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);


    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key: string) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: ""
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>

            <div className="header landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <nav className="navbar navbar-expand-lg navbar-dark">
                                    <div className="brand-logo">
                                        <Link href="/"><a>
                                            <img src="/images/logo.png" alt="" className="logo-primary" />
                                            <img src="/images/logow.png" alt="" className="logo-white" />
                                        </a></Link>
                                    </div>
                                    {/* <div className="search">
                                        <form>
                                            <span><i className="ri-search-line"></i></span>
                                            <input type="text" placeholder="Search Here" />
                                        </form>
                                    </div> */}
                                    <button className="navbar-toggler" type="button" onClick={toggleTrueFalse}>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={isToggled ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                                        <ul className="navbar-nav">

                                            {/* <PerfectScrollbar> */}
                                            <li className="nav-item dropdown" onClick={() => handleToggle("1")}>
                                                {/* <a className="nav-link">Home
                                                    </a> */}
                                                <Link href="/"><a className="nav-link">Home</a></Link>
                                                {/* <div class={
                                                        isActive.key == 1
                                                            ? "dropdown-menu show"
                                                            : "dropdown-menu"
                                                    }>
                                                        <Link href="/"><a className="dropdown-item">Home 1</a></Link>
                                                        <Link href="/index2"><a className="dropdown-item">Home 2</a></Link>
                                                    </div> */}
                                            </li>
                                            <li className="nav-item dropdown" onClick={() => handleToggle("2")}>
                                                <a className="nav-link">Explore
                                                </a>
                                                <div className={
                                                    isActive.key == "2"
                                                        ? "dropdown-menu show"
                                                        : "dropdown-menu"
                                                }>
                                                {/* <Link href="/explore-grid"><a className="dropdown-item">Explore Grid</a></Link>
                                                    <Link href="/explore-list"><a className="dropdown-item">Explore List</a></Link>
                                                    <Link href="/explore-details"><a className="dropdown-item">Explore Details</a></Link>
                                                    <Link href="/explore-calendar"><a className="dropdown-item">Explore Calendar</a></Link> */}
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown" onClick={() => handleToggle("3")}>
                                                <a className="nav-link">Staking</a>
                                                {/* <Link href="/staking-one"><a className="nav-link">Staking</a></Link>
                                                <div class={
                                                    isActive.key == 3
                                                        ? "dropdown-menu show"
                                                        : "dropdown-menu"
                                                }>
                                                    <Link href="/staking-one"><a className="dropdown-item">Staking One</a></Link>
                                                    <Link href="/staking-two"><a className="dropdown-item">Staking Two</a></Link>
                                                </div> */}
                                            </li>
                                            <li className="nav-item dropdown position-statics" onClick={() => handleToggle("4")}>
                                                <a className="nav-link">Pages
                                                </a>
                                                <div className={
                                                    isActive.key == "4"
                                                        ? "dropdown-menu mega-menu show"
                                                        : "dropdown-menu mega-menu"
                                                }>
                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            <div className="mega-menu-nav">
                                                                {/* <h5>Auth</h5> */}
                                                                {/* <Link href="/kyc"><a className="dropdown-item">Kyc</a></Link> */}
                                                                {/* <Link href="/farming"><a className="dropdown-item">Farming</a></Link>
                                                                <Link href="/leaderboard"><a className="dropdown-item">Leaderboard</a></Link>
                                                                <Link href="/ranking"><a className="dropdown-item">Ranking</a></Link>
                                                                <Link href="/roadmap"><a className="dropdown-item">Roadmap</a></Link>
                                                                {/* <Link href="/tokenomics"><a className="dropdown-item">Tokenomics</a></Link> */}
                                                                {/* <Link href="/tier"><a className="dropdown-item">Tier</a></Link> */}
                                                                {/* <Link href="/team"><a className="dropdown-item">Team</a></Link>
                                                                <Link href="/contact"><a className="dropdown-item">Contact</a></Link>
                                                                {/* <Link href="/apply"><a className="dropdown-item">Apply</a></Link> */}
                                                            {/* </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mega-menu-nav"> */}
                                                                {/* <h5>Auth</h5> */}
                                                                {/* <Link href="/signin"><a className="dropdown-item">Sign in</a></Link>
                                                                <Link href="/signup"><a className="dropdown-item">Sign Up</a></Link> */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </li>
                                            {/* </PerfectScrollbar> */}
                                        </ul>
                                    </div>

                                    <div className="signin-btn d-flex align-items-center">
                                        {/* <Link href="/signin"><a className="btn btn-primary">Sign In</a></Link> */}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeaderLanding;
