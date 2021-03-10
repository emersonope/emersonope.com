import styled from 'styled-components';

import PageWeb from './web';
import PageMobile from './mobile';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Portfolio = () => {
    return(
      <Section1>
       
        <PageWeb />
        <PageMobile />
        
      </Section1>
    );
}

export default Portfolio;