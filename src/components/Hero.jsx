import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function Hero() {
  return (
    <>
    <Countainer>
      <Content>
        <Title1>Hi, My name is</Title1>
        <Title2>Anir Agram</Title2>
        <Title3>and I'm a Front End Developer and a Student.</Title3>
        <Button>Check My Projects</Button>
      </Content>
    </Countainer>
    </>
    
  )
}

const Countainer = styled.div`
  height: 90vh;
  width: 100vw;

  
 
`

const Content = styled.div`
  margin-top: 22vh;
  margin-left: 15vw;
 
 
  
`
const Title1 = styled.p`
  font-size: 18px;
  color: #9b6ef8;
  font-weight:500;
`
const Title2 = styled.p`
  font-size: 105px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 1px ;
`
const Title3 = styled.p`

font-size: 23px;
color: #c9c8c8;
&:after {
    content: "";
    display: block;
    margin-top: 25px;
    width: 100px;
    height:3px;
    background-color: #804BF7;
}
`
const Button = styled.button`
  cursor: pointer;
  margin-top: 80px;
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

export default Hero