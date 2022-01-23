import { memo } from "react";

const PhoneFrame = ({ children }) => {
  return (
    <div
      id='frame'
      className={`h-[926px] w-[98%] max-w-[428px] relative overflow-hidden border-[14px] border-black bg-black rounded-[60px] pb-5 ring ring-orange-400 blur-0`}
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
