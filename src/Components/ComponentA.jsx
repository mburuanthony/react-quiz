import { useState, useContext } from "react";
import { componentContext } from "./context";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

function ComponentA() {
  const context = useContext(componentContext);
  const [count, setCount] = useState(context);

  return (
    <div>
      <componentContext.Provider value={[count, setCount]}>
        <ComponentB />
        <ComponentC />
      </componentContext.Provider>
    </div>
  );
}

export default ComponentA;
