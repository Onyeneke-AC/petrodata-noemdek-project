import WidgetComponent from "./CustomWidget";
import StockPrice from "./StockPrice";

const ProductWidgets = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-6">
      <WidgetComponent
        custom="product"
        Component={StockPrice}
        title="Report Widget"
        description="Get comprehensive reports and insights"
      />
    </div>
  );
};

export default ProductWidgets;
