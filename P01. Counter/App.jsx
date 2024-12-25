import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const Increment = () => {
    setCount(count + 1);
  };

  const Reset = () => {
    setCount(0);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className="actions">
        <button onClick={Increment}>Increment</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  ); 
}

export default App;
