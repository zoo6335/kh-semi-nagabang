import styled from 'styled-components';

const Slider = () => {
    return(
        <SliderBlock>
            <div className="window">
                <div className='flexbox'>
                    <p className='sliderEx' style={{height:"250px"}}>sliderEx1</p>
                </div>
            </div>
        </SliderBlock>
    );
}

const SliderBlock = styled.div`
    width: 1016px;
    background-color:darkgray;
`;

export default Slider;