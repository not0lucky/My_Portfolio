import React from 'react'
import styled from 'styled-components'


function Skills() {
  return (
    <Countainer>
      <Content>
        <Title>My Skills</Title>
        <Grids>
          <Column>
              <ColumnTitle>Front End Languages</ColumnTitle>
              <ColumnItem>
                <img src="assets\html-5-svgrepo-com.svg" alt='' height="40px"/>
                <p>HTML</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\css-svgrepo-com.svg" alt='' height="40px"/>
                <p>CSS</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\styled-components.svg" alt='' height="40px"/>
                <p>Styled Components</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\js-svgrepo-com.svg" alt='' height="40px"/>
                <p>Javascript</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets/react.svg" alt=''/>
                <p>React.js</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\redux-svgrepo-com.svg" alt='' height="40px"/>
                <p>Redux Toolkit</p>
              </ColumnItem>
          </Column>
          <Column>
              <ColumnTitle>Languages/Frameworks <span>&#40;</span>basic knowledge<span>&#41;</span>  </ColumnTitle>
              <ColumnItem>
                <img src="assets\nextjs-svgrepo-com.svg" alt='' height="40px"/>
                <p>Next.js</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\nodejs-icon-svgrepo-com.svg" alt='' height="40px"/>
                <p>Node.js</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\firebase-svgrepo-com.svg" alt='' height="40px"/>
                <p>Firebase</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\mongodb-svgrepo-com.svg" alt='' height="40px"/>
                <p>MongoDB</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\mysql-svgrepo-com.svg" alt='' height="40px"/>
                <p>MySQL</p>
              </ColumnItem>
          </Column>
          <Column>
              <ColumnTitle>Tools</ColumnTitle>
              <ColumnItem>
                <img src="assets\figma-svgrepo-com.svg" alt='' height="40px"/>
                <p>Figma</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\strapi-icon-svgrepo-com.svg" alt='' height="40px"/>
                <p>Strapi</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\wordpress-color-svgrepo-com.svg" alt='' height="40px"/>
                <p>Wordpress</p>
              </ColumnItem>
              <ColumnItem>
                <img src="assets\ubuntu-svgrepo-com.svg" alt='' height="40px"/>
                <p>Ubuntu</p>
              </ColumnItem>
          </Column>
        </Grids>
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

@media (max-width: 1420px) {
    margin-bottom: 50%;
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

const Grids = styled.div`
  width: 70vw;
  margin-top: 6.5rem;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1420px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #221646;
  padding: 25px 45px;
  border-radius: 15px ;
  //border: 1px solid #00BCFF;
  @media (max-width: 1420px) {
    width: fit-content;
    
  }
`
const ColumnTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  width: 220px;
  text-align: center;
  margin-bottom: 30px;
`
const ColumnItem = styled.div`
  display: flex;
  gap: 20px;
  font-size: 15px;
  font-weight: 500;
  align-items:center;
  margin-bottom: 20px;
  margin-left: 26px;
`
 

export default Skills