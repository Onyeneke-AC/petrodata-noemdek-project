import { type SyntheticEvent, useState } from "react";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FlightWidgets from "./FlightWidgets";
import DepotWidgets from "./DepotWidgets";
import NewsWidgets from "./NewsWidgets";
import ReportWidgets from "./ReportWidgets";
import ProductWidgets from "./ProductWidgets";
import { SideTabProps } from "../assets/TypeExports";
import { widgetSidebarItems } from "../assets/tabledata";

function TabPanel(props: SideTabProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
        value === index ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
      {...other}
    >
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange: (event: SyntheticEvent, newValue: number) => void = (
    event,
    newValue
  ) => {
    setValue(newValue);
  };

  return (
    <div className="flex w-full gap-20">
      <div className="w-[200px] h-[280px] flex flex-col gap-6">
        <div className="w-full h-[44px] gap-2 text-xs rounded-full ring-[1px] ring-darkerGray px-[14px] py-[10px] bg-lightGray flex items-center">
          <Image src="/search.png" alt="" width={15} height={15} />
          <input
            type="text"
            placeholder="Search..."
            className="w-[144px] h-[24px] p-2 outline-none bg-transparent font-normal text-[16px] leading-[24px] text-sideTextGray"
          />
        </div>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{ gap: "8px", flexGrow: 1, justifyContent: "space-between" }}
        >
          {widgetSidebarItems.map((item) => (
            <Tab
              key={item.id}
              label={item.label}
              icon={
                <Image
                  src={item.icon}
                  alt=""
                  width={15.16}
                  height={15.16}
                  style={{ objectFit: "cover", width: "auto", height: "auto" }}
                />
              }
              iconPosition="start"
              sx={{
                width: "100%",
                height: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
                paddingX: "14px",
                paddingY: "2px",
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "20px",
                letterSpacing: "0.025em",
                "&:hover": {
                  backgroundColor: "#404040",
                  borderRadius: "36px",
                },
                transition: "all 0.3s",
              }}
              {...a11yProps(item.id)}
            />
          ))}
        </Tabs>
      </div>
      <div className="relative w-[724px] h-[280px]">
        <TabPanel value={value} index={0}>
          <ProductWidgets />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FlightWidgets />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DepotWidgets />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <NewsWidgets />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ReportWidgets />
        </TabPanel>
      </div>
    </div>
  );
}

export default VerticalTabs;
