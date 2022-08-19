import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile, tablet } from "../components/responsive"

const Container = styled.div`
width: 100%;
`
const Wrapper = styled.div`
width: 100%;
padding: 2rem;
${tablet({padding: "1rem"})}
`
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const CartHead = styled.h2`
text-align: center;
font-weight: 400;
margin-bottom: 1.5rem;
`
const Button = styled.button`
padding: .5rem 1rem;
border: 2px solid #222;
background-color: ${(props) => props.color === "black" ? "black" : "transparent"};
color: ${(props) => props.color === "black" && "#fff"};
`
const ShoppingText = styled.div`
${mobile({display: "none"})}
`
const P = styled.span`
margin: 0 .7rem;
text-decoration: underline;
font-weight: 400;
font-size: 1.1rem;
`
const Bottom = styled.div`
display: flex;
margin-top: 2rem;
${mobile({flexDirection: "column"})}
`
const Product = styled.div`
flex: 9;
`
const ProductDetail = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2rem;
`
const Hr = styled.hr`
background: #eeee;
`
const Image = styled.img`
flex: 1;
width: 30%;
${mobile({width: "20%", height: "20%", objectFit: "cover"})}
${tablet({width: "30%", height: "30%", objectFit: "cover"})}
`
const Details = styled.div`
flex: 2;
margin-left: 1rem;
`
const Para = styled.p`
font-weight: 600;
`
const Span = styled.span`
font-weight: 400;
`
const Color = styled.div`
height: 20px;
width: 20px;
background: #55565b;
border-radius: 50%;
margin-bottom: 1rem;
`
const Price = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const ProductAmount = styled.div`
`
const Add = styled.span``
const Num = styled.span`
display: inline-block;
margin: 0 .5rem;
width: 30px;
height: 30px;
text-align: center;
line-height: 30px;
border: 1px solid lightgrey;
`
const Remove = styled.span``
const Amount = styled.div`
text-align: center;
font-weight: 500;
font-size: 1.5rem;
`
const Order = styled.div`
flex: 3;
border: 1px solid grey;
padding: 2rem;
${mobile({marginTop: "2rem"})}
`
const OrderTitle = styled.h4`
text-align: center;
`
const Summary = styled.div`
margin-top: 2rem;
`
const SummaryDetail = styled.div`
display: flex;
justify-content: space-between;
margin: 1rem 0;
font-weight: ${(props) => props.color === "dark" && "600"};
font-size: ${(props) => props.color === "dark" && "1.2rem"};
`
const Summarytext = styled.p``
const OrderButton = styled.button`
padding: .5rem 1rem;
background: teal;
color: #fff;
border: 2px solid teal;
transition: .5s;
width: 100%;
${tablet({fontSize: ".9rem"})};


&:hover{
  background: transparent;
  color: #222;
}
`
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <CartHead>YOUR BAG</CartHead>
        <Top>
          <Button>CONTINUE SHOPPING</Button>
          <ShoppingText>
            <P>Shopping Bag(2)</P>
            <P>Your Wishlist(0)</P>
          </ShoppingText>
          <Button color="black">CHECKOUT NOW</Button>
        </Top>
        <Bottom>
          <Product>
            <ProductDetail>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNqEYqjUE40-wg3gu9YN2o4A5fSy6LOLYcg&usqp=CAU" />
              <Details>
                <Para>Product: <Span>JESSIE THUNDER SHOES</Span></Para>
                <Para>ID: <Span>9381371893</Span></Para>
                <Color />
                <Para>Size: <Span>37.5</Span></Para>
              </Details>
              <Price>
                <ProductAmount>
                  <Add><i class="fa fa-plus" aria-hidden="true"></i></Add>
                  <Num>2</Num>
                  <Remove><i class="fa fa-minus" aria-hidden="true"></i></Remove>
                  <Amount>$30</Amount>
                </ProductAmount>
              </Price>
            </ProductDetail>
            <Hr />
            <ProductDetail>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNqEYqjUE40-wg3gu9YN2o4A5fSy6LOLYcg&usqp=CAU" />
              <Details>
                <Para>Product: <Span>JESSIE THUNDER SHOES</Span></Para>
                <Para>ID: <Span>9381371893</Span></Para>
                <Color />
                <Para>Size: <Span>37.5</Span></Para>
              </Details>
              <Price>
                <ProductAmount>
                  <Add><i class="fa fa-plus" aria-hidden="true"></i></Add>
                  <Num>2</Num>
                  <Remove><i class="fa fa-minus" aria-hidden="true"></i></Remove>
                  <Amount>$20</Amount>
                </ProductAmount>
              </Price>
            </ProductDetail>
          </Product>

          <Order>
            <OrderTitle>ORDER SUMMARY</OrderTitle>
            <Summary>
              <SummaryDetail>
                <Summarytext>Subtotal</Summarytext>
                <Summarytext>$80</Summarytext>
              </SummaryDetail>
              <SummaryDetail>
                <Summarytext>Estimated Shipping</Summarytext>
                <Summarytext>$5.90</Summarytext>
              </SummaryDetail>
              <SummaryDetail>
                <Summarytext>Shipping Discount</Summarytext>
                <Summarytext>$-5.90</Summarytext>
              </SummaryDetail>
              <SummaryDetail color="dark">
                <Summarytext>Total</Summarytext>
                <Summarytext>$80</Summarytext>
              </SummaryDetail>
            </Summary>
            <OrderButton>CHECKOUT NOW</OrderButton>
          </Order>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
