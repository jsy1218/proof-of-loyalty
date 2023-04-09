import Head from "next/head";

type PageHeadProps = {
    headTitle?: string
}

function PageHead(props: PageHeadProps) {
    const { headTitle } = props 

    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Proof of loyalty protocol"}
                </title>
                <link rel="icon" href="/favicon.png" />
            </Head>
        </>
    );
}
export default PageHead;
