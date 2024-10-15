import CustomAreaChart from "./CustomAreaChart";
import { DepotSmallChartProps } from "../assets/TypeExports";
import { formatCurrency } from "../utils/helper";

const DepotSmallChart = ({ tableData, type }: DepotSmallChartProps) => {
  return (
    <div className="">
      <div
        className={`${
          type === "smallWidget"
            ? "w-[213.52px] h-[72.29px]"
            : "w-[258px] h-[87.35px] px-1"
        } `}
      >
        <CustomAreaChart
          data={tableData.chartData.data}
          color={tableData.chartData.color}
          type={type}
        />
      </div>
      <div className="flex items-center justify-between px-[7px]">
        <p
          className={`font-medium ${
            type === "smallWidget"
              ? " text-[39.72px] leading-[49.66px] "
              : type === "smallCard"
              ? " text-[48px] leading-[60px] "
              : ""
          }text-secondaryWhite`}
        >
          {formatCurrency(tableData.value)}
        </p>
        <div
          className={`font-medium ${
            type === "smallWidget"
              ? " text-[9.93px] leading-[14.9px] "
              : type === "smallCard"
              ? " text-[12px] leading-[18px] "
              : ""
          }  flex flex-col text-[#12b76a]`}
        >
          <span className="text-right">{tableData.percent}</span>
          <span className="text-right">+0.09%</span>
        </div>
      </div>
    </div>
  );
};

export default DepotSmallChart;
