import { useEffect, useRef } from "react";

const useFolderListEntryChar = () => {
  const titleRef = useRef();
  useEffect(() => {
    if (!titleRef.current) return null;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (!titleRef.current) return;
        titleRef.current.classList.toggle("opacity-0", e.intersectionRatio < 1);
      },
      {
        threshold: [1],
        rootMargin: "-120px 0px 0px 0px",
      }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);
  return { titleRef };
};

export default useFolderListEntryChar;
