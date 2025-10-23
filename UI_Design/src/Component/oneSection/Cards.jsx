import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
  return (
    <div className="h-72 w-40 rounded-3xl bg-transparent shrink-0 object-contain">
      <div className="relative">
        <img
          src={props.img}
          className="w-full h-60 object-cover rounded-3xl"
          alt="img"
        />

        <div className="absolute inset-0 flex items-end text-white text-xs px-3 bg-black/30 rounded-3xl pb-12">
          {props.msg}
        </div>

        <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm font-semibold bg-green-400 px-3 h-6 rounded-full">
          <span>{props.tag}</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-white text-xs"
          />
        </div>

        <div className="absolute top-1 left-1 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {props.position}
        </div>
      </div>
    </div>
  );
};

export default Cards;
