import { useWidget } from "../context/WidgetContext";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { CustomAddRemoveWidgetProps } from "../assets/TypeExports";

const CustomAddRemoveWidget = ({
  custom,
  selectedTab,
}: CustomAddRemoveWidgetProps) => {
  const { widgets, addWidget, removeWidget } = useWidget();

  let widgetType: string;

  selectedTab === 0
    ? (widgetType = "smallWidget")
    : selectedTab === 1
    ? (widgetType = "mediumWidget")
    : selectedTab === 2
    ? (widgetType = "largeWidget")
    : "";

  const handleAddWidget = () => {
    addWidget(widgetType, custom);
  };

  const handleRemoveWidget = (id: number) => {
    removeWidget(id);
  };

  const isWidgetInArray = () => {
    return widgets.some(
      (widget) => widget.type === widgetType && widget.custom === custom
    );
  };

  const widgetId = widgets.find(
    (widget) => widget.type === widgetType && widget.custom === custom
  )?.id;

  // Define styles for each widget type
  const widgetStyles = {
    smallWidget: "absolute top-[90px] left-[40px]",
    mediumWidget: "absolute top-[142px] left-[8px]",
    largeWidget: "absolute top-[82px] left-[40px]",
  };

  // Determine the current widget style based on selectedTab
  const currentWidgetStyle =
    selectedTab === 0
      ? widgetStyles.smallWidget
      : selectedTab === 1
      ? widgetStyles.mediumWidget
      : selectedTab === 2
      ? widgetStyles.largeWidget
      : "";

  return (
    <div>
      <div
        className={`cursor-pointer flex space-x-2 z-50 ${currentWidgetStyle}`}
      >
        {!isWidgetInArray() && (
          <IconButton
            onClick={handleAddWidget}
            sx={{
              backgroundColor: "#00897B",
              height: "36px",
              width: "36px",
              "&:hover": {
                color: "#FAFAFA",
                backgroundColor: "#262626",
                cursor: "pointer",
              },
            }}
          >
            <Add sx={{ color: "#FAFAFA" }} />
          </IconButton>
        )}
        {isWidgetInArray() && (
          <IconButton
            onClick={() =>
              widgetId !== undefined && handleRemoveWidget(widgetId)
            }
            sx={{
              backgroundColor: "#00897B",
              height: "36px",
              width: "36px",
              "&:hover": {
                color: "#FAFAFA",
                backgroundColor: "#262626",
                cursor: "pointer",
              },
            }}
          >
            <Remove sx={{ color: "#FAFAFA" }} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default CustomAddRemoveWidget;
