import styled from 'styled-components';

import Card from '../card/card';

import Pirelli from '../../../assets/images/experiences/pirelli-logo.png';
import Nextel from '../../../assets/images/experiences/nextel-logo.png';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  color: #E1E1E6;
`;

const PageWeb = () => {
    return(
      <Section1>
        <Title>Web</Title>

        <Card texto={'Descricao Projeto'}
        img1={Pirelli} img2={Nextel} 
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/06-CavaleiroJedi-React'} />

        <Title>Mobile</Title>

      </Section1>
    );
}

export default PageWeb;