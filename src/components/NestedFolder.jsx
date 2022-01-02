import { memo, useState } from "react";

const NestedFolder = ({ name, icons, openFolderCB }) => {
  let filtered = icons.filter((_, index) => index >= 3 && index < 3 + 4);
  return (
    <div>
      <div className="grid grid-cols-2 p-2 cursor-pointer" onClick={() => openFolderCB({icons, name})}>
        {filtered.map((icon) => (
          <img key={icon.name} src={icon.src} alt={icon.name} />
        ))}
      </div>
    </div>
  );
}

export default memo(NestedFolder);