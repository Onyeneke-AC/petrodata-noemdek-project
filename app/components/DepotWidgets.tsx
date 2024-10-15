import WidgetComponent from "./CustomWidget";
import DepotCard from "./DepotCard";

const DepotWidgets = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-6">
      <WidgetComponent
        custom="depot"
        Component={DepotCard}
        title="Depot Widget"
        description="Monitor depot prices on a weekly basis"
      />
    </div>
  );
};

export default DepotWidgets;
