import Categories from "../components/Categories";
import { useCallback, useState } from "react";
import logo from "../img/nagabang_logo2.png";
// import { Link } from "react-router-dom";
import Slider from "../components/Slider.js";

const Home = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []); // 화면 첫렌더링 시 카테고리값을 갖게 됨

    return (
        <div>
            <img src={logo} name="logo" alt="nagabang logo" style={{}} />
            <Categories category={category} onSelect= {onSelect} />
            <Slider />

            {/* <Link to="/home">이거뭐,,어쩐다고</Link> */}
        </div> 
    )
}

export default Home;