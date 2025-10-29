import React, { useState } from "react";

const Card = (props) => {
  // console.log(props)
  let val = 1;
  return (
    <div>
      <div className="overflow-hidden pt-4 transform transition-all duration-300 hover:scale-110">
        <a href={props.elem.url} target="_blank">
          <div className="rounded-3xl h-40 w-44 object-fill">
            <img
              className="rounded-3xl h-full w-full object-cover "
              src={props.elem.download_url}
              alt={props.elem.author}
            />
          </div>
        </a>
        <h3 className="  pt-4 text-white ">{props.elem.author}</h3>
      </div>
    </div>
  );
};

export default Card;
