import React from "react";
import styled from 'styled-components';

const MinhaDiv = styled.div`
    &{  
      display: flex;
      letter-spacing: 0.2em;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80px;
      background-color: #343A40;
    }
    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
`;
const TextoDiretos = styled.h1`
    &{  
      margin-top: auto;
      margin-bottom: auto;
      font-size: 25px;
      font-weight: bold;
      color: #E1E1E6;
    }
    @media (max-width: 600px) {
      font-size: 18px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
    }
`;

const TextoNome = styled.small`
    &{  
      color: #8257E6;
      font-weight: bold;
      font-size: 18px;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      font-size: 16px;
    }
`;


export const Footer = () => {

  return (
    <MinhaDiv bg="dark">
        <TextoDiretos>Todos direitos reservados | <TextoNome>Emerson Pereira</TextoNome></TextoDiretos> 
    </MinhaDiv>
  );
};

export default Footer;