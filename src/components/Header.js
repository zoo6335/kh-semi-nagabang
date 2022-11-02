import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/nagabang_logo_w.png";
import '../pages/Home.css';
import Categories from "./Categories";

// 로그인 완료하면 회원가입-> 로그아웃, 로그인 -> 닉네임 으로 문구가 변경되게 할 예정
const Header = () => {
    return (
        <HeaderBlock>
            <img className="logo" src={logo} alt="나가방 로고" onClick={onClickLogo}></img>
            <div className="member">
                <Link to="/signin"><p className="signIn">회원가입</p></Link>
                <Link to="/login"><p className="logIn">로그인</p></Link>
            </div>
            <Categories />
        </HeaderBlock>
    );
};
// 로고 click -> 홈화면
const onClickLogo = () => {
    window.location.replace("/");
}

const HeaderBlock = styled.div`
    z-index:1;
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
        &:hover{
            cursor: pointer;
        }
    }
    .member {
        display: flex;
        position: relative;
        left: 870px;
        bottom: 65px;
    }
    .signIn, .logIn{
        margin: 0 5px;
        &:hover {
            font-weight: 600;
            border-bottom: 3px dashed #F99090;
            cursor: pointer;
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
`;

export default Header;