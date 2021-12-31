const Icon = ({ src, text }) => {
  return (
    <div className="text-center">
      <img src={src} alt={text} />
      <p className="text-white font-sans text-sm -mt-1">{text}</p>
    </div>
  );
};

export default Icon;
