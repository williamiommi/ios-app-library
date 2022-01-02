import { useEffect, useRef } from "react";

const useFolderDetailBlur = () => {
  const blurredRef = useRef();
  const titleRef = useRef();
  useEffect(() => {
    if (!titleRef.current) return null;

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
    return () => observer.disconnect();
  }, []);
  return { blurredRef, titleRef };
};

export default useFolderDetailBlur;
