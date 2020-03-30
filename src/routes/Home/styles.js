import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/drawing.svg";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 80%;
`;

export const LogoContainer = styled.div`
  height: 70%;
  width: 100%;
  position: relative;
  left: 0;
  right: 80%;
  display: flex;
`;

export const StyledLogo = styled(Logo)`
  position: relative;
  width: 60%;
  heigth: 60%;
`;

export const AppTitle = styled.div`
  position: relative;
  top: 30%;
  width: 30%;
  margin: 0 auto;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 20%;
  width: 100%;
`;

export const ButtonGhost = styled(Link)`
  position: relative;
  bottom: 20px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #7289da;
  background-color: transparent;
  text-decoration: none;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: 0 auto;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const SignupText = styled.div`
  text-align: center;
  position: relative;
  top: 55px;
  text-decoration: none;
`;

export const SignUp = styled(Link)`
  text-decoration: none;
  color: #7289da;
`;
