import { memo } from "react";

const Icon = ({ src, text, showText, wrapperClass, imgClass, textClass }) => {
  return (
    <div className={`text-center ${wrapperClass}`}>
      <img src={src} alt={text} className={`${imgClass}`} />
      {showText && (
        <p className={`text-white font-sans text-sm -mt-1 ${textClass}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default memo(Icon);
