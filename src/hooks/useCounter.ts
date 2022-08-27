import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Props } from "../interfaces/props";

export const useCounter = ({ maxCount = 15, initialState = 1 }: Props) => {
  const [counter, setCounter] = useState(initialState);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    if (counter < maxCount) {
      setCounter((prev) => prev + 1);
    }
  };

  useLayoutEffect(() => {
    if (!counterElement.current) return;
    tl.current
      .to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause()
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    counterElement,
    handleClick,
  };
};
