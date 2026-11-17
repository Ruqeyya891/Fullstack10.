import { useContext } from "react";
import { CountContext } from "../context/CountContext";

function Counter() {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default Counter;