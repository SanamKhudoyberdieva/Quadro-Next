import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/fonts/stylesheet.css";
import "../assets/css/style.css";
import "../assets/css/media.css";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App;