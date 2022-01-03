import { useEffect, useRef } from "react";

const useFolderDetailBlur = (folder) => {
  const blurredRef = useRef();
  useEffect(() => {
    if (!folder && !blurredRef.current) return null;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (!blurredRef.current) return;
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
  }, [folder]);
  return { blurredRef };
};

export default useFolderDetailBlur;
