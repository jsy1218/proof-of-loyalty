import LayoutFront from "../components/layout/LayoutFront";

const Tier = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Tier"}
                pageTitle={"Tier"}
                pageTitleSub={"Welcome Tier Page"}
                parent={"Home"}
                child={"Tier"}
            >
                <div className="tier section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tier-content">
                                    <div class="difference__table">
                                        <div class="difference__row">
                                            <div class="difference__cell difference__cell--feature"></div>
                                            <div class="difference__cell difference__cell--qbo">
                                                Pro
                                            </div>
                                            <div class="difference__cell difference__cell--qbo">
                                                Premier
                                            </div>
                                            <div class="difference__cell difference__cell--qbo">
                                                Premier
                                            </div>
                                        </div>
                                        <div class="difference__row">
                                            <div class="difference__cell difference__cell--feature">Monthly subscription cost (excl. VAT)</div>
                                            <div class="difference__cell">
                                                <strong>From &pound;22</strong>
                                            </div>
                                            <div class="difference__cell">
                                                <strong>From &pound;45</strong>
                                            </div>
                                            <div class="difference__cell">
                                                <strong>From &pound;45</strong>
                                            </div>
                                        </div>
                                        <div class="difference__section">
                                            Get started easily
                                        </div>
                                        <div class="difference__row">
                                            <div class="difference__cell difference__cell--feature">30 days' free telephone support 2 and 60 day money back guarantee</div>
                                            <div class="difference__cell">
                                                <span class="difference__tick"></span>
                                            </div>
                                            <div class="difference__cell">
                                                <span class="difference__tick"></span>
                                            </div>
                                            <div class="difference__cell">
                                                <span class="difference__tick"></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Tier;