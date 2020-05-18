import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Login from "./Login/index";
import Dashboard from "./Dashboard/index";

const PrivateRoute = ({ ...options }) => {
  if (localStorage.getItem("token") !== null) {
    return <Route {...options} component={Dashboard} />;
  }
  return <Route {...options} component={Login} />;
};

export default PrivateRoute;
