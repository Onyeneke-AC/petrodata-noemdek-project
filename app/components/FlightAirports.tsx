import { flights } from "../assets/tabledata";
import { ChartTabProps } from "../assets/TypeExports";

const FlightAirports = ({ type }: ChartTabProps) => {
  const sliceNum: number | string =
    type === "mediumWidget" || type === "mediumCard" ? 20 : 100;

  return (
    <div
      className={`${
        type === "mediumCard"
          ? "w-[260px] h-[290px] py-[24px] px-[16px] rounded-tr-[24px] rounded-br-[24px]"
          : type === "mediumWidget"
          ? "w-[133.27px] h-[149.8px] py-[12.4px] px-[8.26px] rounded-tr-[12.4px] rounded-br-[12.4px]  shadow-2xl"
          : type === "largeWidget"
          ? "w-[240px] h-[95.76px] py-[9.54px] px-[6.36px] rounded-br-[9.54px] rounded-bl-[9.54px]  shadow-2xl"
          : type === "largeCard"
          ? "w-[556px] h-[241px] py-[24px] px-[16px] rounded-br-[24px] rounded-bl-[24px]"
          : ""
      } bg-[#404040] flex flex-col justify-between`}
    >
      {flights.map((flight) => (
        <div
          key={flight.airport}
          className={`${
            type === "mediumCard"
              ? "text-[12px] leading-[18px] gap-[2px]"
              : type === "mediumWidget"
              ? "text-[6.2px] leading-[9.3px] gap-[2px] "
              : type === "largeWidget"
              ? "text-[4.77px] leading-[7.15px] gap-[2px] "
              : type === "largeCard"
              ? "text-[12px] leading-[18px] gap-[2px] "
              : ""
          }  flex items-center justify-between `}
        >
          <p className=" text-[#fafafa] font-medium">
            {sliceNum >= 100
              ? flight.airport
              : flight.airport.slice(0, sliceNum) + "..."}
          </p>
          <p className="text-[#d4d4d4] font-normal">{flight.amount} flights</p>
        </div>
      ))}
    </div>
  );
};

export default FlightAirports;
