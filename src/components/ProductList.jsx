
import styled from 'styled-components'
import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'
import Newsleter from './Newsleter'
import Product from './Product'
import { tablet } from './responsive'

const Container = styled.div`
width: 100%;
`
const FilterHead = styled.h2`
padding: 0 2rem;
margin-top: 2rem;
font-size: 1.5rem;
font-weight: 700;
`
const FilterText = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 0 2rem;
`
const FilterProducts = styled.div``
const SortProducts = styled.div``
const Select = styled.select`
padding: .5rem;
margin-left: .5rem;
cursor: pointer;
background: #fff;
border: 2px solid lightgrey;
margin-top: 1rem;
${tablet({padding: ".3rem"})}
`
const Option = styled.option`
`
const ProductList = () => {
  return (
  <Container>
    <Navbar />
    <Announcement />
    <FilterHead>Dresses</FilterHead>
    <FilterText>
      <FilterProducts>
      Filter Products:
      <Select>
      <Option>color</Option>
      <Option>Yellow</Option>
      <Option>Green</Option>
      <Option>White</Option>
      <Option>Red</Option>
      <Option>Blue</Option>
      <Option>Black</Option>
      </Select>

      <Select>
      <Option>M</Option>
      <Option>L</Option>
      <Option>S</Option>
      <Option>XL</Option>
      </Select>
      </FilterProducts>

      <SortProducts>Sort Products: <Select>
      <Option>Newest</Option>
      <Option>Price(asc)</Option>
      <Option>Price(desc)</Option>
      </Select>
      </SortProducts>
    </FilterText>
     <Product />
     <Newsleter />
     <Footer />
  </Container>
  )
}

export default ProductList
