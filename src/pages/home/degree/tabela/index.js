import { Col, Row, Table } from "react-bootstrap";
import styled from 'styled-components';

import React from 'react';

import { IconContext } from "react-icons";
import { FaGraduationCap, FaLandmark, FaRegCalendarAlt } from 'react-icons/fa';

const Card = styled.div`
    &{  
        width: 60%;
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
        width: 83%;
        margin-right: auto;
        margin-left: auto;
    }
`;

const Card1 = styled(Col)`

`;
const Card2 = styled(Col)`
    
`;

const Linha = styled(Row)`
    &{
        height: 50%;
        margin-top: auto;
        margin-bottom: 4px;  
        align-items: center; 
    }
    @media (max-width: 600px) {
        margin-bottom: 0px;
        margin-top: 0px;
    }
`;

const Tab = styled(Table)`
 
`;

const TabTd = styled.td`
    border-top: none !important;
    color: #E1E1E6;
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

const Title = styled.h2`
    font-size: 28px;
    padding: 30px;
    color: #04C740;
    text-align: center;
    font-family: times new roman;
    font-style: italic;
`;

const Tabela = (props) => {
    return (
        <Card>
            <Linha>
                
                <Card1 xl={6}><Title>Formação</Title></Card1>
              
              
                <Card2 xl={6}> 
                <Tab>
                        <tbody>
                            <tr>
                                <TabTh>
                                    <IconFacu >
                                        <FaGraduationCap  />
                                    </IconFacu>
                                </TabTh>
                                <TabTd> {props.curso1} </TabTd>
                            </tr>
                            <tr>
                                <TabTh>
                                    <IconColegio >
                                        <FaLandmark />
                                    </IconColegio>
                                </TabTh>
                                <TabTd> {props.facu1} </TabTd>
                            </tr>
                            <tr>
                                <TabTh>
                                    <IconData >
                                        <FaRegCalendarAlt />
                                    </IconData>
                                </TabTh>
                                <TabTd> {props.data1} </TabTd>
                            </tr>
                        </tbody>
                    </Tab>
                    <Tab>
                        <tbody>
                            <tr>
                                <TabTh>
                                    <IconFacu >
                                        <FaGraduationCap  />
                                    </IconFacu>
                                </TabTh>
                                <TabTd> {props.curso2} </TabTd>
                            </tr>
                            <tr>
                                <TabTh>
                                    <IconColegio >
                                        <FaLandmark />
                                    </IconColegio>
                                </TabTh>
                                <TabTd> {props.facu2} </TabTd>
                            </tr>
                            <tr>
                                <TabTh>
                                    <IconData >
                                        <FaRegCalendarAlt />
                                    </IconData>
                                </TabTh>
                                <TabTd> {props.data2} </TabTd>
                            </tr>
                        </tbody>
                    </Tab>
                </Card2>
               
            </Linha>
        </Card>
    )
};

export default Tabela;
