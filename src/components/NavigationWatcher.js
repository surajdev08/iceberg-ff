"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavigationWatcher() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait a brief tick for the DOM to finish mounting/updating
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && typeof window.bootIceberg === "function") {
        window.bootIceberg();
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
