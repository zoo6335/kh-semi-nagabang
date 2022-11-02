import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";
import ghost from "../img/ghost.png";

const ThemeType = () => {
    return (
        <ThemeBlock>
            <div className="icons">
                <label className="theme-type" onClick={onClick}><img className="icon" src={ghost} alt="icon" />공포</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" key={"추리"} onClick={() => onClickCategory(type.category)} />추리</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" key={"액션"} />액션</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" key={"감성"} />감성</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" key={"모험"} />모험</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" key={"SF/판타지"} />SF/판타지</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" key={"야외"} />야외</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" key={"19금"} />19금</label>
            </div>
        </ThemeBlock>
    )
}

const onClickCategory = (val) => {
    console.log("방탈출 상세 페이지 이동 : " + val);
    window.localStorage.setItem("Detail", val);  // Detail이 key, val이 value로 데이터 생성
    window.location.replace("/selectType"); // replace 를 사용해서 이전 페이지로 이동이 불가능함..
}
const ThemeBlock = styled.div`
    width: 1024px;
    margin: 15px;
    .icons{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    }   
    .theme-type{
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover {
            cursor: pointer;
            color: blue;
            font-weight: 700;
        }
    }
    .icon {
        width: 60px;
        flex-grow: 1;
        &:hover{
            filter: hue-rotate(300deg);
            /* filter: invert(100%); */
            /* filter: opacity(0.8) drop-shadow(0 0 0 #0000ff); */
        }
    }
`;

const onClick = () => {  // 페이지 전환
    window.location.replace("/");
}

export default ThemeType;