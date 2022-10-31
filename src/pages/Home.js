import '../pages/Home.css';
import Carousel from "../components/Slider";
import ThemeType from "../components/ThemeType";
import Articles from "../components/Articles";
import Recommend from "../components/Recommend";

const Home = () => {
    return (
        <div className="homepage">
            <Carousel />
            <ThemeType />
            <Articles />
            <Recommend />
        </div>
    )
}

export default Home;