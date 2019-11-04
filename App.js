import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return <Armstrong />;
};
const Armstrong = () => {
  let a = 0;
  let b = 1;
  let c = 1;
  let d;

  const [input, setinput] = useState("0");
  const [lst, setlst] = useState([a, b]);

  const changeInput = event => {
    setinput(Number(event.target.value));
  };

  const handleSubmit = () => {
    for (d = 0; d <= input; d++) {
      console.log(c);
      c = a + b;
      setlst([...lst, c]);
      console.log(lst);
      a = b;
      b = c;
    }
  };

  return (
    <div>
      <input type="text" onChange={changeInput}></input>
      <button onClick={handleSubmit}>submit</button>

      <ul>
        {lst.map((i, index) => {
          return <li key={index}>{i}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
