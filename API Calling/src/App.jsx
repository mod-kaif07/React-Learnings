import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./component/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setindex] = useState(1);
  // async function getData() {
  //   const respose = await fetch("https://api.github.com/users/mod-kaif07");
  //   const data =await respose.json()
  //   console.log( data);
  // }
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=15`
      );
      console.log(response.data); // check if data is coming
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let dataprint = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );
  if (data.length > 0) {
    dataprint = data.map((elem, idex) => {
      return (
        <div key={idex}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="p-20 bg-black h-full min-h-screen w-screen relative">
      <div className=" mb-8 mt-16 flex flex-wrap space-x-15 gap-x-4.5 ">
        {dataprint}
      </div>
      <div className="flex items-center justify-center flex-wrap gap-8 ">
        <button
          onClick={() => {
            if (index > 1) {
              setindex(index - 1);
              setData([]);
            }
          }}
          className={`text-black px-12 py-4 bg-amber-200 text-xs rounded ${
            index < 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-300"
          }`}
        >
          Prev {index - 1}
        </button>
        <div className="inline-flex items-center justify-center text-white border-2 border-transparent hover:border-blue-300 rounded-3xl px-3 py-1 mx-2 text-xs select-none transition-all duration-200 ease-out transform hover:scale-105">
          <p className="leading-none m-0">page {index}</p>
        </div>

        <button
          onClick={() => {
            setData([]);
            setindex(index + 1);
          }}
          className="text-black px-12 py-4 bg-amber-200 text-xs rounded font-semibold"
        >
          Next {index + 1}
        </button>
      </div>
    </div>
  );
};

export default App;
