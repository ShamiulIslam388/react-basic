import React from "react";

const Button = ({ title, handleCount }) => {
  console.log(`rendering button ${title}`);
  return (
    <button
      onClick={handleCount}
      className="bg-blue-500 p-2 rounded mt-1 text-white font-semibold"
    >
      {title}
    </button>
  );
};

export default React.memo(Button);
