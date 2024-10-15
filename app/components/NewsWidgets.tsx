import WidgetComponent from "./CustomWidget";
import NewsCardItem from "./NewsCardItem";

const NewsWidgets = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-6">
      <WidgetComponent
        custom="news"
        Component={NewsCardItem}
        title="News Widget"
        description="Get the latest industry news and updates"
      />
    </div>
  );
};

export default NewsWidgets;
