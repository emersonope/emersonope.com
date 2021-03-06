import { Col, Row } from "react-bootstrap";
import styled from 'styled-components';

import React from 'react';

import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaGithub, FaLinkedin} from 'react-icons/fa';


const Card = styled.div`
    &{  
        max-width: 345px;
        width: 90%;
        heigt: 100%;
        margin-top: 40px;
        margin-right: auto;
        margin-left: auto;
        padding: 30px;
        border-radius: 20px;
        background: #343A40;
        overflow: hidden;
    }
    &:after {
        filter: blur(15px);
    }
    @media (max-width: 600px) {
        height: 100%;
    }
`;

const Card1 = styled.div`
    &{  
        margin-top: 40px;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 0px;
        padding: 30px;
        border-radius: 20px;
        overflow: hidden;
    }
   
`;

const Title = styled.h2`
    font-size: 28px;
    color: #04C740;
    font-weight: bold;
    text-align: center;
`;

const Linha = styled(Row)`
    &{
        height: 50%;
        margin-top: auto;
        margin-bottom: 4px; 
        display: flex;
        flex-direction: column;  
    }
    @media (max-width: 600px) {
        margin-bottom: 0px;
        margin-top: 0px;
    }
`;

const Coluna = styled(Col)`
    &{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: 0;
    }
    @media (max-width: 600px) {
        margin-bottom: 4px;
    }
   
`;

const Texto = styled.h4`
    &{
        margin-right: 40px;
        margin-left: 40px;
        font-size: 20px;
        color: #A1A1A6;
        text-align: left;
        cursor: pointer;
    }
    @media (max-width: 600px) {
        font-size: 18px;
    }
    &:hover {
        color: #8257E6;
    }
`;



const CardContato = (props) => {

  

    return(
        <Card >
            <Linha>
                <Coluna xl={12}>
                            <Title> {props.titulo} </Title>
                </Coluna>
                <Coluna xl={12}>
                        <Linha>
                                <Texto onClick={() => window.open(props.git)}> <FaGithub /> {props.github}</Texto>
                                <Texto onClick={() => window.open(props.lnk)}> <FaLinkedin /> {props.ln}</Texto>
                                <Texto onClick={() => window.open('mailto:emersonope@gmail.com')}> <AiOutlineMail /> {props.email}</Texto>
                                <Texto onClick={() => window.open(props.zap)}>  <AiOutlineWhatsApp /> {props.whats} </Texto>
                        </Linha>                   
               </Coluna>
            </Linha>
        </Card>
      )
  };
  
  
  export default CardContato;