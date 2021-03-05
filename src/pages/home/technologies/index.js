import { Col, Row } from "react-bootstrap";
import styled from 'styled-components';

import React from 'react';

import { FaHtml5 , FaCss3Alt, FaReact, FaPython, FaBootstrap } from 'react-icons/fa';


const Card = styled.div`
    &{  
        width: 90%;
        margin-top: 40px;
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
        height: 530px;
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
        height: 350px;
    }
   

`;

const Title = styled.h2`
    font-size: 28px;
    color: #E1E1E6;
    text-align: center;
`;

const Linha = styled(Row)`
    &{
        height: 50%;
        text-align: center;
        margin-top: auto;
        margin-bottom: 4px;   
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
        font-size: 20px;
        color: #A1A1A6;
        text-align: left;
    }
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

const Texto2 = styled.h5`
    &{
        margin-right: 40px;
        margin-left: 40px;
        font-size: 16px;
        color: #A1A1A6; 
    }
    @media (max-width: 600px) {
        font-size: 15px;
    }
`;

const Texto3 = styled.h6`
    &{
        margin-right: 40px;
        margin-left: 40px;
        font-size: 14px;
        color: #A1A1A6;
    }
    @media (max-width: 600px) {
        font-size: 13px;
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
                            <Degree1 >
                                <Texto> HTML, CSS, JavaScript, React, Python, Bootstrap</Texto>
                            </Degree1>
                        </Linha>
                        <Linha>
                            <Degree1 >
                                <Texto><FaHtml5 /> <FaCss3Alt /> < FaReact /> <FaPython /> < FaBootstrap /></Texto>
                            </Degree1>
                        </Linha>
                   
                    </Card2>
               </Coluna>
            </Linha>
        </Card>
      )
  };
  
  
  

export default Technologies;