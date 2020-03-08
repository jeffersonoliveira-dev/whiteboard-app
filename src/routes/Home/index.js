import React from "react";
import Layout from "../../components/Layout/index";
import {
  Container,
  LoginButton,
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
        <LoginButton to="/signup">signup</LoginButton>
        <LoginButton to="/login">login</LoginButton>
      </ButtonContainer>
    </Container>
  </Layout>
);

export default Home;
