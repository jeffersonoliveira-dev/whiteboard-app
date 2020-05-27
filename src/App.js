import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home/index";
import Login from "./routes/Login/index";
import SignUp from "./routes/SignUp/index";
import GlobalStyles from "./components/GlobalStyles";
import Layout from "./components/Layout/index";
import AuthProvider from "./store/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/signup">
          <Layout>
            <SignUp />
          </Layout>
        </Route>
        <Route path="/login">
          <Layout>
            <Login />
          </Layout>
        </Route>
        <Route path="/dashboard">
          <PrivateRoute />
        </Route>
        <GlobalStyles />
      </Router>
    </AuthProvider>
  );
}

export default App;
