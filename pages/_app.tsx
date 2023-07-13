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

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            {/* <ThemeSwitch/> */}
        </>
    )
}

export default MyApp
