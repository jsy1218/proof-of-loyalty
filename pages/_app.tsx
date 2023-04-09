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

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            {/* <ThemeSwitch/> */}
        </>
    )
}

export default MyApp
