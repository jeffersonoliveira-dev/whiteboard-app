import React from "react";
import { Container, MContainer } from "./styles";

const SideBar = (props) => {
  if (window.screen.width < 768) {
    // button
    return <MContainer>mobile here</MContainer>;
  }
  // aberto
  return <Container>pc master race</Container>;
};

export default SideBar;
