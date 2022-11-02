import { useState, useEffect } from 'react';
import RankingApi from '../api/rankingApi';
import styled from 'styled-components';
import '../App.css'

const BoardRank = () => {
    const [boardRank, setBoardRank] = useState('');
    const [loading, setLoading] = useState(false);
    
    const onClickBoardDetail = (val) => {
        console.log("보드 상세 정보로 이동 : " + val);
        window.localStorage.setItem("Detail", val);
        window.location.replace("/showBoard");
    }

    useEffect(() => {
        const rankData = async () => {
            setLoading(true);
            try {
                const response = await RankingApi.boardRank("ALL");
                setBoardRank(response.data);
                console.log(response.data)
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
                        <th>순위</th><th>분류</th><th>제목</th><th>조회수</th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {boardRank && boardRank.map(board => (
                        <tr key={board.postId} onClick={() => onClickBoardDetail(board.postId)}>
                            <td width="50px">{board.rank}위</td>
                            <td width="100px">{board.category}</td>
                            <td width="200px">{board.title}</td>
                            <td width="70px">{board.view}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </RankingBlock>
    );
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
export default BoardRank;