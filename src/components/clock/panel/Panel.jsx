import moment from "moment";
import { useEffect, useState } from "react";

export const Panel = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format("HH:mm:ss"));
    }, 1e2);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <p
        className="text-8xl
      text-green-400
      neon
      "
      >
        {time}
      </p>
    </div>
  );
};
