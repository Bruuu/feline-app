import { useEffect, useState } from "react";

const Timer: React.FunctionComponent<{
  max: string;
}> = ({ max }) => {
  const isRange = max.indexOf("-") > -1;
  const maxValue = max.indexOf("-") > -1 ? +max.split("-")[1] : +max;

  const [counter, setCounter] = useState(20);

  useEffect(() => {
    if (counter < maxValue) {
      setTimeout(() => setCounter(counter + 1), 40);
    }
  }, [counter]);

  return (
    <>
      {isRange && <span> {max.split("-")[0]} - </span>}
      <span>{counter}</span>
    </>
  );
};

export default Timer;
