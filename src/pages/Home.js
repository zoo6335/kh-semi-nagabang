import Categories from "../components/Categories";
import { Fragment, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider.js";
import logo from "../img/nagabang_logo_w.png";
import '../pages/Home.css';
import ghost from "../img/ghost.png";

const Home = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []); // 화면 첫렌더링 시 카테고리값을 갖게 됨
    {/* <Link to="/about" ><button></button></Link> */}

    return (
        <div className="homepage">
            <header>
                <img className="logo" src={logo} alt="나가방 로고"/>
                <div className="memberPass">
                    <Fragment>회원가입 </Fragment>
                    <Fragment>로그인</Fragment>
                </div>
                <nav>
                    <Categories category={category} onSelect= {onSelect} />
                </nav>
            </header> 
            <div className="slidingBenner">
                <Slider />
            </div>
            <section>
                <div className="icons">
                    <label className="themeGroup"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="themeGroup"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="themeGroup"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="themeGroup"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="themeGroup"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="themeGroup"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="themeGroup"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="themeGroup"><img className="icon" src={ghost} alt="icon"/>분류명</label>                  
                </div>
            </section>
            <article>
                <div className="likeRank">
                    <h3 className="article-title">좋아요 Ranking 💖</h3>
                    <div className="article-list">
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                    </div>
                </div>
                <div className="hotBoard">
                    <h3 className="article-title">HOT 자유게시판 🔥</h3>
                    <div className="article-list">
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                    </div>
                </div>
            </article>
            <div className="recommend">
                <p>지금 딱 하기 좋은 방탈출 추천...</p>
            </div>
            <footer>
                개인정보 처리방침 등
            </footer>
        </div>
    )
}


export default Home;