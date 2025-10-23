import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState([20, 30, 40, 50]);

  function change_data() {
    const updatedArr = user.map((num) => num + 10);
    setUser(updatedArr);
  }

  return (
    <div className="parent">
      <div className="display">
        Array values:&nbsp;
        {user.map((num, index) => (
          <span key={index}>{num} </span>
        ))}
      </div>
      <div className="btn">
        <button onClick={change_data}>Increase</button>
      </div>
    </div>
  );
};

export default App;
