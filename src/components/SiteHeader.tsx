import Image from "next/image";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#support", label: "Support" },
  { href: "#moments", label: "Moments" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="group inline-flex items-center" aria-label="Lutreos home">
          <Image
            src="/brand/logo/lutreos-wordmark-one-color-white.svg"
            alt="Lutreos"
            width={148}
            height={36}
            priority
            className="h-7 w-auto opacity-95 transition-opacity duration-300 group-hover:opacity-100 sm:h-8"
          />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center border border-white/35 px-3.5 py-2 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
        >
          Reach us
        </a>
      </div>
    </header>
  );
}
