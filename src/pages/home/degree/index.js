import styled from 'styled-components';

import Tabela from './tabela';

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

const Degree = () => {
    return(
      <Section1>
       
        <Tabela  
        
        curso1={'Engenharia de Produção'} 
        curso2={'Desenvolvedor FullStack'}

        facu1={'São Judas Tadeu'}
        facu2={'Recode Pro'}

        data1={'02/2015 - 12/2019'}
        data2={'09/2020 - 03/2021'}
         />

      </Section1>
    );
}



  
  export default Degree;