import Head from "next/head";
function PageHead({ headTitle }) {
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
