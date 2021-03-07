import { Col, Row } from "react-bootstrap";
import styled, {keyframes} from 'styled-components';

import React from 'react';

import { IconContext } from "react-icons";
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
        font-family: times new roman;
        font-style: italic;
    }
`;

const Linha = styled(Row)`
    &{
        height: 50%;
        margin-top: auto;
        margin-bottom: 4px;   
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

const Texto = styled.h4`
    &{
        display: flex;
        margin-right: 40px;
        margin-left: 40px;
        text-indent: 1.5em;
        font-family: times new roman;
        font-style: italic;
        font-size: 25px;
        color: #A1A1A6;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 600px) {
        font-size: 18px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`;

const animate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const HtmlIcon = styled(FaHtml5)`
   animation: ${animate} 10s linear infinite;
`;

const ReactIcon = styled(FaReact)`
   animation: ${animate} 10s linear infinite;
`;

const MyProvider = ({className, children}) => <IconContext.Provider value={{className}}> {children} </IconContext.Provider>

const IconHtml = styled(MyProvider)`
        color: rgb(221, 75, 37); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-left: 8px;
`;

const IconCss = styled(MyProvider)`
        color: rgb(12%, 56%, 100%); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-left: 8px;
`;

const IconReact = styled(MyProvider)`
        color: rgb(8%, 45%, 71%); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-left: 8px;
`;

const IconPy = styled(MyProvider)`
        color: rgb(0%, 15%, 31%); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-left: 8px;
`;

const IconBtp = styled(MyProvider)`
        color: rgb(42%, 21%, 68%); 
        font-size: 2.5em;
        margin-right: 8px;
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
                                <IconHtml>
                                    <HtmlIcon />
                                </IconHtml>
                                <IconCss>
                                    <FaCss3Alt />
                                </IconCss>
                                <IconReact>
                                    < ReactIcon />
                                </IconReact>
                                <IconPy>
                                    <FaPython />
                                </IconPy>
                                <IconBtp>
                                    < FaBootstrap />
                                </IconBtp>
                                
                        </Linha>
                    </Card2>
               </Coluna>
            </Linha>
        </Card>
      )
  };
  
  
  

export default Technologies;