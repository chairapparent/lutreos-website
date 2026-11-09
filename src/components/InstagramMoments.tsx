"use client";

import Image from "next/image";
import { useEffect } from "react";

const moments = [
  {
    src: "/brand/imagery/mockup-plaque.jpg",
    alt: "Lutreos wordmark on a cobalt plaque against concrete",
  },
  {
    src: "/brand/imagery/mockup-tote.jpg",
    alt: "Lutreos tote and tag in concrete tones",
  },
  {
    src: "/brand/imagery/mockup-letterhead-desk.jpg",
    alt: "Lutreos letterhead on a desk",
  },
  {
    src: "/brand/imagery/mockup-notebook.jpg",
    alt: "Lutreos notebook with ink wordmark",
  },
];

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
    <div className="space-y-10">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {moments.map((moment, index) => (
          <a
            key={moment.src}
            href="https://www.instagram.com/_lutreos/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/5] overflow-hidden bg-ink"
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            <Image
              src={moment.src}
              alt={moment.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
            <span className="absolute bottom-3 left-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/90">
              @_lutreos
            </span>
          </a>
        ))}
      </div>

      <div className="overflow-hidden border border-concrete/50 bg-white/70">
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
    </div>
  );
}
