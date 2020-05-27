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
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
        </Layout>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
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
