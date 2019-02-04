import React, { Component } from "react";
import DogList from "./Containers/DogsList";
import "./App.css";
import Dogs from "./dogs";

class App extends Component {

  state = {
    dogs: Dogs
  }

  render() {


    return < DogList dogs={this.state.dogs} />;
  }
}

export default App;
