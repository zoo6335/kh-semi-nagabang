import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Setting from './pages/Setting';
import News from './pages/News';
import NewsList from './components/NewsList';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 컴포넌트는 렌더링 단위라고 생각하면 편해~*/}
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/News" element={<News />} />
        <Route path="/NewsList" element={<NewsList />} />
      </Routes>
    </Router>
  );
}


export default App;
