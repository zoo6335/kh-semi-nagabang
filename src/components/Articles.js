import styled from "styled-components";

const Articles = () => {
    return (
        <ArticleBlock>
            <div className="likeRank">
                <p className="article-title">좋아요 Ranking 💖</p>
                <div className="article-list">
                    <div>게시물 끌어와서 Title 출력...</div>
                    <div>게시물 끌어와서 Title 출력...</div>
                    <div>게시물 끌어와서 Title 출력...</div>
                    <div>게시물 끌어와서 Title 출력...</div>
                    <div>게시물 끌어와서 Title 출력...</div>
                </div>
            </div>
            <div className="hotBoard">
                <p className="article-title">HOT 자유게시판 🔥</p>
                <div className="article-list">
                    <div>게시물 끌어와서 Title 출력...</div>
                    <div>게시물 끌어와서 Title 출력...</div>
                    <div>게시물 끌어와서 Title 출력...</div>
                    <div>게시물 끌어와서 Title 출력...</div>
                    <div>게시물 끌어와서 Title 출력...</div>
                </div>
            </div>
        </ArticleBlock>
        )
}

const ArticleBlock = styled.div`
    width: 1024px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px;
    
    .article-title {
        width: 450px;
        border: 3px dashed #8dc1f1d5;
        border-radius: 20px;
        background-color: #ffffff4e;
        padding: 10px 100px;
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article-list{
        width: 450px;
        height: 200px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        margin-top: 10px;
        border: 1px solid #8dc1f1d5;
        border-radius: 20px;

        background-color: #8dc1f178;
        font-size: 1.1em;
    }
`;

export default Articles;