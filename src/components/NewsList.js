import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1em;
        padding-right: 1em;
    }
`;

const NewsList = (props) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=> { // 화면이 렌더링 될 때 해야 할 일을 여기서 구현함
        const fetchData = async () => { // useEffect hook에서 async/await를 사용하기 위해서는 함수가 필요 
            setLoading(true);  // 화면이 로딩 중임을 표시
            try { // 서버에 대한 요청을 시도하는 구간
                const query = props.category === 'all' ? 'all' : `category=${props.category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=dda4bff0262c44f7811d3b9f4f26c859`
                );
                setArticles(response.data.articles); // 동기처럼 보이지만 비동기로 결과를 받음, 렌더링이 일어남
            } catch (e) { // 서버 요청이 실패한 구간
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [props.category]) // [] 의존성 배열을 의미
    // 배열을 비워두면 값이 변경된 상태를 체크하지 않기 때문에 화면이 처음 나타날 때만 해당 함수가 실행됨

    
    if (loading) {
        return <NewsListBlock>로딩중.....</NewsListBlock>
    };
    if(!articles) return null;

    // 서버로부터 데이터가 들어오면(=참) 참아래로 들어옴, map함수를 순회하는 매개변수를 전달함
    return(
        <NewsListBlock>
            {articles.map(article=> (<NewsItem kew={article.url} article={article} />))}
        </NewsListBlock>
    )
};

export default NewsList;