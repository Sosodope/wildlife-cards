import React, { Component } from "react";
import Card from "./components/Card";
import "./style.css";
import { wildlifes } from "./wildlifes";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Endangered Species list</h1>
        <div className="wildlife">
          {wildlifes.map(wildlife => {
            return (
              <Card
                key={wildlife.id}
                img={wildlife.img}
                name={wildlife.name}
                scientificName={wildlife.scientificName}
                wildPopulation={wildlife.wildPopulation}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
