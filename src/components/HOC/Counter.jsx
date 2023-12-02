import withCount from "./withCount";

const Counter = ({ count, handleCount }) => {
  return (
    <button
      onClick={handleCount}
      className="px-4 py-3 bg-blue-500 text-white font-bold rounded m-4"
    >
      You Clicked {count} times
    </button>
  );
};

export default withCount(Counter);

// Higher-Order Components (HOCs) are a pattern in React where a function takes a component and returns a new component with additional functionality.
// In simpler terms, an HOC is a function that takes a component and returns an enhanced version of that component.
// state and methods from HOC send as props to common component
