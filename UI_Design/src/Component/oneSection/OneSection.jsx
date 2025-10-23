import React from "react";
import Navbar from "./Navbar";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const OneSection = (props) => {
  return (
    <>
      <div className="mx-48 bg-white rounded-2xl py-8 px-4 w-200 h-100 mb-20 object-cover">
        <Navbar />
        <div className="flex">
          {props.group &&
            props.group.map(function (elem, idex) {
              return (
                <LeftContent
                  key={idex}
                  tittle={elem.tittle}
                  Description={elem.Description}
                />
              );
            })}
          <RightContent user={props.cardData} />
        </div>
      </div>
    </>
  );
};

export default OneSection;
