import React, { useContext, useEffect } from "react";
// import PropTypes from "prop-types";
import {
  Container, Display, Center, LeftBar, RightBar,
} from "./styles";
import AuthContext from "../../store/index";

const Dashboard = (props) => {
  const [globalState, dispatch] = useContext(AuthContext);
  useEffect(() => {
    // if token exists on localStorage, call server
    if (localStorage.getItem("token") !== null) {
      axios("/api/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => {
        dispatch({ type: "auth", payload: res.data });
      });
    }
  }, []);

  return (
    <Container>
      <Display>
        <LeftBar />
        <Center />
        <RightBar />
      </Display>
    </Container>
  );
};
// globalState working
export default Dashboard;
