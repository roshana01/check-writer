import React from "react";
import { CounterProvider } from "../context/ContextApi";
import CounterButtons from "./CounterButtons";
import CounterDisplay from "./CounterDisplay";

export default function App() {
  return (
    <CounterProvider>
      <div>
        <h1 className="text-center text-2xl text-sky-400 py-5 ">Counter App</h1>

        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
}
