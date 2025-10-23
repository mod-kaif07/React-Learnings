import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const LeftContent = (props) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-3xl font-bold mb-4 pl-4">
         {props.tittle}
        </h1>
        <p className="leading-relaxed pl-4">
        {props.Description}
        </p>
      </div>

      {/* Logo stays pinned at the bottom */}
      <div className="text-start mt-20 pl-4">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-2xl" />
      </div>
    </div>
  );
};

export default LeftContent;
