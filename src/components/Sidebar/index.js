import React from "react";
import {
  Container, MContainer, AvatarArea, Avatar,
} from "./styles";

const SideBar = (props) => {
  if (window.screen.width < 768) {
    // button
    return <MContainer>mobile here</MContainer>;
  }
  // aberto
  return (
    <Container>
      <AvatarArea>
        <Avatar />
      </AvatarArea>
    </Container>
  );
};

export default SideBar;
