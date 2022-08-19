import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
text-align: center;
font-weight: 500;
color: #fff;
line-height: 30px;
`

const Announcement = () => {
  return (
    <div>
      <Container>
        Super Deal! Free Shipping on Orders Over $50
      </Container>
    </div>
  )
}

export default Announcement
