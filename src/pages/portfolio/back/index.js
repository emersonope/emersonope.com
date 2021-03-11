import styled from 'styled-components';

import CardBack from '../cardBack';

import Back1 from '../../../assets/images/portifolio/back/mongodb.png';
import Back2 from '../../../assets/images/portifolio/back/mysql.png';
import Back3 from '../../../assets/images/portifolio/back/node.png';
import Back4 from '../../../assets/images/portifolio/back/php.png';
import Back5 from '../../../assets/images/portifolio/back/python.png';
import Back6 from '../../../assets/images/portifolio/back/git.png';

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

const Card = () => {
    return(
      <Section1>
        <Title>Back-End</Title>

        <CardBack texto={'Software de gerenciamento de banco de dados em NoSQL, com orientação a documentos de códico aberto e multiplataforma.'} tec={'Clique para saber mais'}
        img={Back1} 
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/07-CavaleiroJedi-NodeAPI/Mongo'} />

        <CardBack texto={'Com utilização da liguagem SQL como interface, O MySQL é um dos sistemas de gerenciamento de banco de dados mais utilizados do mundo.'} tec={'Clique para saber mais'}
        img={Back2} 
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/07-CavaleiroJedi-NodeAPI'} />

        <CardBack texto={'Aplicativo de redes escalonáveis, com um tempo de execução em JavaScript baseado em eventos.'} tec={'Clique para saber mais'}
        img={Back3} 
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/07-CavaleiroJedi-NodeAPI/Back-End'} />

        <CardBack texto={'Uma linguagem de script open source, muito utilizada, adequada para desenvolvimento web e que pode ser embutida no HTML.'} tec={'Clique para saber mais'}
        img={Back4} 
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/05-Padawan-PHP'} />

        <CardBack texto={'Linguagem de programação de alto nível orientada a objetos e muito versátil. Além de ser multiplataforma é usada em diferentes frentes tais como: análise de dados, inteligência artificial, dev. web e etc.'} tec={'Clique para saber mais'}
        img={Back5} 
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/10-MestreJedi-CalculatorPython'} />

        <CardBack texto={'É um sistema muito importante e agíl para controle de versões, possibilitando que todo um time trabalhe simultaneamente no projeto e de forma organizada.'} tec={'Clique para saber mais'}
        img={Back6} 
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope'} />
      </Section1>
    );
}

export default Card;