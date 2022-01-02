import { motion, useAnimation } from "framer-motion";
import SimpleBar from "simplebar-react";
import Icon from "./Icon";
import useFolderDetailBlur from "../hooks/useFolderDetailBlur";
import { useEffect, useRef, useState } from "react";
import { useAppDispatchContext, useAppStateContext } from "../context/app";
import { folderDetailVariants } from "../lib/variants";
import { getCenterBox } from "../lib/utils";

const calculateCenterDifference = (centerPoint, folderOpen) => ({
  x: (centerPoint.x - folderOpen.x) * -1,
  y: (centerPoint.y - folderOpen.y) * -1,
});

const FolderDetail = () => {
  const folderRef = useRef();
  const { folderOpen } = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const { blurredRef } = useFolderDetailBlur();
  const controls = useAnimation();
  const [centerPoint, setCenterPoint] = useState();

  useEffect(() => {
    if (folderOpen) {
      const centerPoint = getCenterBox(folderRef.current);
      setCenterPoint(centerPoint);
      controls.set(calculateCenterDifference(centerPoint, folderOpen));
      controls.set(folderDetailVariants.close);
      controls.start(folderDetailVariants.open);
    }
  }, [folderOpen, controls]);

  const closeFolderHandler = async () => {
    dispatch({ type: "SET.FOLDER.NAME", payload: null });
    await controls.start({...folderDetailVariants.close, ...calculateCenterDifference(centerPoint, folderOpen)});
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
      <SimpleBar className="!absolute flex flex-col justify-center items-center z-20 inset-0 pt-[20%]">
        <div
          ref={blurredRef}
          className="invisible sticky w-full top-[-1px] z-30 h-[90px] backdrop-blur-md"
        ></div>
        <h2 className="sticky top-[50px] w-full text-white text-3xl mb-10 tracking-wide z-40 px-5">
          {folderOpen.name}
        </h2>
        <div className="grid grid-cols-4 gap-3 px-5 pb-5">
          {folderOpen.icons.map((icon) => (
            <Icon key={icon.name} src={icon.src} showText text={icon.name} />
          ))}
        </div>
      </SimpleBar>
    </motion.div>
  );
};

export default FolderDetail;
