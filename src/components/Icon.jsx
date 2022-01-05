import { memo } from "react";

const Icon = ({ src, text, showText, wrapperClass, imgClass, textClass }) => (
  <div
    className={`text-center ${wrapperClass}`}
    onClick={(e) => e.stopPropagation()}
  >
    <img src={src} alt={text} className={`${imgClass}`} />
    {showText && (
      <p className={`text-white font-sans text-sm ${textClass}`}>{text}</p>
    )}
  </div>
);

export default memo(Icon);
