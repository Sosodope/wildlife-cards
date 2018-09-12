import React, { Component } from "react";
import Card from "./components/Card";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <div className="content">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
