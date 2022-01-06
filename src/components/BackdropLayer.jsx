import { memo } from "react";

const BackdropLayer = ({ level }) => {
  let backdropLevel = "backdrop-blur-md";
  switch (level) {
    case "md":
      backdropLevel = "backdrop-blur-sm";
      break;
    case "lg":
      backdropLevel = "backdrop-blur-lg";
      break;
    case "xl":
      backdropLevel = "backdrop-blur-xl";
      break;
    default:
      break;
  }
  return (
    <div className={`absolute inset-0 bg-black/20 ${backdropLevel}`} />
  );
};

export default memo(BackdropLayer);
