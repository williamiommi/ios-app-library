import Icon from "./Icon";
import SimpleBar from "simplebar-react";
import useFolderDetailBlur from "../hooks/useFolderDetailBlur";

const FolderDetail = ({ folder }) => {
  const { blurredRef, titleRef } = useFolderDetailBlur();
  if (!folder) return null;
  return (
    <div className="relative h-full">
      <SimpleBar className="!absolute flex flex-col justify-center items-center z-20 inset-0 pt-[20%]">
        <div
          ref={blurredRef}
          className="sticky w-full top-0 z-30 h-[90px]"
        ></div>
        <h2
          ref={titleRef}
          className="sticky top-[50px] w-full text-white text-3xl mb-10 tracking-wide z-40 px-5"
        >
          {folder.name}
        </h2>
        <div className="grid grid-cols-4 gap-3 px-5 pb-5">
          {folder.icons.map((icon) => (
            <Icon key={icon.name} src={icon.src} text={icon.name} />
          ))}
        </div>
      </SimpleBar>
    </div>
  );
};

export default FolderDetail;
