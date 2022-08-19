import React from 'react'
import styled from 'styled-components'
import { mobile } from './responsive'

const Container = styled.div`
padding: 2rem;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fcf5f5;
`
const Title = styled.h1`
font-weight: 700;
`
const Description = styled.p`
font-size: 1.2rem;
`
const Send = styled.div``
const Input = styled.input`
 width: 30rem;
 padding: .3rem;
 outline: none;
 border: 2px solid lightgrey;
 ${mobile({width: "20rem"})}
`
const Button = styled.button`
padding: .3rem 1.5rem;
background: teal;
color: #fff;
border: 2px solid teal;

`
const Newsleter = () => {
  return (
    <Container>
        <Title>Newsleter</Title>
        <Description>Get timely updates from your favorite products</Description>
        <Send>
            <Input placeholder='Your email' />
            <Button><i class="fa fa-paper-plane" aria-hidden="true"></i></Button>
        </Send>
    </Container>
  )
}

export default Newsleter
