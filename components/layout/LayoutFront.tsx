import { useEffect, useState } from "react";
import Bottom from "./Bottom";
import Footer from "./Footer";
import HeaderLanding from "./HeaderLanding";
import PageHead from "./PageHead";
import PageTitleLanding from "./PageTitleLanding";

export type Props = {
    headTitle?: string,
    childrenPage?: string,
    pageTitle?: string,
    pageTitleSub?: string,
    pageClass?: string,
    parent?: string,
    child?: string,
    children: React.ReactNode | React.ReactNode[];
}

const LayoutFront = (props: Props) => {
    const { headTitle, childrenPage, pageTitle, pageTitleSub, pageClass, parent, child, children } = props;

    const [height, setHeight] = useState<number | undefined>();
    useEffect(() => {
        setHeight(window.screen.height);
    }, []);
    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="main-wrapper" className={pageClass}>
                <HeaderLanding />

                    {pageTitle && (
                        <PageTitleLanding
                            pageTitle={pageTitle}
                            pageTitleSub={pageTitleSub}
                            parent={parent}
                            child={child}
                        />
                    )}

                    {childrenPage}
              
                    {children}
                <Bottom />
                <Footer />
                
            </div>
        </>
    );
};

export default LayoutFront;
