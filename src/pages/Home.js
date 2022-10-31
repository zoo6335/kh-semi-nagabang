import '../pages/Home.css';
import Carousel from "../components/Slider";
import ThemeType from "../components/ThemeType";
import Articles from "../components/Articles";
import Recommend from "../components/Recommend";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="homepage">
            <Carousel />
            <ThemeType />
            <Articles />
            <Recommend />
            <Footer />
        </div>
    )
}

export default Home;