import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [superDev, setSuperDev] = useState(false);
  const [count, setCount] = useState(0);

  function handleCounter() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (count > 9) {
      setSuperDev(true);
    }
    console.log("executou");
  }, [count]);

  return (
    <div className="App">
      {superDev ? <h1>Super Dev</h1> : <h1>Micro Dev</h1>}

      <p>❤️{count}</p>
      <button onClick={handleCounter}>Curtidas</button>
    </div>
  );
}

export default App;
