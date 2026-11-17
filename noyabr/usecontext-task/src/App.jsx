import { useState } from "react";
import { CountContext } from "./context/CountContext";
import { ThemeContext } from "./context/ThemeContext";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";
import Theme from "./components/Theme";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>
          <h1>Counter App</h1>

          <Counter />
          <Buttons />

          <hr />

          <Theme />
        </div>
      </ThemeContext.Provider>
    </CountContext.Provider>
  );
}

export default App;
