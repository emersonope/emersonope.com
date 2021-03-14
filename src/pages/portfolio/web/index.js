import styled from 'styled-components';

import Card from '../card/card';

import Prtfolio from '../../../assets/images/portifolio/web/portfolio.png';
import Prtfolio1 from '../../../assets/images/portifolio/web/portfolio1.png';
import Prtfolio2 from '../../../assets/images/portifolio/web/portfolio2.png';

import Assegura from '../../../assets/images/portifolio/web/assegura1.png';
import Assegura1 from '../../../assets/images/portifolio/web/assegura2.png';
import Assegura2 from '../../../assets/images/portifolio/web/assegura3.png';

import Boomsell from '../../../assets/images/portifolio/web/boomsell.png';
import Boomsell1 from '../../../assets/images/portifolio/web/boomsell1.png';
import Boomsell2 from '../../../assets/images/portifolio/web/boomsell2.png';


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

        <Card titulo={'Portfolio Emerson Pereira'} texto={'Projetocriado em Reactjs com estilização através do styled-components e responsividade em bootstrap.'}
        img1={Prtfolio} img2={Prtfolio1} img3={Prtfolio2}
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/emersonope.com'} />

        <Card titulo={'Assegura LGBTQIA+'} texto={'Projeto realizado ao longo de 6 meses em parceria com outros 5 Devs, criado em ReactJs, com banco de dados em relacional MySQL e o back-end em NodeJs.'}
        img1={Assegura} img2={Assegura1} img3={Assegura2}
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/squad4spm'} />

        <Card titulo={'Boomsell e-commerce'} texto={'Projeto de e-commerce criado para a predizagem de Reactjs onde foram utilizados desde commonjs, express, lazy loading com o back-end em Nodejs.'}
        img1={Boomsell} img2={Boomsell2} img3={Boomsell1}
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/07-CavaleiroJedi-NodeAPI'} />

      </Section1>
    );
}

export default PageWeb;