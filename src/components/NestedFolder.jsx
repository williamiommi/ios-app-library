import { memo } from "react";
import { motion } from "framer-motion";
import { useAppDispatchContext, useAppStateContext } from "../context/app";

const variants = {
  open: { scale: 2 },
  close: { scale: 1 },
};

const NestedFolder = ({ name, icons }) => {
  const { folderOpenName } = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const openFolder = () => {
    dispatch({ type: "SET.FOLDER.NAME", payload: name });
    dispatch({ type: "SET.FOLDER", payload: { icons, name } });
  };
  let filtered = icons.filter((_, index) => index >= 3 && index < 3 + 4);
  return (
    <motion.div animate={folderOpenName === name ? "open" : "close"} variants={variants}>
      <div className="grid grid-cols-2 p-2 cursor-pointer" onClick={openFolder}>
        {filtered.map((icon) => (
          <img key={icon.name} src={icon.src} alt={icon.name} />
        ))}
      </div>
    </motion.div>
  );
};

export default memo(NestedFolder);
