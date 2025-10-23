import React from "react";


export default function Card(props) {
  console.log(props.nameCompany);

  return (
    <>
      <div className="parent">
        <div className="child">
          <h2 className="company-name">{props.nameCompany}</h2>
          <p className="role">{props.position}</p>
          <p className="details">
            💰 {props.salary} <br /> 📍 {props.location}
          </p>
        </div>
      </div>
    </>
  );
}
