import React from "react";

const Title = ({ title }) => {
  console.log(`rendering title...`);
  return <div className="text-3xl font-bold text-center mt-4">{title}</div>;
};

export default React.memo(Title);
