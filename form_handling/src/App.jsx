import React from "react";

const App = () => {
  function FormSumbit(elem) {
    elem.preventDefault();
    console.log("Form is Sumbit ");
  }
  return (
    <div>
      <h1 className="formheading">Form Handling </h1>
      <p className="paragraph">
        By default, when a form is submitted in a webpage, the page
        automatically reloads. This happens because the browser’s default
        behavior is to send the form data to the server and refresh the page. To
        prevent this automatic reload, we use the method: e.preventDefault();
        Here, e refers to the event object passed to the form submission
        handler. preventDefault() stops the default action (i.e., the page
        reload). This allows us to handle the form data manually — for example,
        displaying it in the console or on the webpage without reloading.
      </p>
      <form
        className="form"
        onSubmit={(elem) => {
          FormSumbit(elem);
        }}
        action=""
      >
        <input type="text" placeholder="Enter Name" />
        <button> Summit </button>
      </form>
    </div>
  );
};

export default App;
