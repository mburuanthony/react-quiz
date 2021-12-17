import { useState } from "react";
import BtnA from "./Buttons/BtnA";
import BtnB from "./Buttons/BtnB";
import BtnC from "./Buttons/BtnC";
import ComponentA from "./Components/ComponentA";

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="app">
      <p>Buttons</p>
      <BtnA setState={setState} />
      <BtnB setState={setState} />
      <BtnC setState={setState} />
      <h1>state : {state}</h1>

      <p>Components</p>
      <ComponentA />
    </div>
  );
}

export default App;
