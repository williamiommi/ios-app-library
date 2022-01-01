import { useState } from "react";
import PhoneFrame from "./components/PhoneFrame";
import BackdropLayer from "./components/BackdropLayer";
import FolderWrapper from "./components/FolderWrapper";
import InputSearch from "./components/InputSearch";
import TopBar from "./components/TopBar";

function App() {
  const [pro, setPro] = useState(false);
  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <button onClick={() => setPro(!pro)}>pro</button>
        <PhoneFrame pro={pro}>
          <TopBar pro={pro} />
          <BackdropLayer />
          <InputSearch />
          <FolderWrapper />
        </PhoneFrame>
      </div>
    </>
  );
}

export default App;
