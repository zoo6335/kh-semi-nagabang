import { useState } from 'react';
import axios from 'axios';


const News = () => {
    const [data, setData] = useState("");
    const onClick = async () => {
        try {
          const response = await axios.get(
            "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7",
          );
          setData(response.data);
        } catch (e) {
          console.log(e);
        }
      };
    return (
        <div>
            <div>
                <button onClick={onClick}>서버 정보 불러오기</button>
            </div>
            {/* 조건부 렌더링, 제이슨데이터 파싱 */}
            {data && <textarea rows={15} value={JSON.stringify(data, null, 2)} />}
        </div>
    );
};

export default News;