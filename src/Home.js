import React, { Component } from "react";
import "./style.css";
import CardList from "./components/CardList";
import { wildlifes } from "./wildlifes";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Endangered Species list</h1>
        <CardList wildlifes={wildlifes} />
      </div>
    );
  }
}

export default Home;
