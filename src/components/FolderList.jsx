import SimpleBar from "simplebar-react";
import { motion } from "framer-motion";
import { useAppStateContext } from "../context/app";
import BackdropLayer from "./BackdropLayer";
import FolderListEntry from "./FolderListEntry";
import { folderListVariants } from "../lib/variants";

const FolderList = () => {
  const { isFolderListOpen, appsDict } = useAppStateContext();
  return (
    <motion.div
      initial={folderListVariants.close}
      animate={isFolderListOpen ? "open" : "close"}
      variants={folderListVariants}
      className="absolute inset-0"
    >
      <BackdropLayer level="xl" />
      <SimpleBar className="!absolute inset-0 pb-10 w-full max-h-full">
        <div className="sticky top-[0] left-0 w-full h-[115px] backdrop-blur-sm z-30" />
        {Object.keys(appsDict).map((key) => (
          <FolderListEntry key={key} char={key} apps={appsDict[key]} />
        ))}
      </SimpleBar>
    </motion.div>
  );
};

export default FolderList;
