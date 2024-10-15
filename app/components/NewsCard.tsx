import Image from "next/image";
import { ChartTabProps } from "../assets/TypeExports";

const NewsCard = ({ type }: ChartTabProps) => {
  return (
    <div
      className={`relative ${
        type === "smallCard"
          ? "h-[290px] w-[266px] rounded-[24px] py-6 px-4 "
          : type === "smallWidget"
          ? "h-[240px] w-[240px] rounded-[19.86px] py-[15px] px-[10px] "
          : ""
      }   flex flex-col gap-4 overflow-hidden cursor-pointer`}
    >
      <Image
        src="/info-widg-bg.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-50"
        placeholder="blur"
        blurDataURL="/info-widg-bg.png"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-70"></div>
      <div
        className={`relative z-20 flex flex-col items-start ${
          type === "smallCard"
            ? "gap-[120px]"
            : type === "smallWidget"
            ? "gap-[90px] transition-transform duration-500 transform scale-[1.1] hover:scale-[1]"
            : ""
        } `}
      >
        <div className="w-full flex justify-between items-center ">
          <h2
            className={`font-medium text-white  ${
              type === "smallCard"
                ? " py-[2px] px-[8px] rounded-[24px] leading-[18px] text-[12px]"
                : type === "smallWidget"
                ? "rounded-[19.86px] py-[1.66px] px-[6.62px] leading-[18px] text-[12px]"
                : ""
            } bg-primaryIceGreen `}
          >
            ICE
          </h2>
          <Image
            src="/newsIcon.png"
            width={
              type === "smallCard" ? 15 : type === "smallWidget" ? 12.41 : 1
            }
            height={
              type === "smallCard" ? 15 : type === "smallWidget" ? 12.41 : 1
            }
            alt=""
          />
        </div>

        <div className="flex flex-col gap-[3.31px]">
          <h4 className="text-primaryWhite font-semibold text-[10px]">
            Vanguard
          </h4>
          <h3 className="text-primaryWhite font-semibold text-[16px] leading-[24px]">
            Shareholders Enjoy a Massive Windfall as BP Expands Glob...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
