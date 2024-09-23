import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="photo">
        <img src={props.imgUrl} />
      </div>
      <div className="text">
        <div className="upper-location">
          <img src="./src/assets/Location.png" />
          <p>{props.location}</p>
          <a href={props.mapsUrl}>View on Google Maps</a>
        </div>
        <div className="lower-location">
          <h1>{props.title}</h1>
          <span>{props.startDate} -</span>
          <span>{props.endDate}</span>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
