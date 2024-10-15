"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const DashboardRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      router.replace("/dashboard");
    }
  }, [pathname, router]);

  return null;
};

export default DashboardRedirect;
