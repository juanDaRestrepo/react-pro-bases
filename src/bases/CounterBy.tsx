import { useState } from "react";

interface Props {
  initialValue? :  number
}

interface CounterState {
  counter : number;
  clicks : number;
}

export const CounterBy = ({initialValue = 10}: Props) => {
  
    const [{counter, clicks}, setCounter] = useState<CounterState>({
      counter: initialValue,
      clicks : 0
    });

    const handleClick = (incrementBy : number) => {
        setCounter(({counter, clicks}) => ({
          counter : counter + incrementBy,
          clicks : clicks + 1
        }))
    }

    return (
    <>
      <h1>Counter: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
