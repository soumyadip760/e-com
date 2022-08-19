import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/11911068/pexels-photo-11911068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
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
const Aggriment = styled.p`
font-size: .9rem;
padding: 1rem;
`
const Span = styled.span`
font-weight: 600;
margin: 0 .3rem;
`
const Button = styled.button`
padding: .2rem .3rem;
background: teal;
border: 2px solid teal;
transition: .5s;
color: #fff;
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder='Your name' />
                <Input placeholder='Your email' />
                <Input placeholder='Create password' />
                <Input placeholder='Confirm password' />
                <Aggriment>
                    By creating an account I constent to the processing of my personal data in accordance with the <Span> PRIVACY POLICY</Span>
                    <Button>Create</Button>
                </Aggriment>
            </Form>
        </Wrapper>
    </Container>

  )
}

export default Register
