import { Col, Row, Table } from "react-bootstrap";
import styled from 'styled-components';

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { IconContext } from "react-icons";
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaGithub, FaLinkedin} from 'react-icons/fa';


const Card = styled.div`
    &{  
        text-align: left;
        max-width: 400px;
        width: 100%;
        heigt: 100%;
        margin-top: 40px;
        margin-right: auto;
        margin-left: auto;
        padding: 30px;
        border-radius: 20px;
        background: #343A40;
        overflow: hidden;
    }
    @media (max-width: 600px) {
        max-width: 310px;
        text-align: left;
        height: 100%;
        width: 100%;
        
    }
`;

const Title = styled.h2`
    &{
        text-align: center;
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

const Carrosel = styled(Carousel)`
    width: 320px;
    height: 320px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    border-radius: 15px;
    @media (max-width: 800px) {
        width: 100%;
        max-height: 260px;
        max-width: 260px;
    }
`;

const Imagens = styled.img`
    width: 320px;
    height: 340px;
    margin-bottom: 0;
    border-radius: 15px;
    @media (max-width: 800px) {
        max-height: 270px;
        max-width: 270px;
    }
`;

const Tab = styled(Table)``;

const TabTd = styled.td`
    &{
        border-top: none !important;
        color: #E1E1E6;
    }
    &:hover {
        color: #8257E6;
    }

`;

const TabTh = styled.th`
    display: flex;
    border-top: none !important;
    justify-content: center;
    align-items: center;
`;

const MyProvider = ({className, children}) => <IconContext.Provider value={{className}}> {children} </IconContext.Provider>

const IconGit = styled(MyProvider)`
    color: rgb(91%, 31%, 19%); 
    font-size: 2em;
`;

const IconLn = styled(MyProvider)`
    color: rgb(65%, 49%, 33%);
    font-size: 2em;
`;

const IconMail = styled(MyProvider)`
    color: rgb(58%, 24%, 49%);
    font-size: 2em;
`;
const IconWhats = styled(MyProvider)`
    color: rgb(28%, 78%, 34%);
    font-size: 2em;
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
                        <Tab>
                            <tbody>
                                <tr>
                                    <TabTh>
                                        <IconGit >
                                            <FaGithub />
                                        </IconGit>
                                    </TabTh>
                                    <TabTd onClick={() => window.open(props.git)}> {props.github} </TabTd>
                                </tr>
                                <tr>
                                    <TabTh>
                                        <IconLn >
                                            <FaLinkedin />
                                        </IconLn>
                                    </TabTh>
                                    <TabTd onClick={() => window.open(props.lnk)}> {props.ln} </TabTd>
                                </tr>
                                <tr>
                                    <TabTh>
                                        <IconMail >
                                            <AiOutlineMail />
                                        </IconMail>
                                    </TabTh>
                                    <TabTd onClick={() => window.open('mailto:emersonope@gmail.com')}> {props.email} </TabTd>
                                </tr>
                                <tr>
                                    <TabTh>
                                        <IconWhats >
                                            <AiOutlineWhatsApp />
                                        </IconWhats>
                                    </TabTh>
                                    <TabTd onClick={() => window.open(props.zap)}> {props.whats} </TabTd>
                                </tr>
                            </tbody>
                        </Tab>                     
                    </Linha>                   
                </Coluna>
                <Coluna xl={12}>
                    <Carrosel fade interval={5000} showArrows={false} infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} showIndicators={false}>
                        <Imagens src={props.img1} alt="" />
                        <Imagens src={props.img2} alt="" />
                        <Imagens src={props.img3} alt="" />
                        <Imagens src={props.img4} alt="" />
                    </Carrosel>
                </Coluna>
            </Linha>
        </Card>
      )
  };
  
  export default CardContato;