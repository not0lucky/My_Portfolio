import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'

function Header() {
  return (
    <>
        <Countainer>
            <Links>
                <Title>
                    <Link>About</Link>
                </Title>
                <Title>
                    <Link>Skills</Link>
                </Title>
                <Title>
                    <Link>Work</Link>
                </Title> 
                <Title>
                    <Link>Contact</Link>
                </Title> 
            </Links>
        </Countainer>
    </>
  )
}

const Countainer = styled.div`
    display: flex;
    justify-content: flex-end;
    
    @media (max-width: 1200px) {
    //justify-content: fl;
    //align-items: center;
    //justify-content: center;
  }
    
  @media (max-width: 768px) {
      align-items: center;
    justify-content: center;
  }
`

const Links = styled.ul`
    width: 30%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-right: 100px;
    margin-top: 70px;

    @media (max-width: 1200px) {
       // width: 100%;
    //justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 100%;
      align-items: center;
    justify-content: flex-end;
    

  }
`
const Title = styled.li`
    font-size: 17px;
    color:#cbcacafb;
    cursor: pointer;
    transition: 0.3s ease;

    &:after {
        content: "";
        display: block;
        margin-top: 2px;
        height: 2px;
        
}

    &:hover{
       color:white;
       &:after {
        content: "";
        display: block;
        margin-top: 2px;
        height: 2px;
        background-color: #804BF7;
        transition: 0.3s ease;
}
    }

    @media (max-width: 768px) {
        font-size: 16px;
        margin-left: 1.2rem;
  }

`

export default Header