import { Col, Row, Table } from "react-bootstrap";
import styled from 'styled-components';

import React from 'react';

import { IconContext } from "react-icons";
import { MdWork } from 'react-icons/md';
import { FaTasks, FaRegCalendarAlt } from 'react-icons/fa';

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
        text-align: left;
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
        font-weigth: bolder;
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
    border-top: none !important;
`;

const MyProvider = ({className, children}) => <IconContext.Provider value={{className}}> {children} </IconContext.Provider>

const IconFacu = styled(MyProvider)`
        color: rgb(0%, 15%, 31%); 
        font-size: 2em;
`;

const IconColegio = styled(MyProvider)`
    color: rgb(65%, 49%, 33%);
    font-size: 2em;
`;

const IconData = styled(MyProvider)`
    color: rgb(58%, 24%, 49%);
    font-size: 2em;
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
                            <Tab>
                                <tbody>
                                <tr>
                                    <TabTh>
                                        <IconFacu >
                                            <MdWork  />
                                        </IconFacu>
                                    </TabTh>
                                    <TabTd> <Texto>{props.cargo}</Texto></TabTd>
                                </tr>
                                <tr>
                                    <TabTh>
                                        <IconColegio >
                                            <FaRegCalendarAlt />
                                        </IconColegio>
                                    </TabTh>
                                    <TabTd> {props.data} </TabTd>
                                </tr>
                                <tr>
                                    <TabTh>
                                        <IconData >
                                            <FaTasks />
                                        </IconData>
                                    </TabTh>
                                    <TabTd> {props.funcao} </TabTd>
                                </tr>
                                <tr>
                                    <TabTh>
                                        <IconData >
                                            <FaTasks />
                                        </IconData>
                                    </TabTh>
                                    <TabTd> {props.funcao1} </TabTd>
                                </tr>
                                <tr>
                                    <TabTh>
                                        <IconData >
                                            <FaTasks />
                                        </IconData>
                                    </TabTh>
                                    <TabTd> {props.funcao2} </TabTd>
                                </tr>
                                <tr>
                                    <TabTh>
                                        <IconData >
                                            <FaTasks />
                                        </IconData>
                                    </TabTh>
                                    <TabTd> {props.funcao3} </TabTd>
                                </tr>
                            </tbody>
                        </Tab> 
                        </Card2>
                </Coluna>
            </Linha>
        </Card>
      )
  };
  
  
  export default CardUm;