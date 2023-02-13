import React from 'react'
import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs';

function Work() {
  const GitStyle = { fontSize: "24px" }

  return (
    <Countainer>
      <Content>
        <Title>My Work</Title>
        <List>
          <Item>
            <Left>
              <img src='assets\StoreCapture.PNG' height='236px' width='474px'/>
              <Button>Check The Website</Button>
            <Button2>
              <BsGithub style={GitStyle} />
              Check Code
              </Button2>
            </Left>
            <Right>
              <WorkTitle>Tech Store</WorkTitle>
              <WorkDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestias ipsa at beatae sunt, reiciendis voluptate eum corrupti aliquam temporibus quis incidunt assumenda delectus doloribus eos alias accusamus! Quo, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet non at soluta debitis officia, dolores asperiores consequatur. Dignissimos in dolores quaerat voluptatum omnis suscipit magnam inventore rerum! Provident, perferendis placeat.</WorkDesc>
              <ToolsTitle>Frameworks Used:</ToolsTitle>
              <ToolsDesc>
                <Tool>React</Tool>
                <Tool>Styled Components</Tool>
                <Tool>Redux Toolkit</Tool>
                <Tool>Axios</Tool>
              </ToolsDesc>
            </Right>
          </Item>
          <Item>wok1</Item>
          <Item>wok1</Item>
        </List>
      </Content>
    </Countainer>
  )
}

const Countainer = styled.div`
  height: 100vh;
  width: 100vw;
  &:before {
    content: "";
    display: block;
    width: 30vw;
    height:3px;
    background-color: #282355;
    margin: 0 auto;
}
`

const Content = styled.div`
   margin-top: 15vh;
  margin-left: 15vw;

`
const Title = styled.p`
  font-size: 45px;
  color: #9b6ef8;
  font-weight:700;
  &:after {
    content: "";
    display: block;
    margin-top: 3px;
    width: 100px;
    height:3px;
    background-color: #9b6ef8;
    
}`

const List = styled.div`
  width: 70vw;
  margin-top: 6.5rem;
  justify-items: center;
  display: flex;
  flex-direction: column;
  gap: 160px;
`

const Item = styled.div`
  display: flex;
  width: 90%;
  height: 60vh;
  background-color: #221646;
  //padding: 35px 45px;
  padding-top: 45px;
  padding-left: 55px;
  padding-right: 45px;
  border-radius: 15px ;
  //border: 1px solid #00BCFF;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  img{
    border-radius: 15px;
  }
`

const Button = styled.button`
  cursor: pointer;
  margin-top: 30px;
  font-size: 18px;
  padding: 20px 40px;
  border-radius: 10px;
  font-weight: 600;
  border: 2px solid #804BF7;
  background-color: transparent;
  color: #804BF7;
  transition: 0.3s ease;
  &:hover{
    background-color: #1D143C;
  }
`
const Button2 = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 18px;
  padding: 20px 40px;
  border-radius: 10px;
  font-weight: 600;
  //border: 2px solid #804BF7;
  background-color: #804BF7;
  color: #dddbdb;
  transition: 0.3s ease;
  gap: 10px;
  &:hover{
    background-color: #6338c7;
    color: white;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 50px;
`
const WorkTitle = styled.p`
  font-size: 38px;
  font-weight: 600;
  color: #9b6ef8;
  margin-bottom: 30px;
`

const WorkDesc = styled.p`
  font-size: 16px;
  line-height: 1.3rem;
  margin-bottom: 30px;

`

const ToolsTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #9b6ef8;
  margin-bottom: 15px;
`
const ToolsDesc = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
`
const Tool = styled.li`
  color: #9b6ef8;
  font-size: 15px;
`


export default Work