import { useState } from "react";
import "./App.css";
import React from "react";
import UseContext from "./Components/UseContext";
import UseState from "./Components/UseState";
// import UseContext from "./components/UseContext";

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext />
      <UseState/>
    </ToggleTheme.Provider>
  );
}

export default App;
