import WidgetComponent from "./CustomWidget";
import DocumentsCard from "./DocumentsCard";

const ReportWidgets = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-6">
      <WidgetComponent
        custom="report"
        Component={DocumentsCard}
        title="Report Widget"
        description="Get comprehensive reports and insights"
      />
    </div>
  );
};

export default ReportWidgets;
