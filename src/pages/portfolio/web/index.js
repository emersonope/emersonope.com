import styled from 'styled-components';

import Card from '../card/card';

import Assegura from '../../../assets/images/portifolio/web/assegura1.png';
import Assegura1 from '../../../assets/images/portifolio/web/assegura2.png';
import Assegura2 from '../../../assets/images/portifolio/web/assegura3.png';


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

        <Card titulo={'Assegura LGBTQIA+'} texto={'Projeto realizado ao longo de 6 meses em parceria com outros 5 Devs, criado em ReactJs, com banco de dados em relacional MySQL e o back-end em NodeJs.'}
        img1={Assegura} img2={Assegura1} img3={Assegura2}
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/06-CavaleiroJedi-React'} />

      </Section1>
    );
}

export default PageWeb;