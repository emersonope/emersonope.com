import { Col, Row } from "react-bootstrap";
import styled from 'styled-components';

import React from 'react';

import { BiRightArrow } from "react-icons/bi";

const Card = styled.div`
    &{  
        width: 90%;
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

const Card2 = styled.div`
    &{  
        width: 100%;
        border-radius: 20px;
    } 
    @media (max-width: 600px) {
        height: 100%;
    }
`;

const Title = styled.h2`
    &{
        font-size: 28px;
        color: #E1E1E6;
        text-align: center;
        margin-bottom: 20px;
    }
    @media (max-width: 600px) {
        font-size: 22px;
    }
`;

const Linha = styled(Row)`
    &{
        height: 50%;
        margin-top: auto;
        margin-bottom: 4px;
        display: flex;
        align-items: center;   
    }
    @media (max-width: 600px) {
        margin-bottom: 0px;
        margin-top: 0px;
    }
`;

const Coluna = styled(Col)`
    &{
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin-bottom: 4px;
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
    }
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

const Logo = styled.img`
    width: 90%;
    max-width: 300px;
    max-height: 250px;
    margin-bottom: 20px;
`;


export const CardUm = (props) => {

  

    return(
        <Card >
            <Linha>
                <Coluna xl={7}>
                    <Logo src={props.img} alt="" />
                    <Title>{props.texto}</Title>
                </Coluna>
                <Coluna xl={5}>
                        <Card2>
                            <Texto> <BiRightArrow /> {props.cargo}</Texto>
                            <Texto> <BiRightArrow /> {props.funcao}</Texto>
                            <Texto> <BiRightArrow /> {props.funcao1}</Texto>
                            <Texto> <BiRightArrow /> {props.funcao2}</Texto>
                            <Texto> <BiRightArrow /> {props.funcao3}</Texto>
                        </Card2>
                </Coluna>
            </Linha>
        </Card>
      )
  };
  
  
  export default CardUm;