import styled from 'styled-components';
import img1 from "../img/test1.jpg";
import img2 from "../img/test2.jpg";
import img3 from "../img/test3.jpg";

const Slider = () => {
    return (
        <div className='box'>
            <SlideBlock>
                <div className='container'>
                    <div className='inner'>
                        <img src={img1} alt="." />
                    </div>
                    <div className='inner'>
                        <img src={img2} alt="." />
                    </div>
                    <div className='inner'>
                        <img src={img3} alt="." />
                    </div>
                </div>
                {/* <div className='bzone'>
                    <button className='버튼1'>🐻🐻🐻</button>
                    <button className='버튼2'>👒👒👒</button>
                    <button className='버튼3'>🤦‍♀️🤦‍♀️🤦‍♀️</button>
                </div> */}
            </SlideBlock>
        </div>
    );
}

const SlideBlock = styled.div`
    *{border: 1px solid red;}
    overflow:hidden;
    margin: 0 auto;
    padding: 0 0;
    display: flex;
    width: 1024px;
    button{
        color: red;
        clear:both;
    &:active{
    }
    }
        
    .container{
        padding: 0;
        flex-direction: row;
        transform: translate(-1024px);
        transition: transform 0.5s;
    }
    .inner img[src]{
        width: 1024px;
        height: 200px;
    }
    .bzone{
        position: fixed;
        left: 800px;
        top: 300px;
    }
`;


export default Slider;