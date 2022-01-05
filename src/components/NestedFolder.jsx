import { memo, useRef } from "react";
import { motion } from "framer-motion";
import { useAppDispatchContext, useAppStateContext } from "../context/app";
import { nestedFolderVariants, iconVariants } from "../lib/variants";
import { getCenterBox } from "../lib/utils";

const NestedFolder = ({ name, icons }) => {
  const visibleIcons = icons.slice(3, 7);
  const elRef = useRef();
  const { folderOpenName } = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const openFolder = () => {
    dispatch({ type: "SET.FOLDER.NAME", payload: name });
    dispatch({
      type: "SET.FOLDER",
      payload: { icons, name, ...getCenterBox(elRef.current) },
    });
  };

  return (
    <motion.div
      ref={elRef}
      animate={folderOpenName === name ? "open" : "close"}
      variants={nestedFolderVariants}
    >
      <div className="grid grid-cols-2 p-2 cursor-pointer" onClick={openFolder}>
        {visibleIcons.map((icon, index) => (
          <motion.img
            animate={folderOpenName === name ? "open" : "close"}
            variants={iconVariants[index]}
            className="relative"
            key={icon.name}
            src={icon.src}
            alt={icon.name}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default memo(NestedFolder);
