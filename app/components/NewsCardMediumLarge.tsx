import Image from "next/image";
import { ChartTabProps } from "../assets/TypeExports";
import { NewsData } from "../assets/tabledata";

const NewsCardMediumLarge = ({ type }: ChartTabProps) => {
  return (
    <div
      className={`${
        type === "largeWidget"
          ? "w-[240px] h-[240px] rounded-[9.54px] overflow-hidden"
          : type === "mediumWidget"
          ? "w-[312px] h-[149.8px] rounded-[12.4px] overflow-hidden pt-[20px]"
          : type === "mediumCard"
          ? "w-[556px] h-[290px] rounded-[24px] overflow-hidden px-2"
          : type === "largeCard"
          ? "w-[556px] h-[604px] rounded-[24px] overflow-hidden pt-[20px] px-2"
          : ""
      } flex items-center py-[10px] justify-center bg-[#171717]`}
    >
      <div
        className={`"flex flex-col w-full  ${
          type === "largeWidget"
            ? "h-[212.52px] rounded-[9.54px] overflow-hidden"
            : type === "mediumWidget"
            ? "h-[126.44px] overflow-hidden "
            : type === "mediumCard"
            ? "h-[230px] overflow-hidden m-auto"
            : type === "largeCard"
            ? "h-[532.5px] overflow-hidden m-auto "
            : ""
        }"`}
      >
        {NewsData.map((item) => (
          <div
            className={`rounded-[9.54px] flex flex-col divide-y divide-[#36353A] px-[8.26px] bg-[#171717] mb-[5px] ${
              type === "largeCard" && "gap-[6px]"
            } `}
            key={item.section}
          >
            <div className="flex items-center justify-between">
              <h2
                className={`font-bold ${
                  type === "mediumCard" || type === "largeCard"
                    ? "text-[16px] leading-[24px]"
                    : "text-[6.36px] leading-[9.54px]"
                }  text-[#f04438]`}
              >
                {item.section}
              </h2>
              <Image
                src="/newsIcon.png"
                alt=""
                width={
                  type === "mediumCard" || type === "largeCard" ? 15 : 5.96
                }
                height={
                  type === "mediumCard" || type === "largeCard" ? 15 : 5.96
                }
              />
            </div>
            {item.main.map((detail) => (
              <div
                className="flex items-start
               justify-between py-[3px] gap-[6.36px]"
                key={detail.title}
              >
                <div className="flex flex-col gap-[3.18px]">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`${
                        type === "mediumCard" || type === "largeCard"
                          ? "text-[7px] leading-[13px] font-extrabold"
                          : " text-[3.97px] leading-[6.36px]"
                      } text-[#737373] `}
                    >
                      {detail.vendor}
                    </h3>
                    <div
                      className={`flex items-center ${
                        type === "mediumCard" || type === "largeCard"
                          ? "gap-[4px]"
                          : "gap-[1.59px]"
                      } `}
                    >
                      {detail.product.map((prod) => (
                        <p
                          key={prod}
                          className={`${
                            type === "mediumCard" || type === "largeCard"
                              ? "rounded-[24px] px-[8px] text-[10px] leading-[16px] h-[16px] w-[33px]"
                              : " rounded-[12.4px] px-[4.13px] text-[3.97px] leading-[6.36px] h-[9px] w-[17.26px]"
                          }  flex justify-center items-center  bg-[#00796B]     font-medium text-[#ffffff]`}
                        >
                          {prod}
                        </p>
                      ))}
                    </div>
                  </div>
                  <h2
                    className={`font-semibold ${
                      type === "mediumCard" || type === "largeCard"
                        ? "text-[16px] leading-[24px]"
                        : " text-[6.36px] leading-[9.54px]"
                    } text-[#fafafa]`}
                  >
                    {detail.title.length > 100
                      ? detail.title.slice(0, 100) + "..."
                      : detail.title}
                  </h2>
                  <p
                    className={`font-normal ${
                      type === "mediumCard" || type === "largeCard"
                        ? "text-[12px] leading-[18px]"
                        : " text-[4.77px] leading-[7.15px]"
                    }  text-[#a3a3a3]`}
                  >
                    {detail.description.slice(0, 150) + "..."}
                  </p>
                </div>
                <div>
                  <Image
                    src={detail.image}
                    alt=""
                    width={
                      type === "mediumCard" || type === "largeCard" ? 75 : 29.8
                    }
                    height={
                      type === "mediumCard" || type === "largeCard" ? 75 : 29.8
                    }
                    className={`${
                      type === "mediumCard" || type === "largeCard"
                        ? "rounded-[8px]"
                        : "rounded-[3.18px]"
                    } `}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCardMediumLarge;
