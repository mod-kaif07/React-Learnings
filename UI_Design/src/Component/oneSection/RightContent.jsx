import React from "react";
import Cards from "./Cards";

const RightContent = (props) => {
  let position = 1; // fixed typo: postion -> position

  return (
    <div id="right" className="flex justify-between overflow-x-auto flex-nowrap gap-2">
      {props.user &&
        props.user.map((elem, index) => (
          <Cards
            key={index}
            img={elem.img}
            msg={elem.msg}
            tag={elem.tag}
            position={index + 1}
          />
        ))}
    </div>
  );
};

export default RightContent;
