import { motion } from "framer-motion";
import { useAppStateContext } from "./context/app";
import { appLibraryVariants } from "./lib/variants";
import PhoneFrame from "./components/PhoneFrame";
import BackdropLayer from "./components/BackdropLayer";
import FolderWrapper from "./components/FolderWrapper";
import InputSearch from "./components/InputSearch";
import TopBar from "./components/TopBar";
import FolderDetail from "./components/FolderDetail";

function App() {
  const { pro, folderOpenName } = useAppStateContext();

  return (
    <>
      <div className="grid gap-10 place-items-center my-5">
        <PhoneFrame pro={pro}>
          <BackdropLayer />
          <TopBar />
          <motion.div
            animate={folderOpenName ? "close" : "open"}
            variants={appLibraryVariants}
            className="h-full"
          >
            <InputSearch />
            <FolderWrapper />
          </motion.div>
          <FolderDetail />
        </PhoneFrame>
      </div>
    </>
  );
}

export default App;
