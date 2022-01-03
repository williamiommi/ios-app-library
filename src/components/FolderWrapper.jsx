import { memo } from "react";
import SimpleBar from "simplebar-react";
import { useAppStateContext } from "../context/app";
import Folder from "./Folder";

function FolderWrapper() {
  const { folders, isFolderListOpen } = useAppStateContext();
  return (
    <>
      {!isFolderListOpen && (
        <div className="absolute top-0 left-0 w-full h-[95px] backdrop-blur-sm z-20" />
      )}
      <SimpleBar className="!absolute top-0 p-5 pt-28 w-full max-h-full">
        <div className="grid grid-cols-2 gap-5">
          {folders.map((folder) => (
            <Folder key={folder.name} icons={folder.icons} name={folder.name} />
          ))}
        </div>
      </SimpleBar>
    </>
  );
}

export default memo(FolderWrapper);
