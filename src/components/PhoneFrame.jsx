const PhoneFrame = ({ children, pro }) => {
  const size = pro ? "h-[926px] w-[428px]" : "h-[712px] w-[350px]";
  return (
    <div
      className={`${size} relative overflow-hidden border-[14px] border-black bg-black rounded-[60px] shadow-xl ring ring-slate-400`}
    >
      <img
          src="/bg.png"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 inset-x-0">
          <div className="h-6 w-40 mx-auto bg-black rounded-b-3xl"></div>
        </div>
      {children}
    </div>
  );
};

export default PhoneFrame;
