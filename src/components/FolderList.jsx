import SimpleBar from "simplebar-react";
import { useAppStateContext } from "../context/app";
import BackdropLayer from "./BackdropLayer";
import FolderListEntry from "./FolderListEntry";

const FolderList = () => {
  const { appsDict } = useAppStateContext();
  return (
    <div className="absolute inset-0">
      <BackdropLayer level="xl" />
      <SimpleBar className="!absolute inset-0 pb-10 w-full max-h-full">
        <div className="sticky top-[0] left-0 w-full h-[115px] backdrop-blur-md z-30" />
        {Object.keys(appsDict).map((key) => (
          <div>
            <h4 className="sticky top-[90px] px-5 text-white z-40">{key}</h4>
            <FolderListEntry key={key} char={key} apps={appsDict[key]} />
          </div>
        ))}
      </SimpleBar>
    </div>
  );
};

export default FolderList;
