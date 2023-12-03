import React, { useState, useMemo, useCallback } from "react";
import Title from "./Title";
import Counter from "./Counter";
import Button from "./Button";

const Optimize = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countByOne = useCallback(() => {
    setCount1((previousCount) => previousCount + 1);
  }, []);

  const countByFive = useCallback(() => {
    setCount2((previousCount) => previousCount + 5);
  }, []);

  const oddOrEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Title
        title={
          "React js optimization with React.memo, useCallback() and useMemo()"
        }
      />
      <Counter count={count1} title="counter 1" />
      <Button title="count by 1" handleCount={countByOne} />
      <div className="my-2 font-semibold"> {oddOrEven ? "Even" : "Odd"}</div>
      <Counter count={count2} title="counter 5" />
      <Button title="count by 5" handleCount={countByFive} />
    </div>
  );
};

export default Optimize;
