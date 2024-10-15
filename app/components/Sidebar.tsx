"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

import { usePathname } from "next/navigation";
import { useShowDashboard } from "../context/ShowDashboardContext";
import { sidebarItems } from "../assets/tabledata";

const Sidebar = () => {
  const { showDashboard } = useShowDashboard();
  const [open, setOpen] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(true);

  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      setHidden(false);
    } else {
      const timeout = setTimeout(() => setHidden(true), 370);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  function handleOpen() {
    setOpen((curOpen) => !curOpen);
  }

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: showDashboard ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 500, damping: 10, duration: 0 }}
      className={`transition-all duration-700 ${
        open ? "w-16" : "w-60"
      } bg-backBlack flex flex-col gap-40 relative`}
    >
      <div className="w-[153px] h-[32px] font-medium text-[24px] leading-[32px] flex items-center justify-between gap-2 mt-6 pl-4">
        <Image src="/logo.png" width={17.92} height={30.72} alt="" />
        <motion.span
          className={`text-sideTextGray transition-opacity duration-500 ${
            open ? "opacity-0" : "opacity-100"
          } `}
        >
          <span className="text-primarySideGreen">Petro</span>data
        </motion.span>
      </div>

      <div
        className={`absolute transition-all duration-700 top-[82px] z-[999] ${
          !open ? "left-[222px]" : "left-[45px]"
        }`}
      >
        <Button
          className="bg-backGray w-10 h-10 transition-all duration-300"
          onClick={handleOpen}
        >
          {open ? (
            <Image src="/sideForward.png" alt="" width={10} height={8.33} />
          ) : (
            <Image src="/sideBack.png" alt="" width={10} height={8.33} />
          )}
        </Button>
      </div>
      <div className=" flex flex-col items-start gap-2 border-r border-r-lightGray">
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`w-full flex items-center gap-3 py-3 px-5 hover:bg-backGray hover:rounded-l-3xl ${
              pathname === item.href ? "border-r border-r-primarySideGreen" : ""
            }`}
          >
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt=""
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
            />
            <motion.span
              className={`font-medium text-[16px] leading-6  tracking-wide transition-all duration-500 ${
                pathname === item.href
                  ? "text-primarySideGreen"
                  : "text-primaryTextGray"
              } ${open ? "opacity-0" : "opacity-100"} ${
                hidden ? "block" : "hidden"
              }`}
            >
              {item.label}
            </motion.span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
