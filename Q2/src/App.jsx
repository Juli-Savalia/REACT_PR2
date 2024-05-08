import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <Counter plus={Increment} minus={Decrement} reset={Reset} count={count} />
    </>
  );
}

export default App;
