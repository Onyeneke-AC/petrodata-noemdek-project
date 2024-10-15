import { Dispatch, type SetStateAction } from "react";
import {
  BarChartDataProps,
  docs,
  FlightTypes,
  NewsProps,
  sidebarItemsType,
  sidebarType,
  TableItem,
  Widget,
} from "./TypeExports";

export const chartTabData: TableItem[] = [
  {
    percent: 0.37,
    tag: "green",
    value: +714.26,
    label: "Lagos",
    abbreviation: "NIPCO",
    chartData: {
      data: [
        {
          name: "2007",
          value: 100,
        },
        {
          name: "2008",
          value: 300,
        },
        {
          name: "2009",
          value: 250,
        },
        {
          name: "2010",
          value: 350,
        },
        {
          name: "2011",
          value: 170,
        },
        {
          name: "2007",
          value: 100,
        },
        {
          name: "2008",
          value: 300,
        },
        {
          name: "2009",
          value: 250,
        },
        {
          name: "2010",
          value: 350,
        },
        {
          name: "2011",
          value: 170,
        },
      ],
      color: "#12b76a",
    },
  },
  {
    percent: +0.37,
    tag: "green",
    value: 714.26,
    label: "Rivers",
    abbreviation: "Oando PLC",
    chartData: {
      data: [
        {
          name: "2007",
          value: 800,
        },
        {
          name: "2008",
          value: 900,
        },
        {
          name: "2009",
          value: 250,
        },
        {
          name: "2010",
          value: 350,
        },
        {
          name: "2011",
          value: 170,
        },
      ],
      color: "#12b76a",
    },
  },
  {
    percent: 0.37,
    value: 714.26,
    tag: "green",
    label: "Oyo",
    abbreviation: "MRS Oil Nigeria P...",
    chartData: {
      color: "#12b76a",
    },
  },
];

export const tableData: TableItem[] = [
  {
    percent: 0.37,
    tag: "green",
    value: +714.26,
    label: "Premium Motor Spirit",
    abbreviation: "PMS",
    chartData: {
      data: [
        {
          name: "2007",
          value: 100,
        },
        {
          name: "2008",
          value: 300,
        },
        {
          name: "2009",
          value: 250,
        },
        {
          name: "2010",
          value: 350,
        },
        {
          name: "2011",
          value: 170,
        },
      ],
      color: "#12b76a",
    },
  },
  {
    percent: -9.01,
    tag: "red",
    value: 1249.06,
    label: "Automotive Gas Oil",
    abbreviation: "AGO",
    chartData: {
      data: [
        {
          name: "2007",
          value: 100,
        },
        {
          name: "2008",
          value: 300,
        },
        {
          name: "2009",
          value: 250,
        },
        {
          name: "2010",
          value: 350,
        },
        {
          name: "2011",
          value: 170,
        },
      ],
      color: "#f04438",
    },
  },
  {
    percent: 0.0,
    value: 0.0,
    tag: "green",
    label: "ICE Brent Crude",
    abbreviation: "ICE",
    chartData: {
      color: "gray",
    },
  },
  {
    percent: -50.9,
    value: 1088.92,
    tag: "red",
    label: "Dual Purpose Kerosene",
    abbreviation: "DPK",
    chartData: {
      data: [
        {
          name: "2007",
          value: 100,
        },
        {
          name: "2008",
          value: 300,
        },
        {
          name: "2009",
          value: 250,
        },
        {
          name: "2010",
          value: 350,
        },
        {
          name: "2011",
          value: 170,
        },
      ],
      color: "#f04438",
    },
  },
];

export const documents: docs = [
  {
    id: 1,
    report: "Reports - Week 31",
    reportDocs: [
      {
        id: 1,
        name: "PMS",
        date: "Aug 12 - 17",
        src: "/letter-widg.png",
        alt: "",
        width: 39.72,
        height: 52.14,
      },
      {
        id: 2,
        name: "DPK",
        date: "Aug 12 - 17",
        src: "/letter-widg.png",
        alt: "",
        width: 39.72,
        height: 52.14,
      },
      {
        id: 3,
        name: "AGO",
        date: "Aug 12 - 17",
        src: "/letter-widg.png",
        alt: "",
        width: 39.72,
        height: 52.14,
      },
      {
        id: 4,
        name: "ICE",
        date: "Aug 12 - 17",
        src: "/letter-widg.png",
        alt: "",
        width: 39.72,
        height: 52.14,
      },
    ],
  },
  {
    id: 2,
    report: "Reports - Week 30",
    reportDocs: [
      {
        id: 1,
        name: "PMS",
        date: "Aug 12 - 17",
        src: "/letter-widg.png",
        alt: "",
        width: 39.72,
        height: 52.14,
      },
      {
        id: 2,
        name: "DPK",
        date: "Aug 12 - 17",
        src: "/letter-widg.png",
        alt: "",
        width: 39.72,
        height: 52.14,
      },
      {
        id: 3,
        name: "AGO",
        date: "Aug 12 - 17",
        src: "/letter-widg.png",
        alt: "",
        width: 39.72,
        height: 52.14,
      },
      {
        id: 4,
        name: "ICE",
        date: "Aug 12 - 17",
        src: "/letter-widg.png",
        alt: "",
        width: 39.72,
        height: 52.14,
      },
    ],
  },
];

