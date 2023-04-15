import React from "react";
import "./PropertyCard.css";

const PropertyCard = (props) => {
  return (
    <div className="PropertyCard">
      <img src={props.img} alt="!!!!" />
      <div className="card-content">
        <div className="title-value">
          <span>{props.title}</span>
          <span className="value">$ {props.value}</span>
        </div>
        <div className="location">
          <span>{props.location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
