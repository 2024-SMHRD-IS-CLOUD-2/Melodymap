import React, { createContext, useContext, useState } from "react";

const TestContext = createContext();

export const useTest = () => useContext(TestContext);

export const TestProvider = ({ children }) => {
  const [choice, setChoice] = useState("");

  const addSelection = (selection) => {
    setChoice((prev) => prev + selection);
  };

  return (
    <TestContext.Provider value={{ choice, addSelection }}>
      {children}
    </TestContext.Provider>
  );
};
