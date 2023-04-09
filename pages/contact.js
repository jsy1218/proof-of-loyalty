import LayoutFront from "../components/layout/LayoutFront";

const Contact = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Contact"}
                pageTitle={"Contact"}
                pageTitleSub={"Welcome Contact Page"}
                parent={"Home"}
                child={"Contact"}
            >
                <div class="contact-form section-padding" id="contact">
                    <div class="container">
                        <div class="row py-lg-5 justify-content-center">
                            <div class="col-xl-7">
                                <div class="section-title text-center">
                                    <span>Ask Question</span>
                                    <h3>Let us hear from you directly!</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-4 col-md-4 col-sm-4">
                                <div class="info-list">
                                    <h4 class="mb-3">Address</h4>
                                    <ul>
                                        <li><i class="fa fa-map-marker"></i> California, USA</li>
                                        <li><i class="fa fa-phone"></i> (+880) 1243 665566</li>
                                        <li><i class="fa fa-envelope"></i> hello@example.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-8 col-md-8 col-sm-8">
                                <form method="post" name="myform" class="contact_validate">
                                    <div class="row">
                                        <div class="col-12 col-md-6">
                                            <div class="mb-3">
                                                <label for="contactName">
                                                    Full name
                                                </label>
                                                <input type="text" class="form-control" id="contactName" placeholder="Full name"
                                                    name="firstname" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="mb-3">
                                                <label for="contactEmail">
                                                    Email
                                                </label>
                                                <input type="email" class="form-control" name="email"
                                                    placeholder="hello@domain.com" />

                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="mb-3">
                                                <textarea class="form-control p-3" name="message" rows="5" style={{ "height": "200px" }}
                                                    placeholder="Tell us what we can help you with!"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary px-4">
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Contact;