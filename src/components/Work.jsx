import React from 'react'
import styled from 'styled-components'
import Contact from './Contact';
import { BsGithub } from 'react-icons/bs';

function Work() {
  const GitStyle = { fontSize: "24px" }

  return (
    <Countainer id="work">
      <Content>
        <Title>My Work</Title>
        <List>
          <Item>
            <Left>
              <img src='assets\image.png'/>
              <Button href='https://bright-zuccutto-cf01f1.netlify.app/' target='_blank'>Check The Website</Button>
            <Button2 href='https://github.com/not0lucky/Ecommerce_Portfolio' target='_blank'>
              <BsGithub style={GitStyle} />
              Check Code
              </Button2>
            </Left>
            <Right>
              <WorkTitle>My Store</WorkTitle>
              <WorkDesc>My Store is an online platform that offers a wide range of everyday
gadgets built using the React.js framework and styled components.
The data is fetched with an api, and uses for redux to manage the shopping cart.
</WorkDesc>
              <ToolsTitle>Frameworks Used:</ToolsTitle>
              <ToolsDesc>
                <Tool>React</Tool>
                <Tool>Styled Components</Tool>
                <Tool>Redux Toolkit</Tool>
                <Tool>Axios</Tool>
              </ToolsDesc>
            </Right>
          </Item>

          <Item>
            <Left>
              <img src='assets\GamesCapture.PNG'/>
              <Button href='https://admirable-alfajores-aca458.netlify.app/' target='_blank'>Check The Website</Button>
            <Button2 href='https://github.com/not0lucky/Wiki_Games' target='_blank'>
              <BsGithub style={GitStyle} />
              Check Code
              </Button2>
            </Left>
            <Right>
              <WorkTitle>WikiGames</WorkTitle>
              <WorkDesc>WikiGames is a website that provides informations about videos
games. Built using React and styled components. The website's
data is fetched from the RAWG.io API</WorkDesc>
              <ToolsTitle>Frameworks Used:</ToolsTitle>
              <ToolsDesc>
                <Tool>React</Tool>
                <Tool>Styled Components</Tool>
                <Tool>Axios</Tool>
              </ToolsDesc>
            </Right>
          </Item>
          
          <Item>
            <Left>
              <img src='assets\ItriCapture.PNG'/>
              <Button href='https://admirable-bunny-9fa1d5.netlify.app/' target='_blank'>Check The Website</Button>
            <Button2 href='https://github.com/not0lucky/ItriMusic_Player' target='_blank'>
              <BsGithub style={GitStyle} />
              Check Code
              </Button2>
            </Left>
            <Right>
              <WorkTitle>Itri Music Production</WorkTitle>
              <WorkDesc>The music player website has been developed for Itri Music
Production that produces amazigh music. the website is built using
React and styled components. Albums are dynamically fetched
from the producer's youtube channel using Youtube API. Additionally, the site utilizes the React-Player library to stream
videos .
</WorkDesc>
              <ToolsTitle>Frameworks Used:</ToolsTitle>
              <ToolsDesc>
                <Tool>React</Tool>
                <Tool>Styled Components</Tool>
                <Tool>Youtube API</Tool>
                <Tool>React-Player</Tool>
              </ToolsDesc>
            </Right>
          </Item>
        </List>
        <Contact/>
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

@media (max-width: 1420px) {
    margin-top: 50%;
  }
@media (max-width: 768px) {
    margin-top: 30vh;
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
  padding-top: 45px;
  padding-left: 55px;
  padding-right: 45px;
  padding-bottom: 30px;
  border-radius: 15px ;

  @media (max-width: 1420px) {
    
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
        width: 80%;
        height:100%;
        gap: 100px;

  }
  @media (max-width: 768px) {
        
        width: 100%;
        height:100%;
        gap: 50px;
  }


`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  img{
    border-radius: 15px;
     height:236px;
      width:474px;

      
  @media (max-width: 768px) {
        height: 118px;
        width: 237px;
  }
  }

  @media (max-width: 1420px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        align-items: center;
  }
`

const Button = styled.a`
  cursor: pointer;
  margin-top: 30px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
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

  @media (max-width: 1420px) {
    width: 40%;    
    
  }
  @media (max-width: 768px) {
        width: 55%;
        
  }
`
const Button2 = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
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

  @media (max-width: 1420px) {
    width: 40%;    
    margin-bottom: 10%;
    
  }
  @media (max-width: 768px) {
        width: 55%;
        margin-bottom: 15%;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 50px;

  @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        padding-left: 0px;
  }

  @media (max-width: 1420px) {
      width: 100%;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`
const WorkTitle = styled.p`
  font-size: 38px;
  font-weight: 600;
  color: #9b6ef8;
  margin-bottom: 30px;

  @media (max-width: 768px) {
       text-align: center;
  }
  
`

const WorkDesc = styled.p`
  font-size: 16px;
  line-height: 1.3rem;
  margin-bottom: 30px;

  @media (max-width: 1420px) {
      width: 60%;
      text-align: center;
  }
  @media (max-width: 768px) {
        text-align: center;
        width: 100%;
  }

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