import useFolderListEntryChar from "../hooks/useFolderListEntryChar";

const FolderListEntry = ({ char, apps }) => {
  const { titleRef } = useFolderListEntryChar();
  return (
    <div>
      <h4
        ref={titleRef}
        className="sticky top-[90px] px-5 text-white z-40 transition-opacity duration-300"
      >
        {char}
      </h4>
      <ul className="text-white text-sm font-bold z-10">
        {apps.map((app) => (
          <li
            key={app.name}
            className="flex items-center -ml-[5px] px-5 cursor-pointer"
          >
            <img src={app.src} alt={app.name} className="w-14" />
            <span className="flex w-[80%] self-stretch items-center border-b border-b-white/10 mb-1 py-5 mx-2">
              <span>{app.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderListEntry;
