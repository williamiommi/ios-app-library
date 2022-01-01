import { memo } from "react";

const BackdropLayer = ({ children }) => {
  return (
    <div className="absolute inset-0 bg-black/20 backdrop-blur-md">
      {children}
    </div>
  );
};

export default memo(BackdropLayer);
