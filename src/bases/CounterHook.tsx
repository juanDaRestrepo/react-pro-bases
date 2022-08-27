import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  
    const {counter,counterElement,handleClick} = useCounter({
      maxCount     : 10,
      initialState : 1
    }); 
    
    return (
    <>
      <h1>Counter Hook: </h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
