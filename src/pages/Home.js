import '../pages/Home.css';
import Slider from "../components/Slider";
import ThemeType from "../components/ThemeType";
import Articles from "../components/Articles";
import Recommend from "../components/Recommend";
import styled from 'styled-components';

const Home = () => {
    return (
        <div className="homepage">
            <Slider />
            <ThemeType />
            <Articles />
            <Recommend />
        </div>
    )
}

export default Home;