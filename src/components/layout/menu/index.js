import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import React from 'react';

export const Menu = () => {

  const Title = styled.h1`
      margin: 7px;
      font-size: 25px;
      font-weight: bold;
      color: #04C740;
    `;

    const NavMenu = styled(Navbar.Collapse)`
      justify-content: right;
      text-align: right;
      flex-grow: 0; 
    `;

    const ItensMenu = styled(Nav.Link)`
      font-size: 23px;
      font-weight: bold;
      padding: 0px;
      color: #E1E1E6 !important;
      &:hover{
        color: #8257E6 !important;
      }
    `;

  const Toggle = styled(Navbar.Toggle)`
    background-color: #8257E6 !important;
  `;

  const history = useHistory();

  const menuItens = [
    {
      label: "Sobre",
      path: ""
    },
    {
      label: "Experiências",
      path: "Experiências"
    },
    {
      label: "Portfólio",
      path: "Portfólio"
    },
    {
      label: "Contato",
      path: "Contato"
    },
  ];
  
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark" >
        <Container>
  
          <Navbar.Brand>
            <Title>Emerson Pereira</Title>
          </Navbar.Brand>
  
          <Toggle aria-controls="responsive-navbar-nav">
          </Toggle>
  
          <NavMenu id="menu-topo">
            <Nav className="menu m-auto">
  
              {menuItens.map((iten) => (
                <Nav.Item>
                  <ItensMenu className="item" onClick={() => history.push(`/${iten.path}`)}>
                    {iten.label}
                  </ItensMenu>
                </Nav.Item>
              ))}
  
  
            </Nav>
          </NavMenu>
  
        </Container>
      </Navbar>
    )
};


export default Menu;