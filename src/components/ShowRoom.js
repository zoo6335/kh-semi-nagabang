import { useState, useEffect } from 'react';
import RankingApi from '../api/rankingApi';
import styled from 'styled-components';

const RoomDetail = () => {
    const getDetail = window.localStorage.getItem("Detail");
    console.log("게시글 번호 : " + getDetail);
    const [roomDetail, setRoomDetail] = useState("");

    useEffect(() => {
        const roomData = async () => {
            try {
                const response = await RankingApi.showRoom(getDetail); // 전체 회원 조회
                setRoomDetail(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        roomData();
    }, []);

    return (
        <div>
           {roomDetail && roomDetail.map(room => (
            <RoomBlock key={room.postId}>
                <p>게시글 번호 : {room.postId}</p>
                <p>게시일 : {room.postDate}</p>
                <p>카테고리 : {room.category}</p>
                <p>제목 : {room.title}</p>
                <p>내용 : {room.content}</p>
                <p>좋아요 : {room.like}</p>
                <p>조회수 : {room.view}</p>
            </RoomBlock>
            ))}
        </div>
    )
}

const RoomBlock = styled.div`
    width: 1024px;
    margin: 0 auto;
    padding: 20px;
    border: 4px solid #40BAAA;
    border-top: none;
    border-bottom: none;
    background-color: rgb(0, 0, 0);
    /* display: flex;
    flex-direction: column;
    align-items: center; */
`;
export default RoomDetail;