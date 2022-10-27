import styled from "styled-components";
// nav 바 카테고리 분리 !!!!!
const categories = [
    {
        name: 'aboutUs',
        text: '나가방!?'
    },
    {
        name: 'viewThemes',
        text: '테마 보기'
    },
    {
        name: 'freeBoard',
        text: '자유게시판'
    },
    {
        name: 'createParty',
        text: '일행 구하기'
    },
    {
        name: 'boardCollection',
        text: '보드판 자랑하기'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto; */
    /* } */
`; 

const Category = styled.div`
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
    
`;

const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name} active={category===c.name} onClick={()=>onSelect(c.name)}>
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;