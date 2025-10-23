import React from "react";
import Card from "./Card";

export default function NavBar() {
  const jobs = [
    {
      company: "Google",
      position: "Software Engineer",
      salary: "₹25,00,000",
      location: "Bangalore",
    },
    {
      company: "Microsoft",
      position: "Frontend Developer",
      salary: "₹18,00,000",
      location: "Hyderabad",
    },
    {
      company: "Amazon",
      position: "Backend Developer",
      salary: "₹22,00,000",
      location: "Pune",
    },
    {
      company: "TCS",
      position: "Full Stack Developer",
      salary: "₹9,00,000",
      location: "Mumbai",
    },
    {
      company: "Infosys",
      position: "React Developer",
      salary: "₹8,50,000",
      location: "Chennai",
    },
    {
      company: "Accenture",
      position: "Java Developer",
      salary: "₹10,00,000",
      location: "Gurgaon",
    },
    {
      company: "Meta",
      position: "UI/UX Engineer",
      salary: "₹27,00,000",
      location: "Remote",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {jobs.map((elem, index) => (
        <Card
          key={index}
          nameCompany={elem.company}
          position={elem.position}
          salary={elem.salary}
          location={elem.location}
        />
      ))}
    </div>
  );
}
