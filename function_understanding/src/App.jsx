import React from "react";

const App = () => {
  function trackchnage(val) {
    console.log(val);
  }

  return (
    <>
      <label htmlFor="name">Your Name:</label>
      <input
        id="name"
        className="ii"
        type="text"
        onChange={(elem) => {
          let val = elem.target.value;
          trackchnage(val);
        }}
        placeholder="Write something..."
      />
    </>
  );
};

export default App;
