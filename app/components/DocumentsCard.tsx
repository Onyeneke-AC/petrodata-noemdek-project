import Image from "next/image";
import { DocumentsCardProps } from "../assets/TypeExports";
import { documents } from "../assets/tabledata";

const DocumentsCard = ({ type }: DocumentsCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        type === "smallCard"
          ? "h-[290px] w-[266px] rounded-[24px] p-4 gap-4 "
          : type === "mediumWidget"
          ? "h-[149.8px] w-[312px] rounded-[12.4px] p-2 gap-1"
          : type === "smallWidget"
          ? "h-[240px] w-[240px] rounded-[19.86px] p-4 gap-1"
          : type === "largeWidget"
          ? "h-[240px] w-[240px] rounded-[9.54px] px-[6px] py-2 gap-1 "
          : type === "mediumCard"
          ? "h-[290px] w-[556px] rounded-[24px] p-4 gap-4"
          : type === "largeCard"
          ? "h-[604px] w-[556px] rounded-[24px] p-3 gap-1"
          : ""
      }  bg-backBlack overflow-hidden  `}
    >
      {documents.map((item) => (
        <div
          key={item.id}
          className={` ${
            type === "smallCard"
              ? "mb-4"
              : type === "mediumWidget"
              ? "w-[295.47px] h-[98.66px] transition-transform duration-500 transform scale-[1.1] hover:scale-[1] mb-11 "
              : type === "smallWidget"
              ? "mb-9 transition-transform duration-500 transform scale-[1.1] hover:scale-[1]"
              : type === "mediumCard"
              ? "w-[540px] h-[191px] mb-4 flex flex-col gap-3"
              : type === "largeCard"
              ? "mb-2"
              : type === "largeWidget"
              ? "transition-transform duration-500 transform scale-[1.1] hover:scale-[1]"
              : ""
          }`}
        >
          <div
            className={`flex items-center justify-start ${
              type === "smallWidget" || type === "smallCard"
                ? "gap-2 mb-5"
                : type === "mediumWidget" || type === "mediumCard"
                ? "gap-1 mb-2"
                : type === "largeWidget" || type === "largeCard"
                ? "mb-2 mt-1 gap-1"
                : ""
            }`}
          >
            <div
              className={` ${
                type === "smallCard" ||
                type === "mediumCard" ||
                type === "largeCard"
                  ? "w-[32px] h-[32px]"
                  : type === "mediumWidget"
                  ? "w-[16.53px] h-[16.53px]"
                  : type === "smallWidget"
                  ? "w-[26.48px] h-[26.48px]"
                  : type === "largeWidget"
                  ? "w-[12.72px] h-[12.72px]"
                  : ""
              } bg-primaryWhite flex items-center justify-center rounded-full`}
            >
              <Image
                src="/document.png"
                width={
                  type === "smallCard" ||
                  type === "mediumCard" ||
                  type === "largeCard"
                    ? 13.33
                    : type === "mediumWidget"
                    ? 6.89
                    : type === "smallWidget"
                    ? 11.03
                    : type === "largeWidget"
                    ? 5.3
                    : 1
                }
                height={
                  type === "smallCard" ||
                  type === "mediumCard" ||
                  type === "largeCard"
                    ? 16.67
                    : type === "mediumWidget"
                    ? 8.61
                    : type === "smallWidget"
                    ? 13.79
                    : type === "largeWidget"
                    ? 6.62
                    : 1
                }
                alt=""
              />
            </div>
            <span
              className={` ${
                type === "smallCard" ||
                type === "mediumCard" ||
                type === "largeCard"
                  ? "text-[12px] leading-[18px]"
                  : type === "mediumWidget"
                  ? "text-[6.2px] leading-[9.3px]"
                  : type === "smallWidget"
                  ? "text-[9.93px] leading-[14.9px]"
                  : type === "largeWidget"
                  ? "text-[4.77px] leading-[7.15px]"
                  : ""
              }  font-medium text-primaryWhite`}
            >
              {item.report}
            </span>
          </div>

          <div
            className={` ${
              type === "smallCard"
                ? " grid grid-cols-2 gap-[12px]"
                : type === "mediumWidget"
                ? "grid grid-cols-3 gap-[8px]"
                : type === "smallWidget"
                ? "grid grid-cols-2 gap-[9.93px]"
                : type === "largeWidget"
                ? "grid grid-cols-5 gap-[4.77px]"
                : type === "mediumCard"
                ? "grid grid-cols-3 gap-[16px]"
                : type === "largeCard"
                ? "grid grid-cols-5 justify-items-center items-center mb-3"
                : ""
            }  `}
          >
            {item.reportDocs.map((doc) => (
              <div
                key={doc.id}
                className={`flex ${
                  type === "smallCard"
                    ? "flex-col gap-2 mb-1"
                    : type === "mediumWidget"
                    ? "bg-[#333333] gap-[5px] py-[4.65px] px-[3.62px] rounded-[7.23px] w-[93.5px] h-[34.61px]"
                    : type === "smallWidget"
                    ? "flex-col gap-[3.31px]"
                    : type === "largeWidget"
                    ? "flex-col gap-[3.18px]"
                    : type === "mediumCard"
                    ? "bg-[#333333] gap-[6px] py-[9px] px-[9px] rounded-[14px] w-[160px] h-[57px]"
                    : type === "largeCard"
                    ? "flex-col gap-[8px] w-[104px] h-[89px]"
                    : ""
                }  items-center`}
              >
                <Image
                  src={doc.src}
                  alt={doc.alt}
                  width={
                    type === "smallCard"
                      ? 48
                      : type === "mediumWidget"
                      ? 20.15
                      : type === "smallWidget"
                      ? 39.72
                      : type === "largeWidget"
                      ? 19.07
                      : type === "mediumCard"
                      ? 30
                      : type === "largeCard"
                      ? 48
                      : 1
                  }
                  height={
                    type === "smallCard"
                      ? 63
                      : type === "mediumWidget"
                      ? 25.31
                      : type === "smallWidget"
                      ? 52.14
                      : type === "largeWidget"
                      ? 25.03
                      : type === "mediumCard"
                      ? 40
                      : type === "largeCard"
                      ? 63
                      : 1
                  }
                  className={`${
                    type === "smallCard"
                      ? "rounded-md"
                      : type === "mediumWidget"
                      ? "rounded-[2.07px]"
                      : type === "smallWidget"
                      ? "rounded-[3.31px]"
                      : type === "largeWidget"
                      ? "rounded-[1.59px]"
                      : type === "largeCard" || type === "mediumCard"
                      ? "rounded-[4px]"
                      : ""
                  }`}
                />

                <div
                  className={`flex justify-between gap-[0.5px] ${
                    type === "mediumWidget"
                      ? "flex-col gap-[3.1px] items-start"
                      : type === "mediumCard"
                      ? "flex-col gap-[6px] items-start"
                      : type === "smallWidget" ||
                        type === "largeWidget" ||
                        type === "smallCard" ||
                        type === "largeCard"
                      ? "items-center gap-[0.5px]"
                      : ""
                  } `}
                >
                  <span
                    className={`${
                      type === "smallCard" ||
                      type === "mediumCard" ||
                      type === "largeCard"
                        ? "leading-[18px] text-[12px]"
                        : type === "mediumWidget"
                        ? "leading-[9.3px] text-[6.2px]"
                        : type === "smallWidget"
                        ? "leading-[14.9px] text-[9.93px]"
                        : type === "largeWidget"
                        ? "leading-[7.15px] text-[4.77px]"
                        : ""
                    } text-sideTextGray font-normal`}
                  >
                    {doc.name}
                  </span>
                  <span
                    className={`${
                      type === "smallCard" ||
                      type === "mediumCard" ||
                      type === "largeCard"
                        ? "leading-[18px] text-[12px]"
                        : type === "mediumWidget"
                        ? "leading-[9.3px] text-[6.2px]"
                        : type === "smallWidget"
                        ? "leading-[14.9px] text-[9.93px]"
                        : type === "largeWidget"
                        ? "leading-[7.15px] text-[4.77px]"
                        : ""
                    } text-sideTextGray font-normal`}
                  >
                    {type !== "mediumWidget" && type !== "mediumCard" && (
                      <span> - </span>
                    )}
                    {doc.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentsCard;
