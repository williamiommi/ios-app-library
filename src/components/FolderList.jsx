import { useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";
import { motion, useAnimation } from "framer-motion";
import { useAppStateContext } from "../context/app";
import { folderListVariants } from "../lib/variants";
import BackdropLayer from "./BackdropLayer";
import FolderListEntry from "./FolderListEntry";
import AlphabetList from "./AlphabetList";

const FolderList = () => {
  const scrollRef = useRef();
  const wrapperControls = useAnimation();
  const { isFolderListOpen, appsDict, filteredApps } = useAppStateContext();
  const clickAlphabet = (id) => {
    const el = document.getElementById(id);
    if (el) {
      scrollRef.current.contentWrapperEl.scroll({ top: 0 });
      const rect = el.getBoundingClientRect();
      scrollRef.current.contentWrapperEl.scroll({ top: rect.top - 120 });
    }
  };

  useEffect(() => {
    const animation = async () => {
      if (isFolderListOpen) {
        wrapperControls.start(folderListVariants.open);
      } else {
        await wrapperControls.start(folderListVariants.close);
        scrollRef.current.contentWrapperEl.scroll({ top: 0 });
      }
    }
    animation();
  }, [isFolderListOpen, wrapperControls]);

  return (
    <motion.div
      initial={folderListVariants.close}
      animate={wrapperControls}
      variants={folderListVariants}
      className="absolute inset-0"
    >
      <BackdropLayer level="xl" />
      {filteredApps && filteredApps.length === 0 ? (
        <p className="absolute inset-0 flex items-center justify-center text-xl text-white">
          No Results
        </p>
      ) : (
        <>
          <SimpleBar
            ref={scrollRef}
            className="!absolute inset-0 pb-10 w-full max-h-full"
          >
            <div className="sticky top-[0] left-0 w-full h-[115px] backdrop-blur-sm z-30" />
            {filteredApps && <FolderListEntry apps={filteredApps} />}
            {!filteredApps &&
              Object.keys(appsDict).map((key) => (
                <FolderListEntry key={key} char={key} apps={appsDict[key]} />
              ))}
          </SimpleBar>
          {!filteredApps && <AlphabetList onClick={clickAlphabet} />}
        </>
      )}
    </motion.div>
  );
};

export default FolderList;
