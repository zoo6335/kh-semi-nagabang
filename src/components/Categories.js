import styled from "styled-components";

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
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    /* color: inherit; */
    padding-bottom: 0.25rem dashed;

    &:hover {
        color:#495057;
    }
    &:active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color:#22b8cf;
        &:hover {
            color:#3bc9db;
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
                <Category 
                key={c.name}
                active={category===c.name}
                onClick={()=>onSelect(c.name)}
                >{c.text} </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;