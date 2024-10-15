import WidgetComponent from "@/app/components/CustomWidget";
import StockPrice from "@/app/components/StockPrice";

const ProductPage = () => {
  return (
    <div className="flex flex-1">
      <WidgetComponent
        custom="product1"
        Component={StockPrice}
        title="Retail product"
        description="View price quotes and track performance throughout the week"
      />
    </div>
  );
};

export default ProductPage;
