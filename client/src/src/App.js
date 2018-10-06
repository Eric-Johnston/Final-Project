import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Register from "./pages/Register";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Register} />
      </Switch>
    </div>
  </Router>
);

export default App;
