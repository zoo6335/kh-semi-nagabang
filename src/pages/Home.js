import NewsList from "../components/NewsList";
import Categories from "../components/Categories";
import { useCallback, useState } from "react";
// 깃 연습
const Home = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []); // 화면 첫렌더링 시 카테고리값을 갖게 됨

    return (
        <div>
            <Categories category={category} onSelect= {onSelect} />
            <NewsList category={category} />
        </div> 
    )
}

export default Home;