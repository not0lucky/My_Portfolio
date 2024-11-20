import React from 'react'
import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs';

function About() {
  const GitStyle = { fontSize: "24px" }

  return (
    <Countainer id="about">
      <Section>

      
      <Content>
          <Title>Who am I ? </Title>
          <Text>
            I am a 23-year-old front end developer from Morocco, and I've been passionate about coding since I was 16 years old. I've been learning coding for about three years now, and it's been an incredible journey so far. I find joy in solving problems, discovering and exploring new things, and expressing my creativity through my work.  I am currently studying software engineering at ALX Africa, where I hope to gain new skills and grow as a developer.
          </Text>
          <Buttons>
            <Button href="assets\Anir Agram - Resume.pdf" download="Anir Agram - Resume">Download my Resume</Button>
            <Button2 href='https://github.com/not0lucky' target='_blank'>
              <BsGithub style={GitStyle} />
              Check Github
              </Button2>
          </Buttons>
      </Content>
      
      </Section>
    </Countainer>
  )
}

const Countainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin-bottom: 100px;
  &:before {
    content: "";
    display: block;
    width: 30vw;
    height:3px;
    background-color: #282355;
    margin: 0 auto;
}

@media (max-width: 1200px) {
   // margin-bottom: 200px;
  }

  @media (max-width: 768px) {
  // margin-bottom: 50%;
  }
 
`
const Content = styled.div`
   margin-top: 15vh;
  margin-left: 15vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
        
  }
`
const Section = styled.div`
  display: flex;
`

const Title = styled.p`
  font-size: 45px;
  color: #9b6ef8;
  font-weight:700;
  &:after {
    content: "";
    display: block;
    width: 100px;
    height:3px;
    background-color: #9b6ef8;
    
}
  
`
const Text = styled.p`
  margin-top: 12vh;
  font-size: 20px;
  width: 40vw;
  line-height: 2rem;

  @media (max-width: 768px) {
        width: 100vw;
  }

`

const Button = styled.a`
  cursor: pointer;
  margin-top: 80px;
  font-size: 18px;
  padding: 20px 40px;
  align-items: center;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  border: 2px solid #804BF7;
  background-color: transparent;
  color: #804BF7;
  transition: 0.3s ease;
  &:hover{
    background-color: #1D143C;
  }

  @media (max-width: 768px) {
        margin-top: 90px;
  }
`
const Button2 = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  margin-top: 80px;
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

  @media (max-width: 768px) {
        margin-top: 0px;
  }
`
const Buttons = styled.div`
  display: flex;
  
  gap: 1.6rem;

  @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
  }
`

export default About