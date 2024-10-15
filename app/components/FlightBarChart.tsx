import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { BarChartDataType } from "../assets/TypeExports";
import { formatToK } from "../utils/helper";

const FlightBarChart = ({ barChartData, type }: BarChartDataType) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const width =
    type === "mediumCard"
      ? 300
      : type === "smallWidget"
      ? 213.52
      : type === "mediumWidget"
      ? 169.2
      : type === "largeWidget"
      ? 227.28
      : type === "largeCard"
      ? 530
      : type === "smallCard"
      ? 262
      : 1;
  const height =
    type === "mediumCard" || type === "smallCard"
      ? 173
      : type === "smallWidget"
      ? 143.28
      : type === "mediumWidget"
      ? 90.07
      : type === "largeWidget"
      ? 93.38
      : type === "largeCard"
      ? 235
      : 1;

  return (
    <div style={{ width, height }}>
      <BarChart
        width={width}
        height={height}
        data={barChartData}
        margin={{
          top: 2,
          right: 20,
          left: 5,
          bottom: 0,
        }}
        maxBarSize={
          type === "smallCard" || type === "mediumCard" || type === "largeCard"
            ? 9
            : 8
        }
        barGap={-5}
      >
        <CartesianGrid strokeDasharray="8 4" stroke="#36353a" />
        <XAxis
          dataKey="name"
          width={58.05}
          height={18}
          className={`${
            type === "smallWidget" ||
            type === "smallCard" ||
            type === "mediumCard" ||
            type === "largeCard"
              ? "text-[12px] leading-[18px]"
              : type === "mediumWidget"
              ? "text-[6.2px] leading-[9.3px]"
              : type === "largeWidget"
              ? "text-[4.77px] leading-[7.15px]"
              : ""
          }  text-[#a3a3a3] font-medium`}
          tickLine={false}
        />
        <YAxis
          width={
            type === "smallCard" ||
            type === "mediumCard" ||
            type === "largeCard"
              ? 32
              : type === "smallWidget"
              ? 10
              : 1
          }
          height={16.38}
          orientation="right"
          className={`${
            type === "smallWidget" ||
            type === "smallCard" ||
            type === "mediumCard" ||
            type === "largeCard"
              ? "text-[12px] leading-[18px]"
              : type === "mediumWidget"
              ? "text-[6.2px] leading-[9.3px]"
              : type === "largeWidget"
              ? "text-[4.77px] leading-[7.15px]"
              : ""
          } text-[#a3a3a3] font-medium`}
          tickLine={false}
          axisLine={false}
          tickFormatter={formatToK}
        />
        <Bar dataKey="pv" stackId="a" fill="#1E88E5" />
        <Bar dataKey="amt" stackId="a" fill="#26A69A" />
        <Bar dataKey="uv" stackId="a" fill="#F79009" />
        <Bar dataKey="av" stackId="b" fill="#1E88E5" />
        <Bar dataKey="bv" stackId="b" fill="#26A69A" />
        <Bar dataKey="cv" stackId="b" fill="#F79009" />
      </BarChart>
    </div>
  );
};

export default FlightBarChart;
