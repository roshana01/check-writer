import React from "react";
import { useCounter } from "../context/ContextApi";

export default function CounterButtons() {
  const { increment, decrement } = useCounter();
  return (
    <div className="flex  justify-center py-6">
      <button
        className=" flex items-center mr-5 bg-pink-300 border-2 border-purple-600 rounded- 
         full py-2 px-6"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className=" flex items-center ml-5 bg-pink-300 border-2 border-purple-600 rounded- 
         full py-2 px-6"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}
