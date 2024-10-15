import CustomTable from "./CustomTable";
import { tableData } from "../assets/tabledata";
import { ChartTabProps } from "../assets/TypeExports";

const StockPrice = ({ type }: ChartTabProps) => {
  return (
    <div
      className={`overflow-hidden ${
        type === "mediumCard"
          ? "w-[556px] h-[290px] rounded-[24px]"
          : type === "smallWidget"
          ? "w-[240px] h-[240px] rounded-[19.86px]"
          : type === "mediumWidget"
          ? "w-[312px] h-[149.8px] rounded-[12.4px]"
          : type === "largeWidget"
          ? "w-[240px] h-[240px] rounded-[9.54px] "
          : type === "smallCard"
          ? "w-[266px] h-[290px] rounded-[24px]"
          : type === "largeCard"
          ? "w-[556px] h-[604px] rounded-[24px]"
          : ""
      } bg-backBlack flex items-center`}
    >
      <CustomTable tableData={tableData} type={type} />
    </div>
  );
};

export default StockPrice;
