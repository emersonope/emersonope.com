import styled from 'styled-components';
import Contact1 from './contact';
import CardContato from './card';

import ImgFoto from '../../assets/images/home/emersonope.jpg';
import QR1 from '../../assets/images/contact/git.png';
import QR2 from '../../assets/images/contact/linkedin.png';
import QR3 from '../../assets/images/contact/email.png';
import QR4 from '../../assets/images/contact/whatsapp.png';

const Section1 = styled.div`
  justify-content: center;
  align-itens: center;
  text-align: center;
`;


const Contact = () => {
    return (
        <Section1>
            <Contact1 titulo={'Emerson Pereira'} 
            foto={ImgFoto} texto={'HTML, CSS, JavaScript, Nodejs, React, Python, Bootstrap'} 
            texto1={''} />

            <CardContato  titulo='Links Úteis' whats={'WhatsApp: (11) 9 5214 3624'}
            github={'github: @emersonope'} ln={'Linkedin: @emersonope'} email={'email: emersonope@gmail.com'} 
            git={'https://github.com/emersonope'}
            lnk={'https://www.linkedin.com/in/emersonope/'}
            mail={'emersonope@gmail.com'} 
            zap={'https://api.whatsapp.com/send?phone=5511952143624&text=Ol%C3%A1!%20Eu%20gostaria%20de%20falar%20sobre%20trabalho.'} 
            img1={QR1} 
            img2={QR2}
            img3={QR3}
            img4={QR4}
            />
        </Section1>
    )
}

export default Contact;