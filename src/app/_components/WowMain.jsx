"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function WowMain({ children, TagName = "div" }) {
  const mainRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    const initWow = () => {
      import("wowjs").then((module) => {
        const WOW = module.default;
        const wow = new WOW.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 80,
          mobile: true,
          live: true,
        });
        wow.init();
      });
    };
    1;
    if (typeof window !== "undefined") {
      initWow();

      const handleRouteChange = () => {
        if (typeof window.WOW !== "undefined") {
          window.WOW.sync();
        }
      };

      if (mainRef.current) {
        handleRouteChange();
      }
    }
  }, [mainRef, pathname]);

  return (
    <TagName className="wow-main-loaded" ref={mainRef}>
      {children}
    </TagName>
  );
}
