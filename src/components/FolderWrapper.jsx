import { memo } from "react";
import SimpleBar from "simplebar-react";
import { useAppStateContext } from "../context/app";
import Folder from "./Folder";

function FolderWrapper() {
  const { folders } = useAppStateContext();
  return (
    <SimpleBar className="!absolute top-0 p-5 pt-24 w-full max-h-full">
      <div className="grid grid-cols-2 gap-5">
        {folders.map((folder) => (
          <Folder
            key={folder.name}
            icons={folder.icons}
            name={folder.name}
          />
        ))}
      </div>
    </SimpleBar>
  );
}

export default memo(FolderWrapper);
