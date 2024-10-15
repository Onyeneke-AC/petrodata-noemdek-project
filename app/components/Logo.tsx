import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[153px] h-[32px] font-medium text-[24px] leading-[32px] flex items-center justify-between gap-2 mt-6 pl-4">
      <Image src="/logo.png" width={17.92} height={30.72} alt="" />
      <span className="text-sideTextGray">
        <span className="text-primarySideGreen">Petro</span>data
      </span>
    </div>
  );
};

export default Logo;
