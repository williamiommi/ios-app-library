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
        <div className="sticky top-[0] left-0 w-full h-[115px] backdrop-blur-sm z-30" />
        {Object.keys(appsDict).map((key) => (
          <FolderListEntry key={key} char={key} apps={appsDict[key]} />
        ))}
      </SimpleBar>
    </div>
  );
};

export default FolderList;