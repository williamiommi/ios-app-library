import { memo } from "react";
import Lens from "./icons/Lens";

const InputSearch = () => {
  return (
    <div className="relative z-30 flex items-end w-full h-[100px] pb-4">
      <div className="flex items-center w-full mx-5">
        <div className="flex justify-center items-center w-full h-12 bg-gray-700/90 rounded-2xl">
          <div className="absolute flex items-center transition-all duration-500 left-1/2 translate-x-[-50%]">
            <Lens />
            <span className="inline text-gray-500 w-full text-sm ml-1">
              App Library
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(InputSearch);
