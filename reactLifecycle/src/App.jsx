import { useEffect, useState } from "react";
import Unmount from "./Unmount";

function App() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount((prevState) => prevState + 1);
  }
  // mounting Phase
  useEffect(() => {
    console.log("Render when page is load first time. Mounting Phase");
  }, []);
  //updating phase
  useEffect(() => {
    console.log("Render when component state change, updating pHase");
  }, [count]);
  //unmounting Phase
  useEffect(() => {
    return () => {
      console.log(
        "Unmounting phase runs when when we delete or remove the components"
      );
    };
  });
  return (
    <div>
      <button onClick={() => incrementCount()}>Increment Count</button>
      <h2>{count}</h2>
      <Unmount />
    </div>
  );
}

export default App;
