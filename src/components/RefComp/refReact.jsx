import React, { useEffect, useRef } from "react";

const RefReact = () => {
  const inputRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  }
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.borderColor = "red";
  }, []);
  return (
    <form onSubmit={handleSubmit} className="m-4">
      <input
        type="text"
        placeholder="Enter somethig..."
        ref={inputRef}
        className="outline-none border rounded p-2"
      />
      <button className="w-fit ml-2 bg-blue-500 p-2 rounded text-white font-semibold">
        Submit
      </button>
    </form>
  );
};

export default RefReact;
