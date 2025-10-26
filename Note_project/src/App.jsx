import React, { useState } from "react";

const App = () => {
  const [tittle, settittle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  function Formsummit(e) {
    e.preventDefault();
    console.log("Form submitted");
    settask([...task, { tittle, details }]);

    settittle("");
    setdetails("");
  }

  const deletenote = (index) => {
    let taskcopy = [...task];
    taskcopy.splice(index, 1);
    settask(taskcopy);
  };

  return (
    <div className="bg-black min-h-screen w-screen flex flex-col">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center py-10">
        <h1 className="text-white text-5xl font-serif mb-6 border-b-2 border-blue-500 pb-2">
          My Notes
        </h1>

        {/* Form Section */}
        <form
          className="flex flex-col items-center w-full max-w-md gap-4"
          onSubmit={Formsummit}
        >
          <input
            className="text-white bg-transparent border-2 border-gray-500 focus:border-blue-500 outline-none rounded-3xl px-4 py-2 w-full"
            type="text"
            placeholder="Enter title"
            value={tittle}
            onChange={(e) => {
              settittle(e.target.value);
            }}
          />

          <textarea
            className="text-white bg-transparent border-2 border-gray-500 focus:border-blue-500 outline-none rounded-3xl px-4 py-3 w-full h-36 resize-none"
            placeholder="Enter details"
            value={details}
            onChange={(e) => {
              setdetails(e.target.value);
            }}
          ></textarea>

          <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium px-6 py-2 rounded-3xl mt-2 transition-all duration-200">
            Add Note
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-6 justify-center px-8 pb-8">
        {task.map((note, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black border-2 border-gray-500 rounded-3xl px-6 py-4 w-[20rem] hover:border-blue-500 transition-all duration-200"
          >
            <h4 className="text-xl font-semibold mb-2 text-white">
              {note.tittle}
            </h4>
            <p className="text-gray-300">{note.details}</p>

            <button
              onClick={() => deletenote(index)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-2xl transition-all duration-200"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
