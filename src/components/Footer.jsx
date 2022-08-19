import styled from "styled-components"
import { tablet } from "./responsive"
import { mobile } from "./responsive"

const Container = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 2rem;
flex-wrap: wrap;
`
const Description = styled.div`
flex: 1;
`
const Logo = styled.h2`
margin: 0;
font-size: 1.8rem;
color: #0663b5;
`
const Details = styled.p`
margin-top: 2rem;
`
const Icons = styled.div`
margin-top: 2rem;
`
const Icon = styled.span`
margin: 0 .5rem;
font-size: 1.5rem;
cursor: pointer;
`
const Links = styled.div`
flex: 1;
display: flex;
justify-content: space-around;
${tablet({margin: "0 1.5rem"})};
`
const AllLinks = styled.div``

const Contacts = styled.div`
flex: 1;
`
const Cont = styled.h4`
margin-bottom: 1rem;
`
const Span = styled.span`
margin-right: .5rem;
`
const P = styled.p`
cursor: pointer;
`
const Image = styled.img`
height: 3rem;
`

const Footer = () => {
  return (
    <Container>
        <Description>
            <Logo>DIP.</Logo>
            <Details>There are many variations of passages of Lorem ipsum available. But the majority have suffered alteration in some by injected humour, or randomised words which don't look even slightly believable.
            <Icons>
            <Icon><i class="fa fa-facebook-official" aria-hidden="true"></i></Icon>
            <Icon><i class="fa fa-instagram" aria-hidden="true"></i></Icon>
            <Icon><i class="fa fa-twitter" aria-hidden="true"></i></Icon>
            <Icon><i class="fa fa-pinterest" aria-hidden="true"></i></Icon>
            </Icons>
            </Details>
        </Description>
        <Links>
            <AllLinks>
                <P>Home</P>
                <P>Man Fashon</P>
                <P>Accessories</P>
                <P>Order Tracking</P>
                <P>Wishlist</P>
            </AllLinks>
            <AllLinks>
                <P>Cart</P>
                <P>Woman Fashon</P>
                <P>My Account</P>
                <P>Wishlist</P>
                <P>Terms</P>
            </AllLinks>
        </Links>
        <Contacts>
        <Cont>Contact</Cont>
            <P><Span><i class="fa fa-map-marker" aria-hidden="true"></i></Span>622 Dixie Path, South Tobinchester 98336</P>
           <P> <Span><i class="fa fa-phone" aria-hidden="true"></i></Span>+1234 56 78</P>
            <P><Span><i class="fa fa-envelope-o" aria-hidden="true"></i></Span>contact@soumyadip</P>
            <Image src="https://doppel.zendesk.com/hc/article_attachments/360004480397/Logos-01.png" />
        </Contacts>
    </Container>
  )
}

export default Footer
