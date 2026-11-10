"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export function InstagramMoments() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    const processEmbeds = () => {
      window.instgrm?.Embeds.process();
    };

    if (existing) {
      processEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[540px] overflow-hidden border border-concrete/50 bg-white/70">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/_lutreos/"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: "0 auto",
          maxWidth: "540px",
          minWidth: "280px",
          width: "100%",
        }}
      >
        <a
          href="https://www.instagram.com/_lutreos/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-5 py-8 text-center font-serif text-base leading-relaxed text-ink/80"
        >
          View Lutreos on Instagram
        </a>
      </blockquote>
    </div>
  );
}
