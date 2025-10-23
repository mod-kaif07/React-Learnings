import React from "react";
import Card from "./component/Card";
import "./App.css";
function App() {
  return (
    <div className="parent">
      <div className="navbar">
        <a href="#" className="portfolio-link">
          React Portfolio Page
        </a>
      </div>
      <Card
        img="https://i.pinimg.com/736x/ad/78/5a/ad785a9fb1587a496092b3d2f4e912b8.jpg"
        name="Amazon"
        role="Full Stack"
        stipend={2000}
        location="Delhi"
      />
      <Card
        img="https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg"
        name="Google"
        role="Frontend Developer"
        stipend={2500}
        location="Bangalore"
      />
      <Card
        img="https://i.pinimg.com/1200x/af/93/d0/af93d0e61c2f5272b56b7a616295786b.jpg"
        name="Microsoft"
        role="Backend Developer"
        stipend={2300}
        location="Hyderabad"
      />
      <Card
        img="https://i.pinimg.com/1200x/0c/cc/0a/0ccc0ad61d6a1b18f7d53e636ba0979c.jpg"
        name="Netflix"
        role="MERN Stack"
        stipend={2800}
        location="Mumbai"
      />
      <Card
        img="https://i.pinimg.com/736x/ed/c6/74/edc674b7a3633daecb0ad6fed31ad269.jpg"
        name="Flipkart"
        role="React Developer"
        stipend={2200}
        location="Delhi"
      />
      <Card
        img="https://i.pinimg.com/1200x/df/00/b1/df00b1d8590dba5b570420e96809b5c6.jpg"
        name="Tesla"
        role="Software Intern"
        stipend={3000}
        location="Pune"
      />
      <Card
        img="https://i.pinimg.com/736x/b7/06/fa/b706fa17832e8854ee125404a655f0df.jpg"
        name="Meta"
        role="Full Stack"
        stipend={2700}
        location="Gurugram"
      />
      <Card
        img="https://i.pinimg.com/736x/fb/66/c9/fb66c922b0ad029e61fdab87badd8e27.jpg"
        name="Apple"
        role="iOS Developer"
        stipend={3500}
        location="Bangalore"
      />
      <Card
        img="https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg"
        name="Adobe"
        role="Frontend Intern"
        stipend={2100}
        location="Noida"
      />
    </div>
  );
}

export default App;
