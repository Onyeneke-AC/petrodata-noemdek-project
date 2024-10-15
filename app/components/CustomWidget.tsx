import { type ComponentType, type SyntheticEvent, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { WidgetComponentProps } from "../assets/TypeExports";
import CustomAddRemoveWidget from "./CustomAddRemoveWidget";

function WidgetComponent({
  custom,
  Component,
  title,
  description,
}: WidgetComponentProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="relative bg-lightGray p-4 w-[350px] h-[440px] rounded-[24px] flex flex-col items-center justify-between">
      <div className="flex flex-col w-[312px] h-[44px] gap-[2px]">
        <h1 className="text-secondaryWhite font-medium text-[16px] leading-[24px]">
          {title}
        </h1>
        <p className="font-normal text-[12px] leading-[18px] text-primaryTextGray">
          {description}
        </p>
      </div>
      <CustomAddRemoveWidget custom={custom} selectedTab={selectedTab} />
      <div className="mt-4 w-full ">
        <div
          className={`transition-opacity duration-1000 ease-in-out px-9 ${
            selectedTab === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {selectedTab === 0 && <Component type="smallWidget" />}
        </div>
        <div
          className={`transition-opacity duration-1000 px-1 ease-in-out ${
            selectedTab === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {selectedTab === 1 && <Component type="mediumWidget" />}
        </div>
        <div
          className={`transition-opacity duration-1000 px-9 ease-in-out ${
            selectedTab === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {selectedTab === 2 && <Component type="largeWidget" />}
        </div>
      </div>
      <div>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            marginTop: "10px",
            width: "150px",
            height: "36px",
          }}
        >
          <Tab
            label="S"
            sx={{
              color: "#FAFAFA",
              backgroundColor: "#525252",
              minWidth: "36px",
              minHeight: "36px",
              border: "1px solid #737373",
              borderRadius: "50px",
            }}
          />
          <Tab
            label="M"
            sx={{
              color: "#FAFAFA",
              backgroundColor: "#525252",
              minWidth: "36px",
              minHeight: "36px",
              borderRadius: "50px",
            }}
          />
          <Tab
            label="L"
            sx={{
              color: "#FAFAFA",
              backgroundColor: "#525252",
              minWidth: "36px",
              minHeight: "36px",
              borderRadius: "50px",
            }}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default WidgetComponent;
