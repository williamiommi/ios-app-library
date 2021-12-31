import mock from "../mock";
import Folder from "./Folder";

function FolderWrapper() {
  return (
    <div className="relative px-5">
      <div className="grid grid-cols-2 gap-5">
        {mock.map((folder) => (
          <Folder key={folder.name} icons={folder.icons} text={folder.name} />
        ))}
      </div>
    </div>
  );
}

export default FolderWrapper;
