import { useContext } from "react";
import { componentContext } from "./context";

function ComponentE() {
  const [count] = useContext(componentContext);

  return <h3>count : {count}</h3>;
}

export default ComponentE;
