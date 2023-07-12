import logo from "./logo.svg";
import "./App.css";
import React, { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 9999999; i++) {} //생각하는 시간
  return number + 10000;
};

const easeCalculate = (number) => {
  console.log("짱 쉬운 계산");
  return number + 1;
};

function App() {
  const [hardNumber, setHarderNumber] = useState(1);
  const [easeNumber, setEaseNumber] = useState(1);
  // const hardSum = hardCalculate(hardNumber); // app이라는 함수는 호출 될 때마다 내부 값이 초기화 된다(hardSum 초기화)

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easeSum = easeCalculate(easeNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHarderNumber(parseInt(e.target.value))}
      />
      <span>+10000 = {hardSum}</span>

      <h3>짱 쉬운 계산기</h3>
      <input
        type="number"
        value={easeNumber}
        onChange={(e) => setEaseNumber(parseInt(e.target.value))}
      />
      <span>+1 = {easeSum}</span>
    </div>
  );
}

export default App;
