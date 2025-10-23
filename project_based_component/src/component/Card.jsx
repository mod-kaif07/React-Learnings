import React from "react";

function Card(probes) {
  return (
    <div className="child">
      <div className="top">
        <img src={probes.img} alt="Company Image " />
        <button> save </button>
      </div>
      <div className="companyNAme">{probes.name}</div>
      <div className="Jobdetails">{probes.role}</div>
      <div className="typejob">
        <p>part-time</p>
        <p>full-time</p>
      </div>
      <div className="stipened">
        <h3>${probes.stipend}</h3>
        <button>Apply Job</button>
      </div>
      <div className="place">
        <h3>{probes.location}</h3>
      </div>
    </div>
  );
}

export default Card;
