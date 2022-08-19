import {items} from "./data"
import CategoryItems  from "./CategoryItems"
import styled from "styled-components"
import { mobile } from "./responsive"

const Container = styled.div`
 display: flex;
 padding: 2rem;
 ${mobile({flexWrap: "wrap"})};
`

const Category = () => {
  return (
  <Container>
      {items.map((item => {
        return (
            <CategoryItems
            item = {item}
            key = {item.id}
             />
        )
      }))}
      </Container>
  )
}

export default Category
