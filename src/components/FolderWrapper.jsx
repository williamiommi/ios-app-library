import { memo } from "react";
import SimpleBar from "simplebar-react";
import mock from "../mock";
import Folder from "./Folder";

function FolderWrapper({ openFolderCB }) {
  return (
    <SimpleBar className="!absolute top-0 p-5 pt-24 w-full max-h-full">
      <div className="grid grid-cols-2 gap-5">
        {mock.map((folder) => (
          <Folder
            key={folder.name}
            icons={folder.icons}
            name={folder.name}
            openFolderCB={openFolderCB}
          />
        ))}
      </div>
    </SimpleBar>
  );
}

export default memo(FolderWrapper);
