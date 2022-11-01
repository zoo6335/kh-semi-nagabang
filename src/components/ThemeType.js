import styled from "styled-components";
import ghost from "../img/ghost.png";

const ThemeType = () => {
    return (
        <ThemeBlock>
            <div className="icons">
                <label className="theme-type" onClick={onClick}><img className="icon" src={ghost} alt="icon" />공포</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" />추리</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" />액션</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" />감성</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" />모험</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" />SF/판타지</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" />야외</label>
                <label className="theme-type"><img className="icon" src={ghost} alt="icon" />19금</label>
            </div>
        </ThemeBlock>
    )
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
        &:active {
        }
    }
`;

const onClick = () => {  // 페이지 전환
    window.location.replace("/");
}

export default ThemeType;