import SimpleBar from "simplebar-react";
import { useAppStateContext } from "../context/app";
import BackdropLayer from "./BackdropLayer";

const FolderList = () => {
  const { appsDict } = useAppStateContext();
  console.log(appsDict);
  return (
    <div>
      <BackdropLayer />
      <SimpleBar className="!absolute inset-0 pt-28 pb-10 w-full max-h-full">
        <ul className="relative px-5 text-white text-sm font-bold">
          {Object.keys(appsDict).map((key) => {
            return (
              <>
                <li className="sticky top-[100px]">{key}</li>
                {appsDict[key].map((app) => (
                  <li className="flex items-center -ml-[5px]">
                    <img src={app.src} alt={app.name} className="w-14" />
                    <span className="flex w-[80%] self-stretch items-center border-b border-b-white/10 mb-1 py-5 mx-2">
                      <span>{app.name}</span>
                    </span>
                  </li>
                ))}
              </>
            );
          })}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default FolderList;
