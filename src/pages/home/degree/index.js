import { Col, Row } from "react-bootstrap";
import styled from 'styled-components';

import React from 'react';

import { FaGraduationCap, FaLandmark, FaSchool, FaRegCalendarAlt } from 'react-icons/fa';


const Card = styled.div`
    &{  
        max-width: 700px;
        width: 80%;
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
        width: 100%;
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
        
    }
   

`;

const Title = styled.h2`
    font-size: 28px;
    color: #04C740;
    text-align: center;
    font-family: times new roman;
    font-style: italic;
`;

const Linha = styled(Row)`
    &{
        height: 50%;
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

export const Degree = () => {

  

    return(
        <Card >
            <Linha>
                <Coluna xl={6}>
                    <Card1> 
                            <Title>Formação</Title>
                    </Card1>
                </Coluna>
                <Coluna xl={6}>
                    <Card2>
                        <Linha>
                            <Degree1 >
                                <Texto><FaGraduationCap /> Engenheiro de Produção</Texto>
                                <Texto2><FaLandmark /> Universidade São Judas Tadeu</Texto2>
                                <Texto3><FaRegCalendarAlt /> 02/2015 - 12/2019</Texto3>
                            </Degree1>
                        </Linha>
                        <Linha>
                            <Degree1 >
                                <Texto><FaGraduationCap /> Desenvolvedor FullStack</Texto>
                                <Texto2><FaLandmark /> Recode Pro</Texto2>
                                <Texto3><FaRegCalendarAlt /> 09/2020 - 03/2021</Texto3>
                            </Degree1>
                        </Linha>
                   
                    </Card2>
               </Coluna>
            </Linha>
        </Card>
      )
  };
  
  
  export default Degree;