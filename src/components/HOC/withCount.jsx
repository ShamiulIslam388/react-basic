import React, { useState } from "react";

const withCount = (WrappedComp) => {
  return function NewComponent() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount((prev) => prev + 1);
    };

    return <WrappedComp count={count} handleCount={handleCount} />;
  };
};

export default withCount;
