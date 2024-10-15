"use client";
import Sidebar from "@/app/components/Sidebar";
import { useShowDashboard } from "../context/ShowDashboardContext";
import EditWidget from "../components/EditWidget";
import DashboardContainer from "../components/DashboardContainer";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { RootLayoutType } from "../assets/TypeExports";

const MainLayout = ({ children }: RootLayoutType) => {
  const { showDashboard, setShowDashboard } = useShowDashboard();

  function openDashboard() {
    setShowDashboard(true);
  }

  const dashboardVariants = {
    hidden: {
      scale: 0.3,
      x: "233.33%",
      opacity: 1,
    },
    visible: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    invisible: {
      scale: 0.3,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="h-screen flex w-full p-0 bg-backGray transition-all duration-1000 overflow-x-hidden">
      {showDashboard ? (
        <>
          <Sidebar />

          <motion.div
            className="h-screen flex flex-1 flex-col bg-backGray ml-[22.5px] overflow-x-hidden"
            initial="hidden"
            animate="visible"
            variants={dashboardVariants}
          >
            {children}
          </motion.div>
        </>
      ) : (
        <div className="w-full h-screen bg-backGray flex overflow-y-scroll pr-5">
          <EditWidget />

          <div className="flex flex-col">
            <div className="min-w-[400px] flex flex-col gap-4 pt-[50px] pb-[10px] ">
              <div className="w-full max-h-[196.1px] overflow-y-scroll hide-scrollbar">
                <motion.div
                  className="transform scale-y-[0.3] scale-x-[0.3] origin-top-left w-full"
                  initial="hidden"
                  animate="invisible"
                  variants={dashboardVariants}
                >
                  <DashboardContainer />
                </motion.div>
              </div>
            </div>
            <Button
              onClick={openDashboard}
              className="px-[14px] self-center bg-backGray hover:bg-backBlack"
            >
              <span className="text-primaryWhite font-medium text-[14px] leading-[20px]">
                Done
              </span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
