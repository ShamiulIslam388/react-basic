import React from "react";

// import the components
import CustomHook from "./components/CustomHooks/CustomHook";
import Counter from "./components/HOC/Counter";
import RefReact from "./components/RefComp/refReact";
import Optimize from "./components/Optimization/Optimize";

function App() {
  return (
    <>
      {/* <CustomHook /> */}
      {/* <Counter /> */}
      {/* <RefReact /> */}
      <Optimize />
    </>
  );
}

export default App;
