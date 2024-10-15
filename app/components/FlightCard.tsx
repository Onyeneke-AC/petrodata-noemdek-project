import { CardTypes, ChartTabProps } from "../assets/TypeExports";
import CustomBarChart from "./CustomBarChart";
import FlightAirports from "./FlightAirports";

const FlightCard = ({ type }: ChartTabProps) => {
  return (
    <div
      className={`${
        type === "mediumCard"
          ? "w-[556px] h-[290px] flex"
          : type === "smallWidget"
          ? "w-[240px] h-[240px]"
          : type === "mediumWidget"
          ? "w-[312px] h-[150px] flex"
          : type === "largeWidget"
          ? "w-[240px] h-[240px] flex flex-col"
          : type === "largeCard"
          ? "w-[556px] h-[604px] flex flex-col"
          : ""
      } `}
    >
      <CustomBarChart type={type} />
      {type !== "smallWidget" && type !== "smallCard" && (
        <FlightAirports type={type} />
      )}
    </div>
  );
};

export default FlightCard;
