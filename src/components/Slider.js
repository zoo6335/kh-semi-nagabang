import styled from 'styled-components';
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import Reindeer from "../img/reindeer.png";
import Santa from "../img/santa.png";
import Wreath from "../img/wreath.png";
import "../App.css";

const Slider = () => {
 
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Reindeer} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Santa} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Wreath} class="d-block" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;