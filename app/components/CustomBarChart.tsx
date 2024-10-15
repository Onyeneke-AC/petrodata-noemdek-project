"use client";

import { ReactNode, type SyntheticEvent, useState } from "react";
import { barChartData } from "../assets/tabledata";
import Button from "./Button";
import Image from "next/image";
import FlightBarChart from "./FlightBarChart";
import {
  CardTypes,
  CustomBarChartProps,
  TabPanelProps,
} from "../assets/TypeExports";

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, type, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div
          className={`max-w-full ${
            type === "largeCard" ? "max-h-[235px]" : "max-h-[184.6px]"
          }  p-0 `}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomBarChart = ({ type }: CustomBarChartProps) => {
  const [value, setValue] = useState(0);

  function handleChange(event: SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <div
      className={`${
        type === "mediumCard"
          ? "w-[296px] h-full rounded-tl-[24px] rounded-bl-[24px]"
          : type === "smallWidget"
          ? "w-[240px] h-[240px] rounded-[19.86px]"
          : type === "mediumWidget"
          ? "w-[178.73px] h-[149.8px] rounded-tl-[12.4px] rounded-bl-[12.4px] shadow-2xl"
          : type === "largeWidget"
          ? "w-[240px] h-[144.24px] rounded-tl-[9.54px] rounded-tr-[9.54px] shadow-2xl pb-0"
          : type === "largeCard"
          ? "w-[556px] h-[363px] rounded-tl-[24px] rounded-tr-[24px] pb-0"
          : type === "smallCard"
          ? "w-[266px] h-[290px] rounded-[24px]"
          : ""
      }  bg-backBlack flex flex-col items-start justify-between  relative overflow-hidden pb-2 px-2`}
    >
      <div
        className={`flex items-center justify-between gap-2 ${
          type === "smallWidget" ||
          type === "smallCard" ||
          type === "mediumCard" ||
          type === "largeCard"
            ? "mt-4"
            : type === "mediumWidget" || type === "largeWidget"
            ? "mt-[8px]"
            : ""
        } `}
      >
        <div
          className={`${
            type === "mediumCard" ||
            type === "smallCard" ||
            type === "largeCard"
              ? "w-[32px] h-[32px]"
              : type === "smallWidget"
              ? "w-[26.48px] h-[26.48px]"
              : type === "mediumWidget"
              ? "w-[16.53px] h-[16.53px]"
              : type === "largeWidget"
              ? "w-[12.72px] h-[12.72px]"
              : ""
          }  rounded-full bg-primaryWhite flex items-center justify-center `}
        >
          <Image
            src="/flight.png"
            width={
              type === "largeCard" ||
              type === "mediumCard" ||
              type === "smallCard"
                ? 15.16
                : type === "smallWidget"
                ? 12.54
                : type === "mediumWidget"
                ? 7.83
                : type === "largeWidget"
                ? 6.02
                : 1
            }
            height={
              type === "largeCard" ||
              type === "mediumCard" ||
              type === "smallCard"
                ? 15.16
                : type === "smallWidget"
                ? 12.54
                : type === "mediumWidget"
                ? 7.83
                : type === "largeWidget"
                ? 6.02
                : 1
            }
            alt=""
          />
        </div>
        <span
          className={`text-primaryWhite ${
            type === "smallWidget" ||
            type === "mediumCard" ||
            type === "smallCard" ||
            type === "largeCard"
              ? "text-[20px] leading-[30px]"
              : type === "mediumWidget"
              ? "text-[10.33px] leading-[15.5px]"
              : type === "largeWidget"
              ? "text-[7.95px] leading-[11.92px]"
              : ""
          }  font-medium  flex justify-center items-center gap-1`}
        >
          284,774{" "}
          <span
            className={`font-normal ${
              type === "smallWidget" ||
              type === "mediumCard" ||
              type === "smallCard" ||
              type === "largeCard"
                ? "text-[12px] leading-[18px]"
                : type === "mediumWidget"
                ? "text-[6.2px] leading-[9.3px]"
                : type === "largeWidget"
                ? "text-[4.77px] leading-[7.15px]"
                : ""
            } text-[#a3a3a3]`}
          >
            Flights
          </span>
        </span>
      </div>
      <CustomTabPanel value={value} index={0} type={type}>
        <FlightBarChart barChartData={barChartData} type={type} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} type={type}>
        <FlightBarChart barChartData={barChartData} type={type} />
      </CustomTabPanel>
      <div className=" pl-5 w-full border-t border-t-[#404040]">
        <div className="flex gap-2">
          <Button
            className={`px-1 py-2  ${
              type === "smallWidget" ||
              type === "mediumCard" ||
              type === "smallCard" ||
              type === "largeCard"
                ? "text-[12px] leading-[18px]"
                : type === "mediumWidget"
                ? "text-[6.2px] leading-[9.3px]"
                : type === "largeWidget"
                ? "text-[4.77px] leading-[7.15px]"
                : ""
            } font-medium no-drag hover:bg-transparent hover:text-primarySideGreen ${
              value === 0
                ? "border-b-0 border-x-0 text-primarySideGreen border-t-2 rounded-none border-t-primarySideGreen"
                : "text-sideTextGray border-none"
            }`}
            onClick={(event) => handleChange(event, 0)}
            {...a11yProps(0)}
          >
            International
          </Button>
          <Button
            className={`px-1 py-2 ${
              type === "smallWidget" ||
              type === "mediumCard" ||
              type === "smallCard" ||
              type === "largeCard"
                ? "text-[12px] leading-[18px]"
                : type === "mediumWidget"
                ? "text-[6.2px] leading-[9.3px]"
                : type === "largeWidget"
                ? "text-[4.77px] leading-[7.15px]"
                : ""
            } font-medium no-drag hover:bg-transparent hover:text-primarySideGreen ${
              value === 1
                ? "border-b-0 border-x-0  rounded-none text-primarySideGreen border-t-2 border-t-primarySideGreen "
                : "text-sideTextGray border-none"
            }`}
            onClick={(event) => handleChange(event, 1)}
            {...a11yProps(1)}
          >
            Local
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomBarChart;
