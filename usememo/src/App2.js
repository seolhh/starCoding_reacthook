import React, { useEffect,useState } from "react";


function App2() {
  const [number, setNumber] = useState(0) //1. input의 value로 쓰이는 값
  const [isKorea, setIsKorea] = useState(true)

  const location = isKorea ? '한국' : '외국';

  return (
    <div>
        <h2>하루에 몇끼 먹어요?</h2>
        <input 
        type="number"
        value={number}   //1-a. 여기!
        onChange = {(e) => setNumber(e.target.value)} />
        <hr />
        <h2>어느 나라에 있어요?</h2>
        <p>나라 : {location}</p>
        <button onClick ={() => setIsKorea(!isKorea)}> 비행기 타자!</button>
    </div>
  );
};

export default App2;
