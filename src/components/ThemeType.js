import styled from "styled-components";
import { Link } from "react-router-dom";
import ghost from "../img/ghost.png";

const ThemeType = () => {
    return(
        <ThemeBlock>
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
    }
    .icon {
        width: 60px;
        flex-grow: 1;
    }
`;
export default ThemeType;