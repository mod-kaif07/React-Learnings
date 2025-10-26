import React, { useState } from "react";

const App = () => {

  
  const [tittle, settittle] = useState("");


  function FormSumbit(elem) {
    elem.preventDefault();
    console.log("Form is Sumbit ");
    console.log("Form is Sumbit " +tittle);
    settittle("");
  }
  return (
    <div>
      <h1 className="formheading">Two Way Handling </h1>

      <form
        className="form"
        onSubmit={(elem) => {
          FormSumbit(elem);
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={tittle}
          onChange={(e) => {
            settittle(e.target.value);
          }}
        />
        <button> Summit </button>
      </form>
    </div>
  );
};

export default App;
