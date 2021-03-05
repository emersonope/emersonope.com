import styled from 'styled-components';


import Introduction from './introduction';
import Technologies from './technologies';
import Degree from './degree';


const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
`;

const Home = () => {
    return(
      <Section1>
       
        <Introduction />
        <Technologies />
        <Degree />
        
      </Section1>
    );
}

export default Home;