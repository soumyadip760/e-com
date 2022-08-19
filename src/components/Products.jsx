import styled from "styled-components"

const Info = styled.div`
position: absolute;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
transition: .5s ease;
`
const Container = styled.div`
margin: 1rem 1.5rem;
width: 15rem;
height: 17rem;
flex: 1;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background: #f5fbfd;
padding: 1rem;

&:hover ${Info}{
  opacity: 1;
}
`
const Image = styled.img`
height: 12rem;
`
const Icon = styled.div`
cursor: pointer;
height: 40px;
width: 40px;
border-radius: 50%;
background: #f5fafd;
text-align: center;
line-height: 40px;
margin: 0 .2rem;
transition: .5s;
&:hover{
    transform:translateY(-20px); 
    background: #222;
    color: #fff;
}
`
const Products = ({item}) => {
  return (
    <Container>
     <Image src={item.image} />
      <Info>
        <Icon><i class="fa fa-shopping-cart" aria-hidden="true"></i></Icon>
        <Icon><i class="fa fa-heart" aria-hidden="true"></i></Icon>
        <Icon><i class="fa fa-search" aria-hidden="true"></i></Icon>
      </Info>
    </Container>
  )
}

export default Products
