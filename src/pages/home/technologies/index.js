import { Col, Row } from "react-bootstrap";
import styled, {keyframes } from 'styled-components';

import React from 'react';

import { IconContext } from "react-icons";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 , FaCss3Alt, FaReact, FaNodeJs, FaPython, FaBootstrap } from 'react-icons/fa';


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

        align-items: center;
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
    @media (max-width: 600px) {
        height: 100%;
        width: 100%;
        text-align: center;
        justify-content: center;
        
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
/* animações */
const animate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
const animate1 = keyframes`
    0% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
    100% { transform: rotate(0deg);}
`;

const bounce = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-7px) }
    100% {transform: translateY(0px) }
}
`;
const bounce1 = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(7px) }
    80% { transform: translateY(-7px) }
    100% {transform: translateY(0px) }
}
`;


const goBack = keyframes`
    0% { transform: translateX(4px);; }
    50% { transform: translateX(0); }
    100% {transform: translateX(4px); }
`;


const HtmlIcon = styled(FaHtml5)`
   animation: ${bounce}  10s linear infinite;
`;

const ReactIcon = styled(FaReact)`
   animation: ${animate} 4s linear infinite;
`;

const CssIcon = styled(FaCss3Alt)`
   animation: ${bounce1} 10s linear infinite;
`;
const BtsIcon = styled(FaBootstrap)`
   animation: ${bounce1} 10s linear infinite;
`;

const PyIcon = styled(FaPython)`
   animation: ${animate1} 4s linear infinite;
`;

const NjsIcon = styled(FaNodeJs)`
   animation: ${goBack} 4s linear infinite;
`;

const JsIcon = styled(IoLogoJavascript)`
   animation: ${goBack} 4s linear infinite;
`;

const MyProvider = ({className, children}) => <IconContext.Provider value={{className}}> {children} </IconContext.Provider>

const IconHtml = styled(MyProvider)`
        color: rgb(221, 75, 37); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-left: 8px;
        margin-bottom: 8px;
`;

const IconCss = styled(MyProvider)`
        color: rgb(12%, 56%, 100%); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-left: 8px;
        margin-bottom: 8px;
`;

const IconNode = styled(MyProvider)`
    color: rgb(33%, 63%, 27%); 
    font-size: 2.5em;
    margin-right: 8px;
    margin-left: 8px;
    margin-bottom: 8px;
`;

const IconReact = styled(MyProvider)`
        color: rgb(8%, 45%, 71%); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-left: 8px;
        margin-bottom: 8px;
`;

const IconPy = styled(MyProvider)`
        color: rgb(0%, 15%, 31%); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-left: 8px;
        margin-bottom: 8px;
`;

const IconBtp = styled(MyProvider)`
        color: rgb(42%, 21%, 68%); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-bottom: 8px;
`;

const IconJs = styled(MyProvider)`
        color: rgb(94%, 85%, 11%); 
        font-size: 2.5em;
        margin-right: 8px;
        margin-bottom: 8px;
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
                                <Texto> HTML, CSS, JavaScript, Nodejs, React, Python, Bootstrap</Texto>
                        </Linha>
                        <Linha>
                                <IconHtml>
                                    <HtmlIcon />
                                </IconHtml>
                                <IconCss>
                                    <CssIcon />
                                </IconCss>
                                <IconJs>
                                    <JsIcon />
                                </IconJs>
                                <IconNode>
                                    <NjsIcon />
                                </IconNode>
                                <IconReact>
                                    <ReactIcon />
                                </IconReact>
                                <IconPy>
                                    <PyIcon />
                                </IconPy>
                                <IconBtp>
                                    <BtsIcon />
                                </IconBtp>
                                
                        </Linha>
                    </Card2>
               </Coluna>
            </Linha>
        </Card>
      )
  };
  
  
  

export default Technologies;