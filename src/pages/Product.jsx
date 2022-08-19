import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsleter from '../components/Newsleter'
import { mobile, tablet } from '../components/responsive'

const Container = styled.div``

const ProductInfo = styled.div`
width: 100%;
display: flex;
padding: 2rem;
${mobile({flexDirection: "column"})}
`
const ImageContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
${tablet({width: "100%", height: "100%", objectFit: "cover"})}
`
const InfoContainer = styled.div`
flex: 1;
margin: 2rem 0 0 2rem;
`
const Title = styled.h2``

const Desc = styled.p``

const Price = styled.h3`
font-weight: 200;
`

const ImageDetail = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin-top: 2rem;
`
const Color = styled.div``

const ColorTitle = styled.h5`
font-weight: 200;
`
const Span = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin-top: .5rem;
cursor: pointer;
`
const Size = styled.div``
const SizeTitle = styled.h5`
display: inline-block;
font-weight: 200;
`

const Cart = styled.div``
const Select = styled.select`
padding: .3rem .5rem;
margin-left: .5rem;
background: #fff;
border: 2px solid lightgrey;
`
const Option = styled.option``
const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin-top: 2rem;
`
const AmountContainer = styled.div`
flex: 1;
`
const Remove = styled.span`
${tablet({fontSize: ".8rem"})}

`
const Amount = styled.span`
height: 30px;
width: 30px;
border: 1.5px solid lightgrey;
text-align: center;
line-height: 30px;
margin: 0 .5rem;
display: inline-block;
${tablet({fontSize: ".8rem"})}
`
const Add = styled.span`
${tablet({fontSize: ".8rem"})}
`
const Button = styled.button`
flex: 1;
padding: .3rem .5rem;
background: transparent;
border: 2px solid teal;
transition: .5s;
${tablet({padding: "0", fontSize: ".9rem"})}
&:hover{
    background: lightgrey;
}
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <ProductInfo>
                <ImageContainer>
                    <Image src="https://www.pngitem.com/pimgs/m/221-2218087_women-jeans-png-jeans-for-womens-png-transparent.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Woman Jeans</Title>
                    <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
                    <Price>$ 20</Price>
                    <ImageDetail>
                        <Color>
                            <ColorTitle>Color:</ColorTitle>
                            <Span color="black" /><Span color="blue" /><Span color="lightgrey" />
                        </Color>

                        <Size>
                            <SizeTitle>Size:</SizeTitle>
                            <Select>
                                <Option>M</Option>
                                <Option>S</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </Size>
                    </ImageDetail>
                    <AddContainer>
                        <AmountContainer>
                            <Remove><i class="fa fa-minus" aria-hidden="true"></i></Remove>
                            <Amount>1</Amount>
                            <Add><i class="fa fa-plus" aria-hidden="true"></i></Add>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                    <Cart>

                    </Cart>
                </InfoContainer>
            </ProductInfo>
            <Newsleter />
            <Footer />
        </Container>
    )
}

export default Product
