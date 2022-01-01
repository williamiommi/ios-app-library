import { memo } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import mock from "../mock";
import Folder from "./Folder";

function FolderWrapper() {
  return (
    <SimpleBar className="!absolute top-0 p-5 pt-24 w-full max-h-full">
      <div className="grid grid-cols-2 gap-5">
        {mock.map((folder) => (
          <Folder key={folder.name} icons={folder.icons} text={folder.name} />
        ))}
      </div>
    </SimpleBar>
  );
}

export default memo(FolderWrapper);
