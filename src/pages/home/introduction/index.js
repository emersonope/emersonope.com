import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

import ImgFoto from '../../../assets/images/home/emersonope.jpg';

const Section1 = styled.div`
    justify-content: center;
    align-items: center;
    margin: 50px 20px 0;
`;

const Title = styled.h1`
    &{
        margin-bottom: 10px;
        font-size: 32px;
        font-weight: bold;
        color: #04C740;
        text-align: center;
    }
    @media (max-width: 600px) {
        font-size: 32px;
    }
`;

const Foto = styled.img`
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
    border-radius: 50%;
`;

const Texto = styled.h3`
    margin-top: 35px;
    margin-bottom: 35px;
    margin-left: 50px;
    margin-right: 50px;
    font-size: 25px;
    color: #E1E1E6;
`;

const Linha = styled(Row)`
    margin: 0;
`;

const Coluna = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
`;

const Introduction = () => {
    return(
      <Section1>
        <Title>Sobre mim:</Title>
        <Linha>
            <Coluna xl={6}>
                <Foto src={ImgFoto} alt="Foto Emerson Pereira" />
            </Coluna>
            <Coluna xl={6}>
                <Texto>Escreva sua apresentação aqui.
                </Texto>
            </Coluna>
        </Linha>
      </Section1>
    );
}

export default Introduction;