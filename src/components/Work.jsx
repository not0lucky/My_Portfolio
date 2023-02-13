import React from 'react'
import styled from 'styled-components'

function Work() {
  return (
    <Countainer>
      <Content>
        <Title>My Work</Title>
        <List>
          <Item>wok1</Item>
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
  padding: 25px 45px;
  border-radius: 15px ;
  //border: 1px solid #00BCFF;
`
export default Work