import { Row, Col } from "react-bootstrap";
import styled, { keyframes } from 'styled-components';

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
        width: 90%;
        height: 300px;
        border-radius: 20px;
        background: #343A40;
        cursor: pointer;
    }
    @media (max-width: 800px) {
        height: 530px;
    }
`;

const Logo = styled.img`
    width: 90%;
    max-width: 300px;
    max-height: 250px;
`;

const Linha = styled(Row)`
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
`;

const Coluna = styled(Col)`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
`;

const Texto = styled.h3`
    margin-right: 40px;
    margin-left: 40px;
    font-family: times new roman;
    font-style: italic;
    margin-bottom: 0;
    font-size: 24px;
    color: #E1E1E6;
`;

const Texto1 = styled.h3`
    margin-right: 40px;
    margin-left: 40px;
    margin-top: 0;
    font-size: 18px;
    font-family: times new roman;
    font-style: italic;
    color: #E1E1E6;
    &:hover {
        color: #8257E6 ;
    }
`;

const LayoutCard = (props) => {
    return(
        <Card>
            <Linha>
                <Coluna xl={8}>
                    <Texto>{props.texto}</Texto>
                    <Texto1 onClick={() => window.open(props.aplicacao)}>{props.tec}</Texto1>
                </Coluna>
                <Coluna xl={4}>
                    <Logo src={props.img} alt="" />
                </Coluna>
            </Linha>
        </Card>
    );
}

export default LayoutCard;