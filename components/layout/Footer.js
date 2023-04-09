import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright">
                                <p>
                                    © Copyright 2022 <a href="#">Gigo</a>{" "}
                                    All Rights Reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="footer-social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bi bi-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;