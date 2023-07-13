import '@rainbow-me/rainbowkit/styles.css';
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
import {
    getDefaultWallets,
    RainbowKitProvider,
  } from '@rainbow-me/rainbowkit';
  import { configureChains, createConfig, WagmiConfig } from 'wagmi';
  import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zora,
  } from 'wagmi/chains';
  import { alchemyProvider } from 'wagmi/providers/alchemy';
  import { publicProvider } from 'wagmi/providers/public';
  

  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, zora],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID ?? "Z_0rRsWcV0IrspOawXK-tMp9kMgGC8Xm" }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'a6ee2113cedbba640237f87170e0104b',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })
  
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                <Component {...pageProps} />
                {/* <ThemeSwitch/> */}
            </RainbowKitProvider>
        </WagmiConfig>
        </>
    )
}

export default MyApp
