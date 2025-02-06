import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  console.log("test");

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={handleClick}>+ 1</button>
    </div>
  );
}
