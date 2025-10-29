import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(1000);
  useEffect(() => {
    console.log("useEffect is Working.......");
  }, [num2]);
  const numchnage = () => {
    setnum(num + 1);
  };
  return (
    <div>
      <h1>The value of num {num}</h1>
      <h1>The value of num {num2}</h1>
      <button
        onClick={numchnage}
        onMouseLeave={() => {
          setnum2(num2 - 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default App;
