import { FC, useEffect, useState } from "react";
import { AreaChart, Area, ReferenceLine } from "recharts";
import { CustomAreaChartProps } from "../assets/TypeExports";

const CustomAreaChart: FC<CustomAreaChartProps> = ({
  data,
  color,
  strokeWidth = 1.5,
  type,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const average =
    Number(
      data &&
        data?.reduce((sum, entry) => sum + (entry?.value ?? 0), 0) /
          (data?.length || 1)
    ) || 0;

  const gradientId = `colorUv-${color.replace("#", "")}`;

  const customStrokeWidth =
    type === "mediumCard" || type === "largeCard"
      ? strokeWidth
      : type === "smallWidget" || type === "smallCard"
      ? 3
      : 0.5;

  const chartWidth =
    type === "mediumCard" || type === "largeCard"
      ? 165.4
      : type === "mediumWidget"
      ? 85.44
      : type === "largeWidget"
      ? 65.72
      : type === "smallWidget"
      ? 213.52
      : type === "smallCard"
      ? 243
      : 1;

  const chartHeight =
    type === "mediumCard" || type === "largeCard"
      ? 46.88
      : type === "mediumWidget"
      ? 24.22
      : type === "largeWidget"
      ? 18.63
      : type === "smallWidget"
      ? 72.29
      : type === "smallCard"
      ? 87.35
      : 1;

  return (
    <AreaChart
      width={chartWidth}
      height={chartHeight}
      data={data}
      className="h-[100%] w-[100%]"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.5} />
          <stop offset="90%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>

      <Area
        type="monotone"
        dataKey="value"
        stroke={color}
        fillOpacity={1}
        fill={`url(#${gradientId})`}
        strokeWidth={customStrokeWidth}
      />
      <ReferenceLine
        y={average}
        stroke={color}
        strokeDasharray="7 5"
        strokeWidth={customStrokeWidth}
      />
    </AreaChart>
  );
};

export default CustomAreaChart;
