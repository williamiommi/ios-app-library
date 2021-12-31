import Icon from "./Icon";
import NestedFolder from "./NestedFolder";

const Folder = ({ icons, text }) => {
  let filtered = icons;
  let isNested = false;
  if (icons.length > 4) {
    isNested = true;
    filtered = icons.filter((_, index) => index < 3);
  }

  return (
    <div>
      <div className="grid grid-cols-2 bg-gray-700/50 rounded-2xl p-1">
        {filtered.map((icon) => (
          <Icon
            key={icon.name}
            src={icon.src}
            text={icon.name}
            imgClass="cursor-pointer"
          />
        ))}
        {isNested && <NestedFolder text={text} icons={icons} />}
      </div>
      <p className="font-sans text-center text-white text-sm">{text}</p>
    </div>
  );
};

export default Folder;
