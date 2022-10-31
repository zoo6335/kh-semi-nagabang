import styled from 'styled-components';
import arrowL from "../img/arrowLeft.png";
import arrowR from "../img/arrowRight.png";
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";

// const [currenetIndex, setCurrentIndex] = useState(0);
// 애니메이션, transition 효과로 서서히 한장씩 보여주는게 구현하기 더 나을듯..?
// animation-iteration-count: infinite; 사용해서 무한 반복

const Slider = () => {
    return (
        <SliderBlock>
            <div className="slider-list">
            </div>
            <img src={arrowL} alt=''></img>
            <img src={arrowR} alt=''></img>
        </SliderBlock>
    );
}

const SliderBlock = styled.div`
    width: 1016px;
    height: 250px;
    background-color: darkgray;
    img[src] {
        width : 30px;
    }
`;

export default Slider;