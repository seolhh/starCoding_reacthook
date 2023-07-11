import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링 될 때마다 매번 실행 됨
  useEffect(() => {
    console.log("렌더링");
  });

  // 마운트 될 때, name이 변경 될 때만 실행
  useEffect(() => {
    console.log("name변화");
  }, [name]);

  // count가 변화 할 때만 렌더링 되도록 설정
  // 최초 mount될 때, [count]가 변경 될 때만 실행
  useEffect(() => {
    console.log("count변화");
  }, [count]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count} </span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name :{name}</span>
    </div>
  );
}

export default App;
