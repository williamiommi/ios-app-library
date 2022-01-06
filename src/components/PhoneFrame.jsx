import { memo, useEffect, useRef } from "react";
import { useAppDispatchContext } from "../context/app";
import { getCenterBox } from "../lib/utils";

const PhoneFrame = ({ children }) => {
  const phoneFrameRef = useRef();
  const dispatch = useAppDispatchContext();
  useEffect(() => {
    if (phoneFrameRef.current) {
      dispatch({
        type: "SET.PHONE.FRAME.CENTER.COORDS",
        payload: getCenterBox(phoneFrameRef.current),
      });
    }
  }, [dispatch]);
  return (
    <div
      ref={phoneFrameRef}
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
