import { DepotCardProps } from "../assets/TypeExports";
import ChartTabs from "./DepotChartTabs";

const DepotCard = ({ type }: DepotCardProps) => {
  return <ChartTabs type={type} />;
};

export default DepotCard;
