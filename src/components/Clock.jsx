import { useEffect, useState } from "react";

const getTime = () => {
  var date = new Date();
  const format = n => n < 10 ? `0${n}` : n;
  var h = format(date.getHours()); // 0 - 23
  var m = format(date.getMinutes());
  return `${h}:${m}`;
}

const Clock = ({ clockSize }) => {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(getTime());
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div className={`${clockSize} relative flex items-center justify-end w-full text-white text-sm`}>{time}</div>;
};

export default Clock;
