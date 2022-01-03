import { memo } from "react";

const PhoneFrame = ({ children, pro }) => {
  const frameSize = pro ? "h-[926px] w-[428px]" : "h-[712px] w-[350px]";
  return (
    <div
      className={`${frameSize} relative overflow-hidden border-[14px] border-black bg-black rounded-[60px] pb-5 ring ring-orange-400 blur-0`}
    >
      <img
        src="/bg.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {children}
    </div>
  );
};

export default memo(PhoneFrame);
