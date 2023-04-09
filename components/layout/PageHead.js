import Head from "next/head";
function PageHead({ headTitle }) {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Gigo - Metaverse Web3 IGO/IDO Token Launchpad React Nextjs App"}
                </title>
                <link rel="icon" href="/favicon.png" />
            </Head>
        </>
    );
}
export default PageHead;
