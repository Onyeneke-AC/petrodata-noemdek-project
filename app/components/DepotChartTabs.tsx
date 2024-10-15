"use client";

import { ReactNode, type SyntheticEvent, useState } from "react";
import CustomTable from "./CustomTable";
import { chartTabData, tableData } from "../assets/tabledata";
import Button from "./Button";
import Image from "next/image";
import { CardTypes, ChartTabProps, TabPanelProps } from "../assets/TypeExports";
import DepotSmallChart from "./DepotSmallChart";

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
          className={`${
            type === "mediumCard"
              ? "max-h-[184.6px] overflow-y-scroll"
              : type === "smallWidget" || type === "smallCard"
              ? "overflow-y-hidden"
              : type === "mediumWidget"
              ? "max-h-[95.36px] overflow-y-scroll"
              : type === "largeWidget"
              ? "max-h-[192.13px] overflow-y-scroll"
              : type === "largeCard"
              ? "max-h-[520px] overflow-y-scroll"
              : ""
          } max-w-full p-0`}
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

const ChartTabs = ({ type }: ChartTabProps) => {
  const [value, setValue] = useState(0);

  function handleChange(event: SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <div
      className={`${
        type === "mediumCard"
          ? "w-[556px] h-[290px] rounded-[24px] items-start gap-[10px]"
          : type === "smallWidget"
          ? "w-[240px] h-[240px] rounded-[19.86px] items-center gap-4"
          : type === "mediumWidget"
          ? "w-[312px] h-[149.8px] rounded-[12.4px] items-start"
          : type === "largeWidget"
          ? "w-[240px] h-[240px] rounded-[9.54px] items-start"
          : type === "smallCard"
          ? "w-[266px] h-[290px] rounded-[19.86px] items-center gap-8"
          : type === "largeCard"
          ? "w-[556px] h-[604px] rounded-[24px] items-start"
          : ""
      }  bg-backBlack flex flex-col relative overflow-hidden `}
    >
      <div className="flex items-center justify-between w-full mt-3">
        <div className="flex items-center justify-between gap-1">
          <div
            className={`${
              type === "smallCard" ||
              type === "mediumCard" ||
              type === "largeCard"
                ? "w-[32px] h-[32px] ml-3"
                : type === "smallWidget"
                ? "w-[26.48px] h-[26.48px] ml-3"
                : type === "mediumWidget"
                ? "w-[16.53px] h-[16.53px] ml-3"
                : type === "largeWidget"
                ? "w-[12.72px] h-[12.72px] ml-3"
                : ""
            }  rounded-full bg-primaryWhite flex items-center justify-center `}
          >
            <Image
              src="/depot.png"
              width={
                type === "smallCard" ||
                type === "mediumCard" ||
                type === "largeCard"
                  ? 16.67
                  : type === "smallWidget"
                  ? 13.79
                  : type === "mediumWidget"
                  ? 8.61
                  : type === "largeWidget"
                  ? 6.62
                  : 1
              }
              height={
                type === "smallCard" ||
                type === "mediumCard" ||
                type === "largeCard"
                  ? 15.7
                  : type === "smallWidget"
                  ? 12.99
                  : type === "mediumWidget"
                  ? 8.11
                  : type === "largeWidget"
                  ? 6.24
                  : 1
              }
              alt=""
            />
          </div>
          <span
            className={`${
              type === "smallCard" ||
              type === "mediumCard" ||
              type === "largeCard"
                ? "leading-[18px] text-[12px]"
                : type === "smallWidget"
                ? "leading-[14.9px] text-[9.93px]"
                : type === "mediumWidget"
                ? "leading-[9.3px] text-[6.2px]"
                : type === "largeWidget"
                ? "leading-[7.15px] text-[4.77px]"
                : type === "edit"
                ? "leading-[5.84px] text-[3.9px]"
                : ""
            } text-primaryWhite font-medium `}
          >
            Depot
          </span>
        </div>
        {(type === "smallWidget" || type === "smallCard") && (
          <div className="flex flex-col justify-end pr-3">
            <div className="flex items-center gap-[2px] justify-end">
              <Image
                src="/positive.png"
                width={type === "smallCard" ? 8 : 6.62}
                height={type === "smallCard" ? 8 : 6.62}
                alt=""
              />
              <span className="font-semibold text-[11.59px] leading-[16.55px] text-primaryWhite">
                {chartTabData[0].abbreviation}
              </span>
            </div>
            <span className="text-right font-medium text-[9.93px] leading-[14.9px] text-[#a3a3a3]">
              {chartTabData[0].label}
            </span>
          </div>
        )}
      </div>
      <CustomTabPanel value={value} index={0} type={type}>
        {type === "smallWidget" || type === "smallCard" ? (
          <DepotSmallChart type={type} tableData={chartTabData[0]} />
        ) : (
          <CustomTable tableData={chartTabData} type={type} />
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} type={type}>
        {type === "smallWidget" || type === "smallCard" ? (
          <DepotSmallChart type={type} tableData={tableData[0]} />
        ) : (
          <CustomTable tableData={tableData} type={type} />
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} type={type}>
        {type === "smallWidget" || type === "smallCard" ? (
          <DepotSmallChart type={type} tableData={chartTabData[0]} />
        ) : (
          <CustomTable tableData={chartTabData} type={type} />
        )}
      </CustomTabPanel>
      <div className=" pl-5 pb-2 w-full border-t border-t-[#404040]">
        <div className="flex gap-2 ">
          <Button
            className={`${
              type === "smallWidget" ||
              type === "smallCard" ||
              type === "mediumCard" ||
              type === "largeCard"
                ? "px-1 py-2 text-[12px] leading-[18px]"
                : type === "mediumWidget"
                ? "text-[6.2px] leading-[9.3px] px-1 py-2"
                : type === "largeWidget"
                ? "text-[4.77px] leading-[7.15px] px-1 py-2"
                : ""
            } font-medium no-drag hover:bg-transparent hover:text-primarySideGreen ${
              value === 0
                ? "border-b-0 border-x-0 text-primarySideGreen border-t-2 rounded-none border-t-primarySideGreen"
                : "text-sideTextGray border-none"
            }`}
            onClick={(event) => handleChange(event, 0)}
            {...a11yProps(0)}
          >
            PMS
          </Button>
          <Button
            className={`${
              type === "smallWidget" ||
              type === "smallCard" ||
              type === "mediumCard" ||
              type === "largeCard"
                ? "px-1 py-2 text-[12px] leading-[18px]"
                : type === "mediumWidget"
                ? "text-[6.2px] leading-[9.3px] px-1 py-2"
                : type === "largeWidget"
                ? "text-[4.77px] leading-[7.15px] px-1 py-2"
                : ""
            }  font-medium no-drag hover:bg-transparent hover:text-primarySideGreen ${
              value === 1
                ? "border-b-0 border-x-0  rounded-none text-primarySideGreen border-t-2 border-t-primarySideGreen "
                : "text-sideTextGray border-none"
            }`}
            onClick={(event) => handleChange(event, 1)}
            {...a11yProps(1)}
          >
            AGO
          </Button>
          <Button
            className={`${
              type === "smallWidget" ||
              type === "smallCard" ||
              type === "mediumCard" ||
              type === "largeCard"
                ? "px-1 py-2 text-[12px] leading-[18px]"
                : type === "mediumWidget"
                ? "text-[6.2px] leading-[9.3px] px-1 py-2"
                : type === "largeWidget"
                ? "text-[4.77px] leading-[7.15px] px-1 py-2"
                : ""
            } font-medium no-drag hover:bg-transparent hover:text-primarySideGreen ${
              value === 2
                ? "border-b-0 border-x-0 rounded-none text-primarySideGreen border-t-2 border-t-primarySideGreen"
                : "text-sideTextGray border-none"
            }`}
            onClick={(event) => handleChange(event, 2)}
            {...a11yProps(2)}
          >
            DPK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChartTabs;
