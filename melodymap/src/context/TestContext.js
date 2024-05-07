import React, { createContext, useContext, useState } from "react";

const TestContext = createContext();

export const useTest = () => useContext(TestContext);

export const TestProvider = ({ children }) => {
  const [selections, setSelections] = useState("");

  const addSelection = (selection) => {
    setSelections((prev) => prev + selection);
  };

  return (
    <TestContext.Provider value={{ selections, addSelection }}>
      {children}
    </TestContext.Provider>
  );
};
