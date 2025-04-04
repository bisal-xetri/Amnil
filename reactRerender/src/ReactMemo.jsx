import { useState } from "react";
import Counts from "./Counts";
function ReactMemo() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="p-4 h-52 flex flex-col justify-end items-center">
        <h1 className="text-4xl ">{count}</h1>
        <button
          className="bg-cyan-500 mt-3 py-1 px-3 cursor-pointer text-white rounded hover:bg-cyan-600"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts />
    </>
  );
}

export default ReactMemo;
