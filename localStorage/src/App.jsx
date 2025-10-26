import React from "react";

const App = () => {
  // localStorage.setItem("age", 18);
  // console.log(localStorage.getItem("age"));
  // const arr = [
  //   {
  //     username: "kaif",
  //     age: 21,
  //     add: "Munger",
  //   },
  //   {
  //     username: "shanwaz",
  //     age: 21,
  //     add: "Madhubani",
  //   },
  //   {
  //     username: "gopal",
  //     age: 21,
  //     add: "Delhi",
  //   },
  // ];
  // localStorage.setItem("users", JSON.stringify(arr));
  console.log(JSON.parse(localStorage.getItem("users")));

  // const client = {
  //   name: "dell",
  //   model: "MXCP43tx",
  // };

  // localStorage.setItem("client", JSON.stringify(client));
  console.log(JSON.parse(localStorage.getItem("client")));
  return (
    <div>
      <h1 className="he">Local Storage </h1>
      <p>
        setItem() → store data <br />
         getItem()→ get data <br />
         JSON.stringify() → object ➜ string  <br />
         JSON.parse() → string ➜ object  <br />
         Data stays even after refresh  <br />

         ////////////////////////////////  <br/>

         localStorage can only store strings. <br />
        Objects or arrays must be converted to strings using JSON.stringify().  <br />
        To read them back, convert again to normal JS objects using JSON.parse().


      </p>
    </div>
  );
};

export default App;
