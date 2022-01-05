import useFolderListEntryChar from "../hooks/useFolderListEntryChar";
import Icon from "./Icon";

const FolderListEntry = ({ char, apps }) => {
  const { titleRef } = useFolderListEntryChar();
  return (
    <div>
      {char && (
        <h4
          ref={titleRef}
          id={`char${char}`}
          className="sticky w-[10px] top-[90px] pl-5 text-white z-40 transition-opacity duration-300"
        >
          {char}
        </h4>
      )}
      <ul className="text-white text-sm font-bold z-10">
        {apps.map((app) => (
          <li>
            <Icon
              key={app.name}
              showText
              src={app.src}
              text={app.name}
              wrapperClass="flex items-center justify-start -ml-[5px] px-5 cursor-pointer h-16"
              imgClass="w-14"
              textClass="flex w-[80%] items-center self-stretch border-b border-b-white/10 mx-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderListEntry;
