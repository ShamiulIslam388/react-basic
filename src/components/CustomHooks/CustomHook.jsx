import useFetch from "./useFetch";
import useIsMobile from "./useIsMobile";

function CustomHook() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { isMobile } = useIsMobile();

  // console.log(data, loading, error);
  return <div>{isMobile ? "Mobile Screen" : "Large Screen"}</div>;
}

export default CustomHook;

// React custom hooks are a powerful way to extract and reuse stateful logic from components
