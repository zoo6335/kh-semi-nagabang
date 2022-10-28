import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {TestA, TestB, TestC, TestD, TestE, TestF} from "./pages/DummyPages";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/theme" element={<TestA />} />
            <Route path="/freeboard" element={<TestB />} />
            <Route path="/getparty" element={<TestC />} />
            <Route path="/bragging" element={<TestD />} />
            <Route path="/signin" element={<TestE />} />
            <Route path="/login" element={<TestF />} />
          </Routes>
    </Router>
  );
}

export default App;
