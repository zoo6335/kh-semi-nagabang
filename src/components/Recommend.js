import styled from "styled-components";
import sgt from "../img/sgt.jpg";
const Recommend = () => {
    return (
        <RecommendBlock>
            <p className="rec-title">지금 딱 하기 좋은 방탈출 추천 🎃🧛‍♂️</p>
            <div className="suggest-list">
                <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />[지역] 방탈출 명</lable>
                <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />[지역] 방탈출 명</lable>
                <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />[지역] 방탈출 명</lable>
                <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />[지역] 방탈출 명</lable>
                <lable className="suggestion"><img src={sgt} alt="추천img" className="sgt-img" />[지역] 방탈출 명</lable>
            </div>
        </RecommendBlock>
    )
}

const RecommendBlock = styled.div`
    width: 1024px;
    padding: 20px 10px;
    
    .rec-title {
        font-size: 1.1em;
        display: inline;
        margin-left: 50px;
    }
    .suggest-list {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }
    .sgt-img {
        width: 120px;
        height: auto;
        margin-bottom: 15px;
    }
    .suggestion {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.8em;
    }
`;

export default Recommend;