import React from "react";
import Layout from "../../components/Layout/index";
import {
  Container,
  ButtonGhost,
  LogoContainer,
  StyledLogo,
  AppTitle,
  ButtonContainer,
} from "./styles";

const Home = () => (
  <Layout>
    <Container>
      <LogoContainer>
        <StyledLogo />
        <AppTitle>DrawDat</AppTitle>
      </LogoContainer>
      <ButtonContainer>
        <ButtonGhost to="/login">start</ButtonGhost>
      </ButtonContainer>
    </Container>
  </Layout>
);

export default Home;
