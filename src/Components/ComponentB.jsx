import { useContext } from "react";
import { componentContext } from "./context";

function ComponentB() {
  const [, setCount] = useContext(componentContext);

  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      add count
    </button>
  );
}

export default ComponentB;
