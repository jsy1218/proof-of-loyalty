import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'swiper/swiper.min.css';
// import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/navigation";
import '../public/css/style.css';
// import ThemeSwitch from './../components/elements/ThemeSwitch';
// const ThemeSwitch = dynamic(import("./../components/elements/ThemeSwitch"), {
//     ssr: false,
// });
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { wagmiClient } from '../services/web3/wagmiClient';
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { appChains } from '../services/web3/wagmiConnectors';
import { BlockieAvatar } from '../components/scaffold-eth/BlockieAvatar';
import { useEffect, useState } from "react";
import { useDarkMode } from "usehooks-ts";


function MyApp({ Component, pageProps }: AppProps) {
    const { isDarkMode } = useDarkMode();
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        setIsDarkTheme(isDarkMode);
      }, [isDarkMode]);

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                chains={appChains.chains}
                avatar={BlockieAvatar}
                theme={isDarkTheme ? darkTheme() : lightTheme()}
            >
            <Component {...pageProps} />

            </RainbowKitProvider>
            {/* <ThemeSwitch/> */}
        </WagmiConfig>
    )
}

export default MyApp
