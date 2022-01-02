import { useState } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "./components/PhoneFrame";
import BackdropLayer from "./components/BackdropLayer";
import FolderWrapper from "./components/FolderWrapper";
import InputSearch from "./components/InputSearch";
import TopBar from "./components/TopBar";
import FolderDetail from "./components/FolderDetail";

const appLibraryVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

function App() {
  const [pro, setPro] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [openFolder, setOpenFolder] = useState(null);

  const openDetail = (folder) => {
    setIsDetailOpen(true);
    setOpenFolder(folder);
  }

  return (
    <>
      <div className="grid gap-10 place-items-center">
        <button onClick={() => setPro(!pro)}>pro</button>
        <PhoneFrame pro={pro}>
          <BackdropLayer />
          <TopBar pro={pro} />
          <motion.div
            animate={isDetailOpen ? "hidden" : "visible"}
            variants={appLibraryVariants}
            className="h-full"
          >
            <InputSearch />
            <FolderWrapper openFolderCB={openDetail} isDetailOpen={isDetailOpen} />
          </motion.div>
          <FolderDetail
            folder={openFolder}
            setIsDetailOpenCB={setIsDetailOpen}
            closeFolderCB={setOpenFolder}
          />
        </PhoneFrame>
      </div>
    </>
  );
}

export default App;
