import { ChartTabProps } from "../assets/TypeExports";
import NewsCard from "./NewsCard";
import NewsCardMediumLarge from "./NewsCardMediumLarge";

const NewsCardItem = ({ type }: ChartTabProps) => {
  return (
    <div>
      {(type === "smallCard" || type === "smallWidget") && (
        <NewsCard type={type} />
      )}

      {(type === "mediumWidget" ||
        type === "largeWidget" ||
        type === "mediumCard" ||
        type === "largeCard") && <NewsCardMediumLarge type={type} />}
    </div>
  );
};

export default NewsCardItem;
