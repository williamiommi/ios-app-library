import Icon from "./Icon";
import SimpleBar from "simplebar-react";
import { useEffect, useRef } from "react";

const FolderDetail = ({ text, icons, show }) => {
  const blurredRef = useRef();
  const titleRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        blurredRef.current.classList.toggle(
          "backdrop-blur-md",
          e.intersectionRatio < 1
        );
      },
      {
        threshold: [1],
        rootMargin: "-140px",
      } /* blurredRed h + titleRef top*/
    );
    observer.observe(titleRef.current);
  }, []);
  return (
    <div className="relative h-full">
      <SimpleBar className="!absolute flex flex-col justify-center items-center z-20 inset-0 pt-[40%]">
        <div
          ref={blurredRef}
          className="sticky w-full top-0 z-30 h-[90px]"
        ></div>
        <h2
          ref={titleRef}
          className="sticky top-[50px] w-full text-white text-3xl mb-10 tracking-wide z-40 px-5"
        >
          {text}
        </h2>
        <div className="grid grid-cols-4 gap-3 px-5">
          {icons.map((icon) => (
            <Icon key={icon.name} src={icon.src} text={icon.name} />
          ))}
        </div>
      </SimpleBar>
    </div>
  );
};

export default FolderDetail;
