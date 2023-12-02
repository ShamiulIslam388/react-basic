import React from "react";

const Input = ({ type, placeholder, ...props }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      className="outline-none border rounded p-2"
    />
  );
};

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
