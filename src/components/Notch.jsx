import Signal from "./icons/Signal";
import Wifi from "./icons/Wifi";
import Battery from "./icons/Battery";
import Clock from "./Clock";

const Notch = ({ pro }) => {
  const notchSize = pro ? 'w-52' : 'w-[134px]';
  const clockSize = pro ? 'w-52' : 'w-[94px] pr-[14px]';
  const statusSize = pro ? 'w-52' : 'w-[94px] pl-[7px]';
  return (
    <div className="absolute top-0 inset-x-0 z-50 flex flex-row justify-between items-center w-">
      <Clock clockSize={clockSize} />
      <div className={`${notchSize} relative h-6 bg-black rounded-b-3xl`}></div>
      <div className={`${statusSize} relative flex items-center justify-start space-x-1`}>
        <Signal />
        <Wifi />
        <Battery />
      </div>
    </div>
  );
};

export default Notch;
