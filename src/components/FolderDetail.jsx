import { motion, useAnimation } from "framer-motion";
import Icon from "./Icon";
import useFolderDetailBlur from "../hooks/useFolderDetailBlur";
import { useEffect, useRef } from "react";
import { useAppDispatchContext, useAppStateContext } from "../context/app";
import { folderDetailVariants } from "../lib/variants";
import { getDistanceFromCenterFrame } from "../lib/utils";

const FolderDetail = () => {
  const folderRef = useRef();
  const controls = useAnimation();
  const { folderOpen } = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const { blurredRef } = useFolderDetailBlur(folderOpen);

  useEffect(() => {
    if (folderOpen) {
      controls.set(getDistanceFromCenterFrame(folderOpen.el));
      controls.set(folderDetailVariants.close);
      controls.start(folderDetailVariants.open);
    }
  }, [folderOpen, controls]);

  const closeFolderHandler = async () => {
    dispatch({ type: "SET.FOLDER.NAME", payload: null });
    await controls.start({
      ...folderDetailVariants.close,
      ...getDistanceFromCenterFrame(folderOpen.el),
    });
    dispatch({ type: "SET.FOLDER", payload: null });
  };

  if (!folderOpen) return null;
  return (
    <motion.div
      ref={folderRef}
      animate={controls}
      variants={folderDetailVariants}
      className={`absolute inset-0 h-full opacity-0`}
      onClick={closeFolderHandler}
    >
      <div className="absolute z-20 inset-0 overflow-y-auto">
        <div
          ref={blurredRef}
          className="invisible sticky w-full top-[-1px] z-30 h-[90px] backdrop-blur-md"
        ></div>
        <h2 className="sticky top-[50px] w-full text-white text-3xl mb-10 tracking-wide z-40 px-5 mt-[35%]">
          {folderOpen.name}
        </h2>
        <div className="grid grid-cols-4 gap-3 px-5 pb-10">
          {folderOpen.icons.map((icon) => (
            <Icon key={icon.name} src={icon.src} showText text={icon.name} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FolderDetail;
