import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Login from "./Login/index";
import Dashboard from "./Dashboard/index";

const PrivateRoute = ({ component, ...options }) => {
  if (localStorage.getItem("token") !== null) {
    return <Route {...options} component={Dashboard} />;
  }
  return <Route {...options} component={Login} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;
