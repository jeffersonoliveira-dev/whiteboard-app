import React, { useContext, useEffect } from "react";
import {  Container, MContainer } from './styles'
// import AuthContext from "../../store/index";

const History = () => {
  if (window.screen.width < 768) {
    // button
    return <MContainer>mobile here</MContainer>;
  }
  // open
  return <Container>history here</Container>;
};

export default History;
