import styled from "styled-components"
import { productsItems } from "./data"
import Products from "./Products"

const Container = styled.div`
display: flex;
padding: 2rem;
flex-wrap: wrap;
justify-content: space-between;
`
const Product = () => {
  return (
   <Container>
   {productsItems.map(item => {
    return(<Products item={item} key={item.id} />)
   })}
   </Container>
  )
}

export default Product
