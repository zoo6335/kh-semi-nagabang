import Categories from "../components/Categories";
import { Fragment, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider.js";
import logo from "../img/nagabang_logo_w.png";
import '../pages/Home.css';
import ghost from "../img/ghost.png";
import sgt from "../img/sgt.jpg";

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
                    <label className="theme-type"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="theme-type"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="theme-type"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="theme-type"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="theme-type"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="theme-type"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="theme-type"><img className="icon" src={ghost} alt="icon"/>분류명</label>
                    <label className="theme-type"><img className="icon" src={ghost} alt="icon"/>분류명</label>                  
                </div>
            </section>
            <article>
                <div className="likeRank">
                    <p className="article-title">좋아요 Ranking 💖</p>
                    <div className="article-list">
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                        <div>게시물 끌어와서 Title 출력...</div>
                    </div>
                </div>
                <div className="hotBoard">
                    <p className="article-title">HOT 자유게시판 🔥</p>
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
                <p className="rec-title">지금 딱 하기 좋은 방탈출 추천 🎃🧛‍♂️</p>
                <div className="suggest-list">
                    <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />룰루랄라 방탈출-안녕하세요?</lable>
                    <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />룰루랄라 방탈출-안녕하세요?</lable>
                    <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />룰루랄라 방탈출-안녕하세요?</lable>
                    <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />룰루랄라 방탈출-안녕하세요?</lable>
                    <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />룰루랄라 방탈출-안녕하세요?</lable>

                </div>
            </div>
            <footer>
                <span>개인정보 처리방침</span>
                <span>서비스 약관</span>
                <span>©2022 NagaBang, Inc. All Rights Reserved.</span>
                <span className="span_nagabang">NagaBang</span>
            </footer>
        </div>
    )
}


export default Home;