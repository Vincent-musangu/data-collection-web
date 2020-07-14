import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./components/Home/home.component.jsx";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import { Switch, Route } from "react-router-dom";
import ChatBox from "./components/chatbox/chatbox.component.jsx";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/services" component={ChatBox} />
        </Switch>
      </div>
    );
  }
}

export default App;
