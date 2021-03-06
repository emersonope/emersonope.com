import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

import ImgFoto from '../../../assets/images/home/emersonope.jpg';

const Section1 = styled.div`
    justify-content: center;
    align-items: center;
    margin: 15px 0px 0px 0px;
    overflow: hidden;
`;

const Title = styled.h4`
    &{
        margin-bottom: 10px;
        font-size: 25px;
        font-family: times new roman;
        font-style: italic;
        color: #04C740;
        text-align: right;
        margin-right: 50px;
    }
    @media (max-width: 600px) {
        font-size: 25px;
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

const Texto = styled.h4`
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 50px;
    margin-right: 50px;
    text-align: justify;
    text-indent: 1.5em;
    font-family: times new roman;
    font-style: italic;
    font-size: 25px;
    color: #E1E1E6;
`;

const Linha = styled(Row)`
    margin: 0;
`;
const Linha2 = styled(Row)`
    flex-direction: column;
    margin-top: 8px;
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
        <Linha>
            <Coluna xl={5}>
                <Foto src={ImgFoto} alt="Foto Emerson Pereira" />
            </Coluna>
            <Coluna xl={7}>
                <Linha2>
                    <Texto> Profissional formado em Engenharia de Produção com experiência em gestão de seguros e sinistros, acompanhamento dos KPI’s, relacionamento com fornecedores, forecast e negociação.</Texto>
                    <Texto>Atualmente, me formei como desenvolvedor fullStack por perceber a importância e as diversas possibilidades que a programação oferece para o futuro dos negócios e sociedade.</Texto>
                    <Texto>Profissional com boa capacidade de análise, tolerante, eficiente e flexível.</Texto>
                    <Title>Emerson Pereira</Title>
                </Linha2> 
            </Coluna>
        </Linha>
      </Section1>
    );
}

export default Introduction;