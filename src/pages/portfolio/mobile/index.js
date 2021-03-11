import styled from 'styled-components';

import Card from '../cardMobile';

import Mobile from '../../../assets/images/portifolio/mobile/mobile.jpg';
import Mobile1 from '../../../assets/images/portifolio/mobile/mobile1.jpg';
import Mobile2 from '../../../assets/images/portifolio/mobile/mobile2.jpg';
import Mobile3 from '../../../assets/images/portifolio/mobile/mobile3.jpg';

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

const PageMobile = () => {
    return(
      <Section1>
        <Title>Mobile</Title>

        <Card titulo={'App Boomsell'} texto={'Projeto de e-commerce criado durante o aprendizado de React Native'}
        img1={Mobile} img2={Mobile1} img3={Mobile2}  img4={Mobile3}
        end={'https://github.com/emersonope'}
        aplicacao={'https://github.com/emersonope/Recode-Pro/tree/12-Yoda-ReactNative'} />

      </Section1>
    );
}

export default PageMobile;