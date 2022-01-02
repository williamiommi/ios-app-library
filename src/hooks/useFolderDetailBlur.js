import { useEffect, useRef } from "react";

const useFolderDetailBlur = () => {
  const blurredRef = useRef();
  useEffect(() => {
    if (!blurredRef.current) return null;

    const observer = new IntersectionObserver(
      ([e]) => {
        console.log(e);
        blurredRef.current.classList.toggle(
          "!visible",
          e.intersectionRatio < 1
        );
      },
      {
        threshold: [1],
      }
    );
    observer.observe(blurredRef.current);
    return () => observer.disconnect();
  }, []);
  return { blurredRef };
};

export default useFolderDetailBlur;
