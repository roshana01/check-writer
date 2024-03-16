import React from "react";
import { useCounter } from "../context/ContextApi";
// Step 4: Use the context in any component

export default function CounterDisplay() {
  const { count } = useCounter();
  return (
    <div className="text-center text-2xl text-emerald-300">
      Count: <span className="font-bold ">{count}</span>
    </div>
  );
}
