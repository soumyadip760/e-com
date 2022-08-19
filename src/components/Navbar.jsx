import React from 'react'
import Styled from 'styled-components'
import {tablet, mobile} from './responsive'


const Container = Styled.div`
  height: 60px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "1rem"})}
`

const Left = Styled.div`
flex: 1;
`
const Input = Styled.input`
 border: none;
 outline: none;
 width: 100%;
 ${tablet({width: "50%"})};
`
const SearchBar = Styled.div`
  border: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem
`
const Center = Styled.div`
flex: 2;
text-align: center;
`
const Logo = Styled.h1`
margin: 0;
font-size: 1.8rem;
color: #0663b5;
font-weight: 700;
${tablet({fontSize: "1.5rem"})};
`
const Right= Styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile({flex: "2"})};
${tablet({flex: "2"})};
`
const Span = Styled.span`
  display: inline-block;
  color: grey;
  margin-right: 1rem;
  cursor: pointer;
  ${tablet({fontSize: ".9rem"})};
`
const Cart = Styled.div`
 cursor: pointer;
 font-size: 1.3rem;
`
const Navbar = () => {
  return (
    <Container>
      <Left>
        <SearchBar>
        <Input />
        <i class="fa-solid fa-magnifying-glass"></i>
        </SearchBar>
      </Left>
      <Center>
      <Logo>DIP.</Logo>
      </Center>
      <Right>
      <Span>REGISTER</Span>
      <Span>SIGN IN</Span>
      <Cart><i class="fa fa-cart-plus" aria-hidden="true"></i>   </Cart>
      </Right>
    </Container>
  )
}

export default Navbar
