import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatchContext, useAppStateContext } from "../context/app";
import Lens from "./icons/Lens";
import {
  inputSearchBlockVariants,
  inputSearchWrapperVariants,
  inputSearchVariants,
  inputSearchCancelVariants,
} from "../lib/variants";
import useDebounce from "../hooks/useDebounce";

const InputSearch = () => {
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);
  const { isFolderListOpen } = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const openFolderList = () => {
    if (!isFolderListOpen) {
      dispatch({ type: "TOGGLE.FOLDER.LIST" });
      inputRef.current.focus();
    }
  };
  const closeFolderList = () => {
    setSearchTerm('');
    dispatch({ type: "TOGGLE.FOLDER.LIST" });
  };

  useEffect(() => {
    dispatch({ type: "SET.FILTER.APPS", payload: debouncedSearchTerm });
  }, [dispatch, debouncedSearchTerm]);

  return (
    <div className="relative z-50 flex items-end w-full h-[100px] pb-4">
      <div className="relative flex items-center w-full mx-5">
        <motion.div
          animate={isFolderListOpen ? "open" : "close"}
          initial={inputSearchBlockVariants.close}
          variants={inputSearchBlockVariants}
          role="button"
          className="relative flex justify-center items-center h-12 bg-gray-700/90 rounded-2xl"
          onClick={openFolderList}
        >
          <motion.div
            animate={isFolderListOpen ? "open" : "close"}
            initial={inputSearchWrapperVariants.close}
            variants={inputSearchWrapperVariants}
            className="absolute flex items-center"
          >
            <Lens />
            <motion.input
              ref={inputRef}
              value={searchTerm}
              animate={isFolderListOpen ? "open" : "close"}
              initial={inputSearchVariants.close}
              variants={inputSearchVariants}
              type="text"
              placeholder="App Library"
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`text-white text-sm ml-1 placeholder:text-gray-500 bg-transparent outline-none`}
            />
          </motion.div>
        </motion.div>
        <motion.button
          type="button"
          animate={isFolderListOpen ? "open" : "close"}
          initial={inputSearchCancelVariants.close}
          variants={inputSearchCancelVariants}
          className="absolute text-white text-sm ml-2"
          onClick={closeFolderList}
        >
          Cancel
        </motion.button>
      </div>
    </div>
  );
};

export default memo(InputSearch);
