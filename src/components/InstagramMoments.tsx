"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

function widenEmbed(root: HTMLElement) {
  const media = root.querySelector<HTMLElement>(".instagram-media");
  const iframe = root.querySelector<HTMLIFrameElement>("iframe");

  for (const el of [media, iframe]) {
    if (!el) continue;
    el.style.setProperty("width", "100%", "important");
    el.style.setProperty("max-width", "100%", "important");
    el.style.setProperty("min-width", "100%", "important");
  }
}

export function InstagramMoments() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const processEmbeds = () => {
      window.instgrm?.Embeds.process();
      // Instagram writes fixed widths after process; stretch after it settles.
      window.setTimeout(() => widenEmbed(root), 200);
      window.setTimeout(() => widenEmbed(root), 800);
      window.setTimeout(() => widenEmbed(root), 1600);
    };

    const observer = new MutationObserver(() => widenEmbed(root));
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "width", "height"],
    });

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    if (existing) {
      processEmbeds();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="instagram-moments-embed w-full overflow-hidden border border-concrete/50 bg-white/70"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/_lutreos/"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: 0,
          maxWidth: "100%",
          minWidth: "100%",
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
