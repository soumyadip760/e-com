
import styled  from 'styled-components'
import { tablet } from './responsive'
import { mobile } from './responsive'

const Container = styled.div`
 position: relative;
 margin: 0 .7rem;
 flex: 1;
 ${tablet({margin: "0 1rem"})}
 ${mobile({margin: "1rem 0"})}
`
const Info = styled.div`
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Image = styled.img`
width: 100%;
`
const Title = styled.h3`
color: #fff;
${tablet({fontSize: "1.2rem"})}
${mobile({fontSize: "2rem"})}

`
const Button = styled.button`
padding: .5rem 1.5rem;
border: 2px solid #e9e9ed;
transition: .5s;
&:hover{
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
}
`

const CategoryItems = ({item}) => {
  return (
    <div>
      <Container>
      <Image src={item.image} />
       <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
       </Info>
      </Container>
    </div>
  )
}

export default CategoryItems
