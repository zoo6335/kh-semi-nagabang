import styled from "styled-components";

const Categories = () => {
    return (
        <CategoryBlock>
            <p className="category" onClick={onClickAbout}>나가방!?</p>
            <p className="category" onClick={onClickTheme}>테마보기</p>
            <p className="category" onClick={onClickFB}>자유게시판</p>
            <p className="category" onClick={onClickParty}>일행 구하기</p>
            <p className="category" onClick={onClickBrag}>보드판 자랑하기</p>
        </CategoryBlock>
    )
}

const onClickAbout = ()=> {
    window.location.replace("/about");
}
const onClickTheme = ()=> {
    window.location.replace("/theme");
}
const onClickFB = ()=> {
    window.location.replace("/freeboard");
}
const onClickParty = ()=> {
    window.location.replace("/getparty");
}
const onClickBrag = ()=> {
    window.location.replace("/bragging");
}

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