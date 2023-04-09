import dynamic from 'next/dynamic';
import Link from "next/link";
import React, { useState } from "react";
const ThemeSwitch = dynamic(() => import('../elements/ThemeSwitch'), {
    ssr: false
})
function HeaderDemo() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <>
            <div className="header landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                                    <div className="brand-logo">
                                        <Link href="/"><a>
                                            <img src="/images/logo.png" alt="" className="logo-primary" />
                                            <img src="/images/logow.png" alt="" className="logo-white" />
                                        </a></Link>
                                    </div>

                                    <div className="signin-btn d-flex align-items-center">
                                        {/* <ThemeSwitch /> */}
                                        <Link href="#"><a className="btn btn-primary">Buy Now</a></Link>
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
export default HeaderDemo;
