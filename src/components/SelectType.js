import { useState, useEffect } from 'react';
import RankingApi from '../api/rankingApi';
import styled from 'styled-components';
// 카테고리 클릭 시 카테고리에 맞는 방탈출 소개.. (버리게 될듯한 컴포넌트)
// 이 페이지는 어떻게 구성돼야 하는지 생각 해봤는데,
// 내용이랑 제목이 우르르다나와도 안될건데 그럼또 그 제목 클릭하면 들어가야해서 이 부분은 정운님이 만들어 놓으신 페이지로 넘어가게 하는게 맞는 것 같습니다..
const SelectType = () => {
    const getDetail = window.localStorage.getItem("Detail");
    console.log("소개글 번호 : " + getDetail);
    const [roomType, setRoomType] = useState("");

    useEffect(() => {
        const roomData = async () => {
            try {
                const response = await RankingApi.selectType(getDetail); // 전체 회원 조회
                setRoomType(response.data);
                console.log(response.data)
            } catch (e) {
                console.log(e);
            }
        };
        roomData();
    }, []);

    return (
        <div>
           {roomType && roomType.map(type => (
            <CategoryBlock key={type.postId}>
                <p>소개글 번호 : {type.postId}</p>
                <p>게시일 : {type.postDate}</p>
                <p>카테고리 : {type.category}</p>
                <p>제목 : {type.title}</p>
                <p>내용 : {type.content}</p>
                <p>좋아요 : {type.like}</p>
                <p>조회수 : {type.view}</p>
            </CategoryBlock>
            ))}
        </div>
    )
}

const CategoryBlock = styled.div`
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

export default SelectType;