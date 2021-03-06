import { Col, Row } from "react-bootstrap";
import styled from 'styled-components';

import React from 'react';

import { FaHtml5 , FaCss3Alt, FaReact, FaPython, FaBootstrap } from 'react-icons/fa';


const Card = styled.div`
    &{  
        width: 90%;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-right: auto;
        margin-left: auto;
        padding: 30px;
        border-radius: 20px;
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
        align-items: center;
        justify-content: center;
        margin-bottom: 0px;
        padding: 30px;
        border-radius: 20px;
        overflow: hidden;
    }
   
`;


const Card2 = styled.div`
    &{  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 0px;
        padding: 1px;
        border-radius: 20px;
        overflow: hidden;
    }
    &:after {
        filter: blur(15px);
    }
    @media (max-width: 600px) {
        height: 100%;
        width: 100%;
    }
`;

const Title = styled.h2`
    &{
        font-size: 28px;
        color: #04C740;
        text-align: center;
        font-family: times new roman;
        font-style: italic;
    }
    @media (max-width: 600px) {
        text-align: center;
    }
`;

const Linha = styled(Row)`
    &{
        height: 50%;
        text-align: center;
        margin-top: auto;
        margin-bottom: 4px;   
    }
    @media (max-width: 600px) {
       
    }
`;

const Coluna = styled(Col)`
    &{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    }
    @media (max-width: 600px) {
        margin-bottom: 4px;
    }
   
`;

const Degree1 = styled(Col)`
    margin-bottom: 4px;
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;
`;

const Texto = styled.h4`
    &{
        margin-right: 40px;
        margin-left: 40px;
        text-indent: 1.5em;
        font-family: times new roman;
        font-style: italic;
        font-size: 25px;
        color: #A1A1A6;
        text-align: left;
    }
    @media (max-width: 600px) {
        font-size: 18px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`;

export const Technologies = () => {

  

    return(
        <Card >
            <Linha>
                <Coluna xl={12}>
                    <Card1> 
                            <Title>Tecnologias</Title>
                    </Card1>
                </Coluna>
                <Coluna xl={12}>
                    <Card2>
                        <Linha>
                                <Texto> HTML, CSS, JavaScript, React, Python, Bootstrap</Texto>
                        </Linha>
                        <Linha>
                                <Texto><FaHtml5 /> <FaCss3Alt /> < FaReact /> <FaPython /> < FaBootstrap /></Texto>
                        </Linha>
                    </Card2>
               </Coluna>
            </Linha>
        </Card>
      )
  };
  
  
  

export default Technologies;