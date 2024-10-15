import {
  ComponentType,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  type ReactNode,
} from "react";

export type CardTypes =
  | "smallCard"
  | "mediumCard"
  | "largeCard"
  | "smallWidget"
  | "mediumWidget"
  | "largeWidget";

export type documents = {
  id: number;
  name: string;
  date: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}[];

export type docs = {
  id: number;
  report: string;
  reportDocs: documents;
}[];

type ChartData = {
  name: string;
  value: number;
};

export interface TableItem {
  percent: number;
  value: number;
  label: string;
  tag: string;
  abbreviation: string;
  chartData: {
    data?: ChartData[];
    color: string;
  };
}

type NewsCardMediumLargeProps = {
  title: string;
  description: string;
  vendor: string;
  product: string[];
  image: string;
};

export type NewsProps = {
  section: string;
  main: NewsCardMediumLargeProps[];
};

export type NewsCardTypeProps = {
  type: CardTypes;
};

export type BarChartDataProps = {
  name: number | string;
  uv: number;
  pv: number;
  amt: number;
  av: number;
  bv: number;
  cv: number;
};

export type ButtonProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  imgSrc?: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
};

export type CustomAddRemoveWidgetProps = {
  custom: string;
  selectedTab: number;
};

export type CustomAreaChartProps = {
  data?: { name?: string; value?: number }[];
  color: string;
  strokeWidth?: number;
  type: CardTypes;
};

export type CustomBarChartProps = {
  type: CardTypes;
};

export type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
  type: CardTypes;
};

export type TableRowProps = {
  percent: number;
  value: number;
  label: string;
  tag: string;
  chartData: {
    data?: { name?: string; value?: number }[];
    color: string;
  };
  abbreviation: string;
};

export type CustomTableProps = {
  tableData: TableRowProps[];
  type: CardTypes;
};

export type CustomTableRowProps = {
  row: TableRowProps;
  type: CardTypes;
  last: boolean;
};

export type WidgetComponentProps = {
  custom: string;
  Component: ComponentType<{
    type: CardTypes;
  }>;
  title: string;
  description: string;
};

export type DepotCardProps = { type: CardTypes };

export type ChartTabProps = { type: CardTypes };

export type DepotSmallChartProps = {
  tableData: TableRowProps;
  type: CardTypes;
};

export type DocumentsCardProps = {
  type: CardTypes;
};

export type BarChartDataType = {
  barChartData: BarChartDataProps[];
  type: CardTypes;
};

export type sidebarItemsType = { label: string; icon: string; href: string };

export type FlightTypes = {
  airport: string;
  amount: number;
};

export type sidebarType = {
  label: string;
  icon: string;
  id: number;
};

export type SideTabProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

export type Widget = {
  id: number;
  type: string;
  custom: string;
};

export type WidgetContextType = {
  widgets: Widget[];
  setWidgets: Dispatch<SetStateAction<Widget[]>>;
  addWidget: (type: string, custom: string) => void;
  removeWidget: (id: number) => void;
};

export type RootLayoutType = {
  children: ReactNode;
};
