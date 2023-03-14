import { useEffect, useState } from "react";

const Timer: React.FunctionComponent<{
  max: number | number[];
}> = ({ max }) => {
  const isRange = Array.isArray(max);
  const maxValue = isRange ? max[1] : max;

  const [counter, setCounter] = useState(20);

  useEffect(() => {
    if (counter < maxValue) {
      setTimeout(() => setCounter(counter + 1), 40);
    }
  }, [counter]);

  return (
    <>
      {isRange && <span> {max[0]} - </span>}
      <span>{counter}</span>
    </>
  );
};

export default Timer;
