import { memo } from "react";
import Signal from "./icons/Signal";
import Wifi from "./icons/Wifi";
import Battery from "./icons/Battery";

const StatusIcons = () => {
  return (
    <div
      className={`relative flex items-center justify-center w-[30%] pr-[20px] space-x-3`}
    >
      <Signal />
      <Wifi />
      <Battery />
    </div>
  );
};

export default memo(StatusIcons);
