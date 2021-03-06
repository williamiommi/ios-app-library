import { memo } from "react";
import Clock from "./Clock";
import StatusIcons from "./StatusIcons";

const TopBar = () => (
  <div className="absolute top-0 inset-x-0 z-50 flex flex-row justify-between items-center w-">
    <Clock />
    <div className="w-[40%] relative h-6 bg-black rounded-b-3xl"></div>
    <StatusIcons />
  </div>
);

export default memo(TopBar);
