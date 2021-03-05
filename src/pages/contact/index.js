import styled from 'styled-components';
import ImgFoto from '../../assets/images/home/emersonope.jpg';
import Contact1 from './contact';
import CardContato from './card';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
  text-align: center;
`;


const Contact = () => {
    return (
        <Section1>
            <Contact1 titulo={'Emerson Pereira'} 
            foto={ImgFoto} texto={'HTML, CSS, JavaScript, React, Python, Bootstrap'} 
            texto1={''} />

            <CardContato  titulo='digite aqui' whats={'(11) 9 5214 3624'}
            github={'github'} ln={'Linkedin'} email={'email'} 
            git={'https://github.com/emersonope'}
            lnk={'https://www.linkedin.com/in/emersonope/'}
            mail={'emersonope@gmail.com'} 
            zap={'https://api.whatsapp.com/send?phone=5511952143624&text=Ol%C3%A1!%20Eu%20gostaria%20de%20falar%20sobre%20trabalho.'} />
        </Section1>
    )
}

export default Contact;