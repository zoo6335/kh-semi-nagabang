import './slider.scss';
import './test.css';
import { useState, useEffect, useRef } from "react";
import img2 from "../img/nagabang_logo2.png"; 
import styled from 'styled-components';

const Slider = () => {
    return(
        <div className="window">
            <div className='flexbox'>
                <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" />
                <img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black" />
                <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
            </div>
        </div>
    );
}


export default Slider;