import React, { Component } from "react";
import Card from "./Card";

const CardList = ({ wildlifes }) => {
  return (
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
  );
};

export default CardList;
