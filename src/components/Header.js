import styled from "styled-components";
import logo from "../img/nagabang_logo_w.png";
import '../pages/Home.css';
import Categories from "./Categories";

const Header = () => {
    return (
         <HeaderBlock>
            <img className="logo" src={logo} alt="나가방 로고" onClick={onClickLogo}></img>
            <div className="memberPass">
                <p className="signIn" onClick={onClickSignin}>회원가입</p>
                <p className="logIn" onClick={onClickLogin}>로그인</p>
            </div>
            <Categories />
        </HeaderBlock> 
    );
};
// 로고 click -> 홈화면
const onClickLogo = () => {
    window.location.replace("/");
}
const onClickSignin = () => {
    window.location.replace("/signin");
}
const onClickLogin = () => {
    window.location.replace("/login");
}

const HeaderBlock = styled.div`
    background-color: rgb(0, 0, 0);
    margin: 0 auto;  
    width: 1024px;
    height: 140px;
    border: 4px solid #40BAAA;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0px;

    .logo {
        margin: 0 auto;
        width: 100px;
        height: 80px;
    }
    .memberPass {
        display: flex;
        position: relative;
        left: 870px;
        bottom: 65px;
        & > p {
            margin: 0 5px;
            &:hover {
                font-weight: 600;
                border-bottom: 3px dashed #F99090;
            }
            &:active {
                font-weight: 600;
                border-bottom: 3px dashed #3bc9db;
                color: black;
                &:hover {
                    color: blue;
                    /* #3bc9db; */
                }
            }
            & + & {
                margin-left: 1rem;
            }
        }
    }
`;

export default Header;