export const NewsData: NewsProps[] = [
  {
    section: "Top Stories",
    main: [
      {
        vendor: "Vanguard",
        product: ["ICE"],
        title:
          "Shareholders Enjoy a Massive Windfall as BP Expands Global Operations",
        description:
          "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
        image: "/info-widg.png",
      },
      {
        vendor: "Vanguard",
        product: ["ICE"],
        title: "Eni granted regulator consent for NAOC sales to Oando",
        description:
          "Eni received formal consent from the Nigerian Upstream Petroleum Regulatory Commission (NUPRC) for the sale of Nigerian Agip Oil Co. (NAOC) Ltd. to Oando Plc. Having already obtained all other relevant local and regulatory authorities’ authorizations, the consent allows Eni to proceed to the completion of the deal, the company said in a release July 24.",
        image: "/oando.png",
      },
      {
        vendor: "Vanguard",
        product: ["AGO", "PMS"],
        title:
          "Chappal Energies to acquire SPDC JV interest in Nigeria from TotalEnergies",
        description:
          "Chappal Energies Mauritius Ltd. has agreed to acquire from TotalEnergies EP Nigeria its 10% interest in SPDC joint venture licenses in Nigeria for $860 million. SPDC JV is an unincorporated joint venture between Nigerian National Petroleum Corp. Ltd. (55%), Shell Petroleum Development Co. of Nigeria (30%, operator), TotalEnergies EP Nigeria (10%), and NAOC (5%), which holds 18 licenses in the Niger Delta.",
        image: "/total.png",
      },
    ],
  },

  {
    section: "For You",
    main: [
      {
        vendor: "Vanguard",
        product: ["ICE", "AGO", "PMS"],
        title:
          "Dangote Refinery Products Inferior To Imported Ones; Nigeria Can't Rely On Them Alone To Avoid Monopoly – Nigerian Age",
        description:
          "Frouk Ahmed, the Chief Executive of the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA) has cautioned Nigerians against over-dependence on products from the Dangote refinery. Ahmed highlighted concerns over the consistency and standardisation of the refinery's output, stating that the quality of its products was inferior compared to the imported quality products.",
        image: "/dangote.png",
      },
    ],
  },
];

export const barChartData: BarChartDataProps[] = [
  {
    name: "21 Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    av: 2000,
    bv: 9800,
    cv: 2290,
  },
  {
    name: "31 Jan",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    av: 2000,
    bv: 9800,
    cv: 2290,
  },
  {
    name: "7 Feb",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    av: 2780,
    bv: 3908,
    cv: 2000,
  },
  {
    name: "14 Feb",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    av: 2000,
    bv: 9800,
    cv: 2290,
  },
];

export const flights: FlightTypes[] = [
  {
    airport: "Muritala Muhammed International Airport",
    amount: 12489,
  },
  {
    airport: "Mallam Aminu Kano International Airport",
    amount: 10722,
  },
  {
    airport: "Nnamdi Azikiwe International Airport",
    amount: 934483,
  },
  {
    airport: "Port Harcout International Airport",
    amount: 9823,
  },
  {
    airport: "Akanu Ibiam International Airport",
    amount: 489,
  },
  {
    airport: "Muritala Muhammed Local Airport",
    amount: 89,
  },
];

export const sidebarItems: sidebarItemsType[] = [
  { label: "Dashboard", icon: "/dashboard.png", href: "/dashboard" },
  { label: "Analysis", icon: "/analysis.png", href: "/analysis" },
  { label: "News & Report", icon: "/news.png", href: "/news" },
  { label: "Exclusive Report", icon: "/report.png", href: "/report" },
  { label: "Watchlist", icon: "/watchlist.png", href: "/watchlist" },
  { label: "Settings", icon: "/settings.png", href: "/settings" },
];

export const widgetSidebarItems: sidebarType[] = [
  { label: "Product retail price", icon: "/productTag.png", id: 0 },
  { label: "Flight widget", icon: "/flightSide.png", id: 1 },
  { label: "Depot widget", icon: "/depotSide.png", id: 2 },
  { label: "News widget", icon: "/newsSide.png", id: 3 },
  { label: "Report widget", icon: "/reportSide.png", id: 4 },
];

export type ShowDashboardContextType = {
  showDashboard: boolean;
  setShowDashboard: Dispatch<SetStateAction<boolean>>;
};

export const initialWidgets: Widget[] = [
  {
    id: 1,
    custom: "product",
    type: "mediumWidget",
  },
  {
    id: 2,
    custom: "flight",
    type: "mediumWidget",
  },
  {
    id: 3,
    custom: "news",
    type: "smallWidget",
  },
  {
    id: 4,
    custom: "report",
    type: "smallWidget",
  },
  {
    id: 5,
    custom: "depot",
    type: "mediumWidget",
  },
];
