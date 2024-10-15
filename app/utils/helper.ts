import { Layout } from "react-grid-layout";
import { Widget } from "../assets/TypeExports";

export function formatToK(num: number): string {
  if (num >= 1000) {
    const truncated = Math.floor(num / 1000);
    return `${truncated}k`;
  }
  return num.toString();
}

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
    value
  );

export function generateLayout(widgets: Widget[]) {
  const layout: Layout[] = [];
  let x = 0;
  let y = 0;

  widgets.forEach((widget, index) => {
    let w, h;
    switch (widget.type) {
      case "smallWidget":
        w = 2.83;
        h = 5;
        break;
      case "mediumWidget":
        w = 5.7;
        h = 5;
        break;
      case "largeWidget":
        w = 5.7;
        h = 10;
        break;
      default:
        w = 2.83;
        h = 5;
    }

    if (x + w > 12) {
      x = 0;
      y += h;
    }

    layout.push({ i: `item${index}`, x, y, w, h });
    x += w;
  });

  return layout;
}
