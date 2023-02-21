import React from 'react'
import styled from 'styled-components'
import { MdEmail } from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs'

function Contact() {
     const MailStyle = { fontSize: "30px", marginRight:"5px",color:"#9b6ef8" }
     const PhoneStyle = { fontSize: "27px", marginRight:"8px",color:"#9b6ef8" }
  return (
    <Countainer>
        <Content>
            <Title>Contact</Title>
            <Text>
                <MdEmail style={MailStyle}/> <span className='line'>|</span> <span> Email :</span>  agramanir@gmail.com
            </Text>
            <Text2>
                <BsFillTelephoneFill style={PhoneStyle}/> <span className='line'>|</span> <span> Phone :</span>  +212693277070
            </Text2>
        </Content>
    </Countainer>
  )
}

const Countainer = styled.div`
  height: 70vh;
  width: 100vw;
  margin-bottom: 100px;
  margin-top: 150px;
 `

const Content = styled.div`
   
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
    margin-top: 140px;
    display: flex;
    font-size: 19px;
    align-items: center;

    span{
        margin-right: 15px;
        margin-left: 10px;
        color: #9b6ef8;
    }
     .line{
        color: #9b6ef8;
        margin-left: 0;
        margin-right: 0;
    }
`
const Text2 = styled.p`
    margin-top: 40px;
    display: flex;
    font-size: 19px;
    align-items: center;

    span{
        margin-right: 15px;
        margin-left: 10px;
        color: #9b6ef8;
    }
     .line{
        color: #9b6ef8;
        margin-left: 0;
        margin-right: 0;
    }
`


export default Contact