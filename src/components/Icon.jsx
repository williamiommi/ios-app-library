const Icon = ({ src, text, wrapperClass, imgClass, textClass }) => {
  return (
    <div className={`text-center ${wrapperClass}`}>
      <img src={src} alt={text} className={`${imgClass}`} />
      {text && (
        <p className={`text-white font-sans text-sm -mt-1 ${textClass}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Icon;
