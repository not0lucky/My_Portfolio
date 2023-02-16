import React from 'react'
import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs';

function About() {
  const GitStyle = { fontSize: "24px" }

  return (
    <Countainer>
      <Content>
          <Title>Who am I ? </Title>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cupiditate molestias sit autem saepe quam esse, consequatur dolores! Eum a officiis perspiciatis debitis, necessitatibus similique corrupti non dolor quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem explicabo sit. Quasi officiis, quis laudantium natus assumenda molestiae voluptatem ipsa veritatis sunt perspiciatis possimus ducimus perferendis nam, reprehenderit exercitationem.</Text>
          <Buttons>
            <Button>Download my CV</Button>
            <Button2 href='https://github.com/not0lucky' target='_blank'>
              <BsGithub style={GitStyle} />
              Check Github
              </Button2>
          </Buttons>
          

      </Content>
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
  font-size: 18px;
  width: 30vw;
  line-height: 1.9rem;

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