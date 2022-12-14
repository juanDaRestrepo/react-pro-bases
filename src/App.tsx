import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";


function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter />
      <CounterBy />
      <CounterEffect />
      <CounterEffect />
      <CounterHook />
    </>
  );
}

export default App;
