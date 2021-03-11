import styled from 'styled-components';

import PageWeb from './web';
import PageMobile from './mobile';
import PageBack from './back';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Portfolio = () => {
    return(
      <Section1>
       
        <PageWeb />
        <PageMobile />
        <PageBack />

      </Section1>
    );
}

export default Portfolio;