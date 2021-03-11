  
import { Row, Col, Table } from "react-bootstrap";
import styled, { keyframes } from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const animate = keyframes`
    0%{
        background-position: 0 0;
    }
    50%{
        background-position: 300% 0;
    }
    100%{
        background-position: 0 0;
    }
`; 

const Card = styled.div`
    &{  
        position: relative;
        margin-top: 40px;
        margin-right: auto;
        margin-left: auto;
        padding: 20px;
        width: 90%;
        height: 400px;
        border-radius: 20px;
        background: #343A40;
        cursor: pointer;
    }
    @media (max-width: 800px) {
        height: 630px;
    }
`;

const Imagens = styled.img`
    width: 100%;
    @media (max-width: 800px) {
        max-width: 300px;
        max-height: 250px;
    }
`;

const Carrosel = styled(Carousel)`
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 1200px) {
        max-width: 300px;
        max-height: 250px;
    }
`;

const Linha = styled(Row)`
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;

`;

const Coluna = styled(Col)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
`;

const Coluna2 = styled(Col)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    flex-direction: column;

`;

const Botao = styled.button`
    &{
        width: 300px;
        height: 50px;
        border-radius: 25px;
        background-color: #202024;
        color: #E1E1E6;
        font-size: 20px;
    }
    &:hover {
        color: #8257E6 ;
    }
`;

const TabTd = styled.td`
    &{
        display: flex;
        border-top: none !important;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 18px;
        font-family: times new roman;
        font-style: italic;
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
    text-align: center;
    align-items: center;
    font-size: 28px;
    font-family: times new roman;
    font-style: italic;
    margin-top: 0;
    color: #E1E1E6;
`;

const LayoutCard = (props) => {
    return(
      <Card onClick={() => window.open(props.end)}>
          <Linha>
              <Coluna xl={5}>
                  <Carrosel showArrows={false} infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} showIndicators={false}>
                    <Imagens src={props.img1} alt="" />
                    <Imagens src={props.img2} alt="" />
                    <Imagens src={props.img3} alt="" />
                  </Carrosel>
              </Coluna>
              <Coluna xl={7}>
                    <Coluna2>
                        <Table>
                            <tbody>
                                <tr>
                                    <TabTh> {props.titulo} </TabTh>
                                </tr>
                                <tr>
                                    <TabTd> {props.texto} </TabTd>
                                </tr>
                                <tr>
                                    <TabTd> 
                                        <Botao onClick={() => window.open(props.aplicacao)}>Veja No GitHub</Botao>   
                                    </TabTd>
                                </tr>
                            </tbody>
                        </Table>
                    </Coluna2>
              </Coluna>
          </Linha>
      </Card>
    );
}

export default LayoutCard;