import styled from 'styled-components';

import React from 'react';
import Card1 from './card1/card1'

import Pirelli from '../../assets/images/experiences/pirelli-logo.png'
import Nextel from '../../assets/images/experiences/nextel-logo.png'

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #A1A1A6;
`;

const Skills = () => {
  return(
    <Section1>
      <Card1 img={Pirelli} texto={'Pirelli Comercial de Pneus Brasil Ltda'} 
      cargo={'Risk Management Intern'}
      funcao='Gestão de Riscos e Sinistros'
      funcao1='Gerenciamento de Seguros e Pagamentos'
      funcao2='Gestão de Riscos'
      funcao3='Forecast mensal' />

      <Card1 img={Nextel} texto={'Nextel Telecomunicações Ltda'} 
      cargo={'Budget and Planning Intern'}
      funcao='Análise e Validação de Faturamento'
      funcao1='Contas a Pagar e Receber'
      funcao2='Gerenciamento de Fluxo de Caixa'
      funcao3='Forecast Mensal' />
      
    </Section1>
  );
}

export default Skills;