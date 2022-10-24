import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
    
    .thumbnail {
        margin-right: 1em;
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a{
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: .5rem;
            white-space: normal;
        }
        & + & {
            margin-top : 3em;
        }
    }
`;
// NewsList로 부터 한 개의 기사 단위로 컴포넌트를 호출받음
const NewsItem = ({article}) => {
    const { title, description, url, urlToImage, source, author } = article;  // 구조 분해라고 함
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className='thumbnail'>
                    <a href={url} target="_blank" rel='noopener noreferrer'>
                        <img src={urlToImage} alt='thumbnail' />
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2>
                    <a href={url} target="_blank" rel='noopener noreferrer'>
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
                <p>{source.name}</p>
                <p>{author}</p>
            </div>
        </NewsItemBlock>
    )
}
export default NewsItem;