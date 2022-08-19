import React from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'

const Container = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/10738544/pexels-photo-10738544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 40%;
background: #fff;
padding: 1.5rem 0;

@media screen and (max-width: 768px) {
    width: 50%;
}
@media screen and (max-width: 576px) {
    width: 80%;
}
`
const Title = styled.h3`
text-align: center;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Input = styled.input`
margin: 1rem;
outline: none;
padding: 0 1rem;
`
const Aggriment = styled.div`
font-size: .9rem;
padding: 1rem;
`
const Button = styled.button`
padding: .2rem 1rem;
background: teal;
border: 2px solid teal;
transition: .5s;
color: #fff;
margin-left: 37%;
`
const Link = styled.a`
display: block;
text-decoration: none;
color: #222;
margin-top: 1rem;
cursor: pointer;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form>
                <Input placeholder='Your name' />
                <Input placeholder='Your password' />
                <Aggriment>
                    <Button>Sign In</Button>
                    <Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ONE</Link>
                </Aggriment>
            </Form>
        </Wrapper>
    </Container>

  )
}

export default Login
