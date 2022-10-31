import { useState, useEffect } from 'react';
import RankingApi from '../api/rankingApi';
import styled from 'styled-components';
import '../App.css'

const BoardRank = () => {
    const [boardRank, setBoardRank] = useState('');
    const [loading, setLoading] = useState(false);

    const RankingBlock = styled.div`
        box-sizing: border-box;
        table, tr, th, td {
            font-size:18px;
            font-weight: 100px;
            /* border : 1px solid black; */
            border-collapse : collapse;  
            text-align: center;
        }
        tr{
            height: 28px;
        }
        th{
            color: white;
            text-shadow: -4px 0 #000, -4px 1px #000, 1px 0 #000, 0 -1px #000;

        }
    `;
    const RankList = styled.table`
       button{
        color: black;
       }
    `;

    useEffect(() => {
        const memberData = async () => {
            setLoading(true);
            try {
                const response = await RankingApi.boardRank("ALL"); // 제이슨객체로 받아오고
                setBoardRank(response.data); // 그걸 객체로 받아서
                console.log(response.data) // 그 객체 모음을 찍어보는거야 
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        memberData();
    }, []);

    if (loading) {
        return <RankingBlock>조금만 기다려주세요...👩‍💻</RankingBlock>
    }
    return (
        <RankingBlock>
            <RankList>
                <tr className='row-title'>
                    <th>순위</th><th>분류</th><th>제목</th><th>조회수</th><th></th>
                </tr>
                {boardRank && boardRank.map(board => (
                    <tr key={board.rank}>
                        <td>{board.rank}</td>
                        <td>{board.category}</td>
                        <td>{board.title}</td>
                        <td>{board.view}</td>
                        <td><button>보러갈래</button></td>
                    </tr>
                ))}
            </RankList>
        </RankingBlock>
    );
}


export default BoardRank;