import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1496316778157-e826f5bb47f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f221991eeab09a9b12c98afdce2f1199&auto=format&fit=crop&w=1955&q=80"
        alt=""
        className="card-image"
      />
      <div>
        <h2>Rhino</h2>
        <p>Africa, Asia</p>
      </div>
    </div>
  );
};

export default Card;
