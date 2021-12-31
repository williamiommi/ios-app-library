import { useEffect, useState } from "react";

const getTime = () => {
  var date = new Date();
  const format = (n) => (n < 10 ? `0${n}` : n);
  var h = format(date.getHours()); // 0 - 23
  var m = format(date.getMinutes());
  return `${h}:${m}`;
};

const Clock = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(getTime());
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative flex items-center w-[30%] justify-center pl-[20px] text-white text-sm`}
    >
      {time}
    </div>
  );
};

export default Clock;
