import { FC } from "react";
import { TableCell, TableRow } from "@mui/material";
import Image from "next/image";
import CustomAreaChart from "./CustomAreaChart";
import { CustomTableRowProps } from "../assets/TypeExports";
import { formatCurrency } from "../utils/helper";

const CustomTableRow: FC<CustomTableRowProps> = ({ row, type, last }) => {
  const { label, tag, abbreviation, chartData, percent, value } = row;

  return (
    <TableRow
      sx={{
        height:
          type === "smallCard" || type === "mediumCard" || type === "largeCard"
            ? "56px"
            : type === "smallWidget"
            ? "46.9px"
            : type === "mediumWidget"
            ? "28.93px"
            : type === "largeWidget"
            ? "22.25px"
            : "",
        width: "100%",
        padding:
          type === "mediumCard" || type === "largeCard"
            ? "16px"
            : type === "smallCard" || type === "smallWidget"
            ? "5.79px 13.24px"
            : type === "mediumWidget"
            ? "8.26px"
            : type === "largeWidget"
            ? "6.36px"
            : "",
        display: "flex",
        justifyContent: "space-between",
        gap:
          type === "smallWidget" ? "3.31px" : type === "smallCard" ? "4px" : "",
        alignItems: "center",
        borderBottom:
          type === "smallWidget" || last ? "none" : "1px solid #36353A",
        borderBottomColor: "tableBorder",
      }}
    >
      <TableCell
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width:
            type === "mediumCard" || type === "largeCard"
              ? "198.6px"
              : type === "smallCard" || type === "smallWidget"
              ? "170px"
              : type === "mediumWidget"
              ? "127.39px"
              : type === "largeWidget"
              ? "97.99px"
              : "",
          height:
            type === "mediumCard" || type === "largeCard"
              ? "42px"
              : type === "smallCard"
              ? "38px"
              : type === "smallWidget"
              ? "30px"
              : type === "mediumWidget"
              ? "23.07px"
              : type === "largeWidget"
              ? "17.59px"
              : "",
          border: "none",
          marginBottom:
            type === "smallCard" || type === "smallWidget" ? "15%" : "5%",
          gap: "1px",
        }}
      >
        <div className="flex items-center gap-[3px]">
          <Image
            alt=""
            src={tag === "green" ? "/positive.png" : "/negative.png"}
            width={
              type === "smallCard" ||
              type === "mediumCard" ||
              type === "largeCard"
                ? 8
                : type === "smallWidget"
                ? 6.62
                : type === "mediumWidget"
                ? 4.13
                : type === "largeWidget"
                ? 3.18
                : 1
            }
            height={
              type === "smallCard" ||
              type === "mediumCard" ||
              type === "largeCard"
                ? 8
                : type === "smallWidget"
                ? 6.62
                : type === "mediumWidget"
                ? 4.13
                : type === "largeWidget"
                ? 3.18
                : 1
            }
          />
          <span
            className={`font-semibold ${
              type === "smallCard" ||
              type === "mediumCard" ||
              type === "largeCard"
                ? "text-[14px] leading-5"
                : type === "smallWidget"
                ? "text-[11.59px] leading-[16.55px]"
                : type === "mediumWidget"
                ? "text-[7.23px] leading-[10.33px]"
                : type === "largeWidget"
                ? "text-[5.56px] leading-[7.95px]"
                : ""
            } text-primaryWhite`}
          >
            {abbreviation}
          </span>
        </div>
        <span
          className={`${
            type === "smallCard" ||
            type === "mediumCard" ||
            type === "largeCard"
              ? "leading-[18px] text-[12px]"
              : type === "smallWidget"
              ? "text-[9.93px] leading-[14.9px]"
              : type === "mediumWidget"
              ? "text-[6.2px] leading-[9.3px]"
              : type === "largeWidget"
              ? "text-[4.77px] leading-[7.15px]"
              : ""
          } font-medium  text-primaryTextGray`}
        >
          {label}
        </span>
      </TableCell>
      {type === "smallCard" || type === "smallWidget" ? (
        ""
      ) : (
        <TableCell
          sx={{
            width:
              type === "mediumCard" || type === "largeCard"
                ? "165.4px"
                : type === "mediumWidget"
                ? "85.44px"
                : type === "largeWidget"
                ? "65.72px"
                : "",
            height:
              type === "mediumCard" || type === "largeCard"
                ? "50.18px"
                : type === "mediumWidget"
                ? "28.93px"
                : type === "largeWidget"
                ? "22.25px"
                : "",
            padding: "0px",
            border: "none",
          }}
        >
          <CustomAreaChart
            data={chartData.data}
            color={chartData.color}
            type={type}
          />
        </TableCell>
      )}
      <TableCell
        sx={{
          width:
            type === "mediumCard" || type === "largeCard"
              ? "162px"
              : type === "mediumWidget"
              ? "82.65px"
              : type === "largeWidget"
              ? "63.58px"
              : "",
          height:
            type === "smallCard" ||
            type === "mediumCard" ||
            type === "largeCard"
              ? "40px"
              : type === "mediumWidget"
              ? "22.07px"
              : type === "largeWidget"
              ? "17.59px"
              : "",
          display: "flex",
          flexDirection: "column",

          alignItems: "end",
          border: "none",
          marginBottom:
            type === "smallCard" || type === "smallWidget" ? "15%" : "5%",
          gap: "1px",
        }}
      >
        <span
          className={`${
            type === "smallCard" ||
            type === "mediumCard" ||
            type === "largeCard"
              ? "text-[12px] leading-[18px]"
              : type === "smallWidget"
              ? "text-[9.93px] leading-[14.9px]"
              : type === "mediumWidget"
              ? "text-[6.2px] leading-[9.3px]"
              : type === "largeWidget"
              ? "text-[4.77px] leading-[7.15px]"
              : ""
          }  font-semibold  text-primaryWhite`}
        >
          {formatCurrency(value)}
        </span>
        <span
          className={`${
            type === "smallCard" ||
            type === "mediumCard" ||
            type === "largeCard"
              ? "text-[12px] leading-[18px]"
              : type === "smallWidget"
              ? "text-[9.93px] leading-[14.9px]"
              : type === "mediumWidget"
              ? "text-[6.2px] leading-[9.3px]"
              : type === "largeWidget"
              ? "text-[4.77px] leading-[7.15px]"
              : ""
          }  font-medium ${
            tag === "green" ? "text-primaryGreen" : "text-primaryRed"
          }`}
        >
          {percent}
        </span>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
