import React from "react";

const Card = props => {
  const { id, img, name, scientificName, wildPopulation } = props;
  return (
    <div className="tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={img} alt={name} className="card-image" />
      <div>
        <h2>{name} </h2>
        <p>{scientificName} </p>
        <p>
          <span className="pop-icon">
            <i className="fas fa-dove" />
          </span>
          {wildPopulation}
        </p>
      </div>
    </div>
  );
};

export default Card;
