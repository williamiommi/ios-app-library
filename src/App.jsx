import { useState } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "./components/PhoneFrame";
import BackdropLayer from "./components/BackdropLayer";
import FolderWrapper from "./components/FolderWrapper";
import InputSearch from "./components/InputSearch";
import TopBar from "./components/TopBar";
import FolderDetail from "./components/FolderDetail";

const appLibraryVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.7 } },
};

function App() {
  const [pro, setPro] = useState(false);
  const [openFolder, setOpenFolder] = useState(null);
  return (
    <>
      <div className="grid gap-10 place-items-center">
        <button onClick={() => setPro(!pro)}>pro</button>
        <PhoneFrame pro={pro}>
          <BackdropLayer />
          <TopBar pro={pro} />
          <motion.div
            animate={openFolder ? "hidden" : "visible"}
            variants={appLibraryVariants}
            className="h-full"
          >
            <InputSearch />
            <FolderWrapper openFolderCB={setOpenFolder} />
          </motion.div>
          <FolderDetail folder={openFolder} />
        </PhoneFrame>
      </div>
    </>
  );
}

export default App;
