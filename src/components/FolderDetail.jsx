import { motion, useAnimation } from "framer-motion";
import SimpleBar from "simplebar-react";
import Icon from "./Icon";
import useFolderDetailBlur from "../hooks/useFolderDetailBlur";
import { useEffect } from "react";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

const FolderDetail = ({ folder, setIsDetailOpenCB, closeFolderCB }) => {
  const { blurredRef } = useFolderDetailBlur(folder);
  const controls = useAnimation();

  useEffect(() => {
    if (folder) {
      controls.set(variants.hidden);
      controls.start(variants.visible);
    }
  }, [folder, controls]);

  const closeFolderHandler = async () => {
    setIsDetailOpenCB(false);
    await controls.start(variants.hidden);
    closeFolderCB(null);
  };

  if (!folder) return null;
  return (
    <motion.div
      animate={controls}
      variants={variants}
      className="absolute inset-0 h-full opacity-0"
      onClick={closeFolderHandler}
    >
      <SimpleBar className="!absolute flex flex-col justify-center items-center z-20 inset-0 pt-[20%]">
        <div
          ref={blurredRef}
          className="invisible sticky w-full top-[-1px] z-30 h-[90px] backdrop-blur-md"
        ></div>
        <h2 className="sticky top-[50px] w-full text-white text-3xl mb-10 tracking-wide z-40 px-5">
          {folder.name}
        </h2>
        <div className="grid grid-cols-4 gap-3 px-5 pb-5">
          {folder.icons.map((icon) => (
            <Icon key={icon.name} src={icon.src} showText text={icon.name} />
          ))}
        </div>
      </SimpleBar>
    </motion.div>
  );
};

export default FolderDetail;
