import { useState, useEffect } from 'react';
import RankingApi from '../api/rankingApi';
import styled from 'styled-components';

const BoardBlock = styled.div`
    width: 1024px;
    margin: 0 auto;
    padding: 20px;
    border: 4px solid #40BAAA;
    border-top: none;
    border-bottom: none;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardDetail = () => {
    const getDetail = window.localStorage.getItem("Detail");
    console.log("게시글 번호 : " + getDetail);
    const [boardDetail, setBoardDetail] = useState("");

    useEffect(() => {
        const memberData = async () => {
            try {
                const response = await RankingApi.showBoard(getDetail); // 전체 회원 조회
                setBoardDetail(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        memberData();
    }, []);

    return (
        <div>
           {boardDetail && boardDetail.map(board => (
            <BoardBlock key={board.postId}>
                <p>게시글 번호 : {board.postId}</p>
                <p>카테고리 : {board.category}</p>
                <p>제목 : {board.title}</p>
                <p>내용 : {board.content}</p>
                <p>좋아요 : {board.like}</p>
                <p>조회수 : {board.view}</p>
            </BoardBlock>
            ))}
        </div>
    )
}
export default BoardDetail;