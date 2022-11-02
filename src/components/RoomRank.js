import { useState, useEffect } from 'react';
import RankingApi from '../api/rankingApi';
import styled from 'styled-components';
import '../App.css'

const RoomRank = () => {
    const [roomRank, setRoomRank] = useState('');
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const rankData = async () => {
            setLoading(true);
            try {
                const response = await RankingApi.roomRank("ALL"); // 제이슨객체로 받아오고
                setRoomRank(response.data); // 그걸 객체로 받아서
                console.log(response.data) // 그 객체 모음을 찍어보는거야 
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        rankData();
    }, []);

    if (loading) {
        return <RankingBlock>조금만 기다려주세요...👩‍💻</RankingBlock>
    }
    return (
        <RankingBlock>
            <table>
                <thead>
                    <tr className='row-title'>
                        <th>순위</th><th>분류</th><th>테마명</th><th>좋아요</th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {roomRank && roomRank.map(room => (
                        <tr key={room.postId} onClick={() => onClickRoomDetail(room.postId)}>
                            <td width="50px">{room.rank}위</td>
                            <td width="100px">{room.category}</td>
                            <td width="200px">{room.title}</td>
                            <td width="70px">{room.like}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </RankingBlock>
    );
}

const onClickRoomDetail = (val) => {
    console.log("방탈출 소개 상세 페이지 이동 : " + val);
    window.localStorage.setItem("Detail", val);  // Detail이 key, val이 value로 데이터 생성
    window.location.replace("/showRoom"); // replace 를 사용해서 이전 페이지로 이동이 불가능함..
}

const RankingBlock = styled.div`
    box-sizing: border-box;
    table, th, td {
        font-size: 18px;
        border-collapse : collapse;  
        text-align: center;
        height: 28px;
    }
    tr{ // 테이블 행 아래 보더 지정
        border-bottom: 2px dashed rgba(0,0,0,0.5);
        &:hover{
            cursor:pointer;
        }
    }
    th{ // 제목행
        color: white;
        text-shadow: -4px 0 #000, -4px 1px #000, 1px 0 #000, 0 -1px #000;
        &:hover{
            cursor: default;
        }
    } 
`;

export default RoomRank;