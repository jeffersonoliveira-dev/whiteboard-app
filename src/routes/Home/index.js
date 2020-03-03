import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/index";
import {
  Container,
  LoginButton,
  LogoContainer,
  StyledLogo,
  AppTitle,
  ButtonContainer
} from "./styles";

const Home = () => {
  return (
    <Layout>
      <Container>
        <LogoContainer>
          <StyledLogo />
          <AppTitle>DrawDat</AppTitle>
        </LogoContainer>
        <ButtonContainer>
          <LoginButton to="/login">login</LoginButton>
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default Home;
