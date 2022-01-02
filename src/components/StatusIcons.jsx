import { memo } from "react";
import { useAppStateContext } from "../context/app";
import Signal from "./icons/Signal";
import Wifi from "./icons/Wifi";
import Battery from "./icons/Battery";

const StatusIcons = () => {
  const { pro } = useAppStateContext();
  const statusSize = pro ? 'space-x-3' : 'space-x-1';
  return (
    <div
      className={`relative flex items-center justify-center w-[30%] pr-[20px] ${statusSize}`}
    >
      <Signal />
      <Wifi />
      <Battery />
    </div>
  );
};

export default memo(StatusIcons);
