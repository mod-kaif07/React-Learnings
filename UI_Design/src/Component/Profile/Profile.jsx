import React from "react";

const Profile = () => {
  return (
    <div className="flex pl-52 pb-12  ">
      <img
        className="rounded-full h-30 w-30 flex"
        src="https://i.pinimg.com/736x/c5/fd/a6/c5fda62cff950130d049e90973b1a6c5.jpg"
        alt=""
      />
      <div className="m-8 pl-4">
        <h2 className="font-serif text-3xl">Mohammad Kaif</h2>
        <p className="font-bold tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit.@kaif-07official </p>
      </div>
    </div>
  );
};

export default Profile;
