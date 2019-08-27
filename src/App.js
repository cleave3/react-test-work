import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import BoxPage from "./components/layout/BoxPage";
import ListPage from "./components/layout/ListPage";
import FormPage from "./components/layout/FormPage";
import TwoBox from "./components/layout/TwoBox";

class App extends Component {
  state = {
    time: []
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    const { time } = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar time={time} />
          <Route exact path="/" component={Home} />
          <Route path="/box" component={BoxPage} />
          <Route path="/list" component={ListPage} />
          <Route path="/form" component={FormPage} />
          <Route path="/twobox" component={TwoBox} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
