import { memo } from "react";
import { useAppStateContext } from "../context/app";
import Folder from "./Folder";

function FolderWrapper() {
  const { folders, isFolderListOpen } = useAppStateContext();
  return (
    <>
      {!isFolderListOpen && (
        <div className="absolute top-0 left-0 w-full h-[95px] backdrop-blur-sm z-20" />
      )}
      <div className="!absolute top-0 p-5 pt-28 w-full max-h-full overflow-y-auto">
        <div className="grid grid-cols-2 gap-5">
          {folders.map((folder) => (
            <Folder key={folder.name} icons={folder.icons} name={folder.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default memo(FolderWrapper);
