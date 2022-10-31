import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
    return (
        <CategoryBlock>
            <Link to="/about"><p className="category">나가방!?</p></Link>
            <Link to="/theme"><p className="category">테마보기</p></Link>
            <Link to="/freeboard"><p className="category">자유게시판</p></Link>
            <Link to="/getparty"><p className="category">일행 구하기</p></Link>
            <Link to="/bragging"><p className="category">보드판 자랑하기</p></Link>
        </CategoryBlock>
    )
}
// 아래 방식은 히스토리가 없어서 변경..
// const onClickAbout = ()=> {
//     window.location.replace("/about");
// }

const CategoryBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: auto 200px;
    .category{
        font-size: 1.125rem;
        cursor: pointer;
        text-decoration: none;
        padding-bottom: 0.25rem;

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
`;

export default Categories;