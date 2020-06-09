import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container, Display, Center, LeftBar, RightBar,
} from "./styles";
import AuthContext from "../../store/index";
import SideBar from "../../components/Sidebar/index";
import History from "../../components/History/index";
import CenterPanel from '../../components/CenterPanel/index';

const Dashboard = (props) => {
  const [globalState, dispatch] = useContext(AuthContext);
  useEffect(() => {
    // if token exists on localStorage, call server
    if (localStorage.getItem("token") !== null) {
      dispatch({
        type: "authenticate",
        payload: localStorage.getItem("token"),
      });
    } else {
      props.history.push("/login");
    }
  }, []);

  return (
    <Container>
      <Display>
        <LeftBar>
          <SideBar />
        </LeftBar>
        <Center>
          <CenterPanel />
        </Center>
        <RightBar>
        <History />
        </RightBar>
      </Display>
    </Container>
  );
};
// globalState working
Dashboard.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Dashboard;
