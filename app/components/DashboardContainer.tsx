"use client";
import ReactGridLayout from "react-grid-layout";
import DocumentsCard from "./DocumentsCard";
import Header from "./Header";
import StockPrice from "./StockPrice";
import { useShowDashboard } from "../context/ShowDashboardContext";
import { useWidget } from "../context/WidgetContext";
import ChartTabs from "./DepotChartTabs";
import Button from "./Button";
import FlightCard from "./FlightCard";
import NewsCardItem from "./NewsCardItem";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Widget } from "../assets/TypeExports";
import { generateLayout } from "../utils/helper";

const DashboardContainer = () => {
  const { showDashboard, setShowDashboard } = useShowDashboard();
  const { widgets } = useWidget();

  function closeDashboard() {
    setShowDashboard(false);
  }

  function renderWidget(widget: Widget) {
    switch (`${widget.custom}&&${widget.type}`) {
      case "product&&smallWidget":
        return <StockPrice type="smallCard" />;
      case "product&&mediumWidget":
        return <StockPrice type="mediumCard" />;
      case "product&&largeWidget":
        return <StockPrice type="largeCard" />;
      case "flight&&smallWidget":
        return <FlightCard type="smallCard" />;
      case "flight&&mediumWidget":
        return <FlightCard type="mediumCard" />;
      case "flight&&largeWidget":
        return <FlightCard type="largeCard" />;
      case "news&&smallWidget":
        return <NewsCardItem type="smallCard" />;
      case "news&&mediumWidget":
        return <NewsCardItem type="mediumCard" />;
      case "news&&largeWidget":
        return <NewsCardItem type="largeCard" />;
      case "report&&smallWidget":
        return <DocumentsCard type="smallCard" />;
      case "report&&mediumWidget":
        return <DocumentsCard type="mediumCard" />;
      case "report&&largeWidget":
        return <DocumentsCard type="largeCard" />;
      case "depot&&smallWidget":
        return <ChartTabs type="smallCard" />;
      case "depot&&mediumWidget":
        return <ChartTabs type="mediumCard" />;
      case "depot&&largeWidget":
        return <ChartTabs type="largeCard" />;
      default:
        return null;
    }
  }

  const layoutConfig = generateLayout(widgets);

  return (
    <div className="max-w-[1232px] m-auto flex flex-col gap-10 px-8 py-5">
      {showDashboard && <Header />}

      <div className="flex flex-col gap-4 pb-10 ">
        {widgets.length !== 0 ? (
          <ReactGridLayout
            layout={layoutConfig}
            cols={12}
            rowHeight={40}
            autoSize={true}
            margin={[10, 23]}
            containerPadding={[0, 0]}
            width={1200}
            draggableCancel=".no-drag"
          >
            {widgets.map((widget, index) => (
              <div key={`item${index}`}>{renderWidget(widget)}</div>
            ))}
          </ReactGridLayout>
        ) : (
          <p className="w-full text-center text-primaryWhite text-[16px]">
            No widgets available 😓. Click <strong>Edit Widget</strong> add some
            😁.
          </p>
        )}
        <div className="w-full flex items-center justify-center mt-6">
          {showDashboard && (
            <Button
              onClick={closeDashboard}
              className="px-[14px] self-center bg-backGray hover:bg-backBlack"
            >
              <span className="text-primaryWhite font-medium text-[14px] leading-[20px]">
                Edit Widget
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
