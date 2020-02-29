import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/Login";
import { GlobalStyles } from "./components/GlobalStyles";
import Layout from "./components/Layout";

function App() {
  return (
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

      <GlobalStyles />
    </Router>
  );
}

export default App;
