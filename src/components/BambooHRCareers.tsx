"use client";

import Script from "next/script";

export function BambooHRCareers() {
  return (
    <div className="bamboo-careers">
      <div
        id="BambooHR"
        data-domain="lutreos.bamboohr.com"
        data-version="1.0.0"
        data-departmentId=""
      />
      <Script
        src="https://lutreos.bamboohr.com/js/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
