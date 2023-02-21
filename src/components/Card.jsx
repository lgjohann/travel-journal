import React from "react";
import { TbMapPin } from "react-icons/tb";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imageUrl} className="card--img" />
        <div className="card--infos">
          <div className="location">
            <p className="country">
              <TbMapPin />
              {props.location}
            </p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="card--title">{props.title}</h1>
          <p className="duration">
              {props.startDate} - {props.endDate}
            </p>
          <div className="card--description">

            <p className="description">{props.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
