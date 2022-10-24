import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로젝트입니당</p>
            <Link to="/">홈으로 이동</Link>
        </div>
    )   
}

export default About;