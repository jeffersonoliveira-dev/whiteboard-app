import React from "react";
import {
  Container, Logo, CreateButton, Footer, Copyright,
} from "./styles";

const CenterPanel = () => (
  <Container>
    <Logo>Drew Dat</Logo>
    <CreateButton type="button">Create Panel</CreateButton>
    <Footer>
      <Copyright> copyright here</Copyright>
    </Footer>
  </Container>
);

export default CenterPanel;
