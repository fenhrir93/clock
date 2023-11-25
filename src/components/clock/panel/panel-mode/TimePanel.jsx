import { useState, useEffect } from "react";
import moment from "moment";
export const TimePanel = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format("HH:mm:ss"));
    }, 1e2);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{time}</div>;
};
