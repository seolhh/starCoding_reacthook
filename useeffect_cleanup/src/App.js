import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Timer from "./component/Timer";

function App() {
  const [showTimer, setShowtimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowtimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
