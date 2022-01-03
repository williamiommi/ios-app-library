import { memo } from "react";
import { useAppDispatchContext } from "../context/app";
import Lens from "./icons/Lens";

const InputSearch = () => {
  const dispatch = useAppDispatchContext();
  const toggleFolderList = () => {
    dispatch({ type: 'TOGGLE.FOLDER.LIST' })
  }
  return (
    <div className="relative z-50 flex items-end w-full h-[100px] pb-4">
      <div className="flex items-center w-full mx-5">
        <button type="button" className="flex justify-center items-center w-full h-12 bg-gray-700/90 rounded-2xl" onClick={toggleFolderList}>
          <div className="absolute flex items-center transition-all duration-500 left-1/2 translate-x-[-50%]">
            <Lens />
            <span className="inline text-gray-500 w-full text-sm ml-1">
              App Library
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default memo(InputSearch);
