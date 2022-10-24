import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render (
  <React.StrictMode> 
    {/* 위 컴포넌트로 감싸서 출력하는 이유는이 컴포넌트는 문제가 발생하면, 발생된 에러메세지를 바로 출력하는 모드 */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
