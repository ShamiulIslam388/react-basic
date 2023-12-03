import React from "react";

const Counter = ({ count, title }) => {
  console.log(`rendering from ${title}`);
  return (
    <div className="mt-2">
      <div className="text-5xl font-bold">{count}</div>
    </div>
  );
};

export default React.memo(Counter);
