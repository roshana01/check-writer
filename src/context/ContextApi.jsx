import React, { createContext, useState, useContext } from "react";

// Step 1: Create a Context
const CounterContext = createContext();

// Step 2: Create a Provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 3: Create a custom hook to consume the context
const useCounter = () => {
  return useContext(CounterContext);
};

export { CounterProvider, useCounter };
