import "./App.css";
import Button from "./Button";
import Counter from "./Counter";

function App() {
  function handleClick1() {
    console.log("boton 1");
  }

  const handleClick2 = () => {
    console.log("boton 2");
  };

  return (
    <div>
      <Counter />
      {/* <h1>Mi primera app de React</h1>
      <Button handleClick={handleClick1} label="Boton 1" />
      <Button handleClick={handleClick2} label="Boton 2" /> */}
    </div>
  );
}

export default App;
