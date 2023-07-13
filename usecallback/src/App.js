import logo from './logo.svg';
import './App.css';
import { useEffect, useCallback,useState } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [toggle, setToggle] = useState(true)


  //3. someFunction은 useCallback함수를 갖는데, 
  const someFunction = useCallback(() => {
    console.log (`someFunc : number : ${number}`)  
  return;
  }, [number]) //4. number 가 바뀌면 someFunction의 값을 업데이트 해줌


  useEffect(() => {
    console.log('someFunction이 변경되었습니다.')
  }, [someFunction])  //5. someFunction의 값이 업데이트 되었으니까 useEffect가 작동

  return (
    <div>
      <input type="number"
      value = {number}
      onChange={(e) => setNumber(e.target.value)} //1. number을 바꿔주고
      />
      <br />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      {/* 2. 버튼을 누르면 someFunction이 실행된다. */}
      <button onClick={someFunction}> Call someFunc</button>  
    
    </div>
  );
}

export default App;

