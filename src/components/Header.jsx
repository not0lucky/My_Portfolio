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
    
    
`

const Links = styled.ul`
    width: 30%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-right: 100px;
    margin-top: 70px;
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
`

export default Header