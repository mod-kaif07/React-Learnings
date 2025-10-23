import React from "react";
import OneSection from "./Component/oneSection/OneSection";
import TwoSection from "./Component/twoSection/TwoSection";
import Profile from "./Component/Profile/Profile";

const App = () => {
  const cardData = [
    {
      msg: "This is a Frontend Developer and React Developer",
      img: "https://i.pinimg.com/736x/b7/07/b7/b707b76414f7bb5114124dfd8fdb71c8.jpg",
      tag: "Satisfied",
    },
    {
      msg: "This is Frontend & Backend Developer",
      img: "https://i.pinimg.com/736x/1a/04/25/1a04252be1ab04dcc7c6982576bc7272.jpg",
      tag: "Undercover",
    },
    {
      msg: "This is Java Developer with Spring Boot",
      img: "https://i.pinimg.com/736x/14/ff/c6/14ffc62ea5a5a9ff93c99690dfec33c1.jpg",
      tag: "Trending",
    },
    {
      msg: "This is Full Stack Developer",
      img: "https://i.pinimg.com/736x/1a/04/25/1a04252be1ab04dcc7c6982576bc7272.jpg",
      tag: "Top Rated",
    },
    {
      msg: "This is Backend Developer with Node.js",
      img: "https://i.pinimg.com/736x/14/ff/c6/14ffc62ea5a5a9ff93c99690dfec33c1.jpg",
      tag: "Rising",
    },
  ];

  const cardData2 = [
    {
      msg: "This is a UI/UX Designer with Figma expertise",
      img: "https://i.pinimg.com/736x/17/55/eb/1755eb6b6eea88f9a37579ba6caeb4e2.jpg",
      tag: "Creative",
    },
    {
      msg: "This is a Mobile App Developer for Android & iOS",
      img: "https://i.pinimg.com/736x/a7/40/25/a7402571d5780885c473dab872f99e59.jpg",
      tag: "Innovative",
    },
    {
      msg: "This is a Data Scientist with Python & ML skills",
      img: "https://i.pinimg.com/736x/71/e6/57/71e65709c36dd9d48aac38d08c723d35.jpg",
      tag: "Analytical",
    },
    {
      msg: "This is a Cloud Engineer specializing in AWS",
      img: "https://i.pinimg.com/736x/b3/4c/dc/b34cdc885d36ba65f1465f3ef48b7204.jpg",
      tag: "Reliable",
    },
    {
      msg: "This is a DevOps Engineer with CI/CD expertise",
      img: "https://i.pinimg.com/736x/7f/73/93/7f7393126e4bda206397313342bddbac.jpg",
      tag: "Efficient",
    },
  ];

  const leftdata_boys = [
  {
    tittle: "Our Boys Development Group",
    Description:
      "They are all dedicated, passionate, and always exploring new technologies to build creative solutions.",
  },
];

const leftdata_girls = [
  {
    tittle: "Our Girls Development Group",
    Description:
     "They are talented, confident, and bring innovation with elegance to every project they work on. With their creative vision and attention to detail, they transform ideas into impactful, ",
  },
];

const leftdata_team = [
  {
    tittle: "Our United Development Team",
    Description:
      "They are innovative, hardworking, and always ready to take on challenges together. Known for their unity and creative problem-solving, our team believes in growing through collaboration, consistency, and shared passion for technology.",
  },
];


const teamData = [
  {
    msg: "This is our Team Warriors — strong in code, stronger in spirit.",
    img: "https://i.pinimg.com/736x/d7/90/f6/d790f6225093efe758def06a8b96db3a.jpg",
    tag: "Warriors",
  },
  {
    msg: "Meet the Creative Minds — blending art and logic for innovation.",
    img: "https://i.pinimg.com/736x/5a/bb/ef/5abbef73526a6f7a201fee8b31c9d627.jpg",
    tag: "Creative",
  },
  {
    msg: "Our Problem Solvers — tackling every challenge with teamwork.",
    img: "https://i.pinimg.com/1200x/3c/e7/f9/3ce7f9b497f761cbb3259f0a2167273c.jpg",
    tag: "Collaborative",
  },
  {
    msg: "The Innovators — constantly pushing boundaries and building future-ready solutions.",
    img: "https://i.pinimg.com/1200x/06/ec/74/06ec740be870f0224126096817b85638.jpg",
    tag: "Innovators",
  },
  {
    msg: "Team Visionaries — combining skills, ideas, and passion to make impact together.",
    img: "",
    tag: "Visionaries",
  },
];



  return (
    <div className="bg-blue-300 min-h-screen w-screen h-400">
      <Profile />
        <OneSection cardData={cardData} group={leftdata_boys} />
      <OneSection cardData={cardData2} group={leftdata_girls} />
      <OneSection cardData={teamData} group={leftdata_team} />
    </div>
  );
};

export default App;
