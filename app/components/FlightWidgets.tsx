import WidgetComponent from "./CustomWidget";
import FlightCard from "./FlightCard";

const FlightWidgets = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-6">
      <WidgetComponent
        custom="flight"
        Component={FlightCard}
        title="Flight Widget"
        description="View the weekly number of flights categorized by international and domestic routes."
      />
    </div>
  );
};

export default FlightWidgets;
