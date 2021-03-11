import styled from 'styled-components';


import Introduction from './introduction';
import Technologies from './technologies';
import Degree from './degree';


const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
  text-align: center;
  font-family: times new roman;
  font-style: italic;
`;

const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: bold;
  color: #04C740;
`;

const Home = () => {
    return(
      <Section1>

       <Title>Bem-vindo(s)</Title>
        
        <Introduction />
        <Technologies />
        <Degree />
        
      </Section1>
    );
}

export default Home;