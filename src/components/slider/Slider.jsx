import { useState } from "react"
import styled from "styled-components"
import "./Slider.css"
import {largeDevice} from "../responsive"
import {maxDevice} from "../responsive"
import { data } from "../data"


const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
overflow: hidden;
${largeDevice({display: "none"})};
`
const ArrowLeft = styled.div`
 position: absolute;
 top: 50%;
 left: 0;
 font-size: 3rem;
 opacity: 0.5;
`
const ArrowRight = styled.div`
 position: absolute;
 top: 50%;
 right: 0;
 font-size: 3rem;
 opacity: 0.5;
`
const Wrapper = styled.div`
 height: 100%; 
 transition: .5s;   
 transform: translate(${props => (props.slideIndex * (-100))}%
 );       
`
const Slide = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center; 
${maxDevice({flexDirection: "column"})}
`
const ImageContainer = styled.div`
height: 100%;
flex: 1;
margin-top: 2rem;

`
const Image = styled.img`
width:100%;
`
const InfoCotainer = styled.div`
flex: 1;
margin-top: 2rem;
`
const Title = styled.h2`
font-size: 2.5rem;
`
const Desc = styled.p`
margin-top: 1.5rem;
`
const Button = styled.button`
margin-top: 1rem;
padding: .5rem 2rem;
background: transparent;
border: 2px solid #222;
transition: .5s;
&:hover{
  background: #222;
  color: #fff;
}
`
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) =>{
    if(direction === "left"){
      setSlideIndex( slideIndex > 0 ? (slideIndex - 1) : 2);
    }else {
      setSlideIndex( slideIndex < 2 ?  (slideIndex + 1) : 0);
    }
  }
  return (
      <Container>
      
      <Wrapper className="wrapper" slideIndex={slideIndex}>
      {data.map((item) => {
        return (
           <Slide className='slide'>
        <ImageContainer>
          <Image src={item.image} alt="" />
        </ImageContainer>
        <InfoCotainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOP NOW</Button>
        </InfoCotainer>
      </Slide>
        )
      })}
      </Wrapper>
      <ArrowLeft direction="left" onClick={() => handleClick("left")}><i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </ArrowLeft>
      <ArrowRight direction="right" onClick={() => handleClick("right")}>
      <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </ArrowRight>
      </Container>
  )
}

export default Slider
