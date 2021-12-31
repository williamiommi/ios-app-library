const PhoneFrame = ({ children, pro }) => {
  const frameSize = pro ? "h-[926px] w-[428px]" : "h-[712px] w-[350px]";
  const notchSize = pro ? 'w-52' : 'w-40';
  return (
    <div
      className={`${frameSize} relative overflow-hidden border-[14px] border-black bg-black rounded-[60px] shadow-xl ring ring-orange-400 backdrop-blur-md`}
    >
      <img
          src="/bg.png"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 inset-x-0">
          <div className={`${notchSize} relative h-6 mx-auto bg-black rounded-b-3xl z-10`}></div>
        </div>
      {children}
    </div>
  );
};

export default PhoneFrame;
