import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("렌더링");

  const increseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref", countRef.current);
  };

  return (
    <div>
      {/* 카운트 올려주는 버튼 */}
      <p>State : {count}</p>
      <p> Ref : {countRef.current}</p>
      <button onClick={increseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default App;
