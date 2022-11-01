import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {TestA, TestB, TestC, TestD, TestE, TestF} from "./pages/DummyPages";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShowBoard from "./components/ShowBoard";

function App() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/theme" element={<TestA />} />
            <Route path="/freeboard" element={<TestB />} />
            <Route path="/getparty" element={<TestC />} />
            <Route path="/bragging" element={<TestD />} />
            <Route path="/signin" element={<TestE />} />
            <Route path="/login" element={<TestF />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path='/showBoard' element={<ShowBoard />}/>
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
