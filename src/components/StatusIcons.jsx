import Signal from "./icons/Signal";
import Wifi from "./icons/Wifi";
import Battery from "./icons/Battery";

const Notch = ({ pro }) => {
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

export default Notch;
