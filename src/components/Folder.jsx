import { memo, useEffect, useState } from "react";
import Icon from "./Icon";
import NestedFolder from "./NestedFolder";

const Folder = ({ icons, name }) => {
  const [filteredIcons, setFilteredIcons] = useState(icons);
  const [isNested, setIsNested] = useState(false);
  
  useEffect(() => {
    if (icons.length > 4) {
      setIsNested(true);
      setFilteredIcons(icons.filter((_, index) => index < 3));
    }
  }, [icons, name]);

  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 bg-gray-700/50 rounded-2xl p-1">
        {filteredIcons.map((icon) => (
          <Icon
            key={icon.name}
            src={icon.src}
            text={icon.name}
            imgClass="cursor-pointer"
          />
        ))}
        {isNested && <NestedFolder name={name} icons={icons} />}
      </div>
      <p className="font-sans text-center text-white text-sm">{name}</p>
    </div>
  );
};

export default memo(Folder);
