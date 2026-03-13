"use client";

import { usePathname } from "next/navigation";
import FaqSection from "@/components/sections/foooter/faq";
import ServiceSection from "@/components/sections/service/service-section";

const SERVICE_SKIP = new Set(["/", "/about-us", "/services"]);

export function PostContentSections() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <FaqSection />;
  }

  if (SERVICE_SKIP.has(pathname)) {
    return null;
  }

  return <ServiceSection />;
}
