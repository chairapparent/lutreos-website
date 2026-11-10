import Image from "next/image";
import { InstagramMoments } from "../components/InstagramMoments";
import { Reveal } from "../components/Reveal";
import { SiteHeader } from "../components/SiteHeader";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-cobalt text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_10%,rgba(143,166,201,0.28),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_90%_80%,rgba(20,20,20,0.35),transparent_55%)]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-10 lg:pb-16">
            <hr className="section-rule animate-rule border-0 bg-white/90" />

            <h1 className="animate-rise delay-1 mt-6 max-w-3xl font-serif text-[clamp(1.7rem,3.8vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.02em] text-white">
              We help our clients get where they want to go.
            </h1>

            <p className="animate-rise delay-2 mt-4 max-w-xl font-serif text-base leading-relaxed text-white/85 sm:text-lg">
              Supported living services that help people with developmental
              disabilities navigate obstacles and make real progress in their
              lives.
            </p>

            <div className="animate-rise delay-3 mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center bg-white px-5 py-3 font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-cobalt transition-colors duration-300 hover:bg-paper"
              >
                Get in touch
              </a>
              <a
                href="#mission"
                className="inline-flex items-center border border-white/40 px-5 py-3 font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                Our mission
              </a>
            </div>
          </div>
        </section>

        <section id="mission" className="concrete-wash relative">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-28">
            <Reveal>
              <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-cobalt">
                Mission
              </p>
              <hr className="section-rule mt-5" />
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] text-ink">
                Treasure in
                <br />
                jars of clay.
              </h2>
            </Reveal>

            <Reveal delayMs={120} className="space-y-6">
              <p className="font-serif text-[1.2rem] leading-[1.65] text-ink sm:text-[1.35rem]">
                It&apos;s a big and confusing world, often filled with obstacles.
                We help those with disabilities navigate those obstacles and get
                where they want to go in life.
              </p>
              <p className="font-serif text-lg leading-relaxed text-ink/75">
                Lutreos provides supported living services—steady, personal
                support that facilitates success and progress for each
                individual we walk alongside.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="support" className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <Reveal>
              <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-sky-wash">
                What we do
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4vw,3.1rem)] font-bold uppercase leading-[0.98] tracking-[0.02em]">
                Supported living,
                <span className="text-sky-wash"> shaped around the person.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-10 border-t border-white/12 pt-10 md:grid-cols-3 md:gap-8">
              {[
                {
                  title: "Daily living support",
                  body: "Practical help with the rhythms of home and community, so clients can live with dignity and momentum.",
                },
                {
                  title: "Navigation & advocacy",
                  body: "We help clear paths through systems, schedules, and obstacles that can otherwise stall progress.",
                },
                {
                  title: "Individual progress",
                  body: "Goals belong to the person. Our work is to facilitate success on their terms, one step at a time.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delayMs={index * 100}>
                  <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cobalt">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-[0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-serif text-base leading-relaxed text-white/72">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="moments" className="concrete-wash">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <Reveal className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-cobalt">
                  Moments
                </p>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[0.98] tracking-[0.02em] text-ink">
                  Life, quietly shared.
                </h2>
                <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed text-ink/75">
                  Follow along for updates from Lutreos on Facebook and
                  Instagram.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/lutreos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 border border-ink/15 bg-white/60 px-4 py-2.5 font-display text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-cobalt hover:text-cobalt"
                >
                  Facebook
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://www.instagram.com/_lutreos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 border border-ink/15 bg-white/60 px-4 py-2.5 font-display text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-cobalt hover:text-cobalt"
                >
                  Instagram @_lutreos
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <InstagramMoments />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-cobalt text-white">
          <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_15%_20%,rgba(143,166,201,0.28),transparent_55%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 lg:px-10 lg:py-28">
            <Reveal>
              <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                Contact
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.4rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] text-white">
                Ready to talk
                <br />
                about support?
              </h2>
              <p className="mt-5 max-w-lg font-serif text-lg leading-relaxed text-white/80">
                Reach out by email or phone. We&apos;d be glad to listen and help
                you take the next step.
              </p>
            </Reveal>

            <Reveal delayMs={140} className="space-y-6 border-t border-white/20 pt-8 text-white lg:border-t-0 lg:pt-0">
              <div>
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Email
                </p>
                <a
                  href="mailto:hello@lutreos.com"
                  className="mt-2 inline-block font-serif text-2xl text-white transition-opacity duration-300 hover:text-white hover:opacity-85 sm:text-3xl"
                >
                  hello@lutreos.com
                </a>
              </div>
              <div>
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Phone
                </p>
                <a
                  href="tel:+15302328265"
                  className="mt-2 inline-block font-serif text-2xl text-white transition-opacity duration-300 hover:text-white hover:opacity-85 sm:text-3xl"
                >
                  530-232-8265
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://www.facebook.com/lutreos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors duration-300 hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/_lutreos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/85 transition-colors duration-300 hover:text-white"
                >
                  Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-12 text-center sm:px-8 lg:px-10 lg:py-14">
          <Image
            src="/brand/logo/lutreos-wordmark-one-color-white.svg"
            alt="Lutreos"
            width={280}
            height={68}
            className="h-10 w-auto opacity-95 sm:h-12"
          />
          <p className="mt-5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-concrete">
            Supported Living Services
          </p>
          <blockquote className="mt-6 max-w-xl">
            <p className="font-serif text-sm italic leading-relaxed text-white/65 sm:text-base">
              “But we have this treasure in jars of clay, to show that the
              surpassing power belongs to God and not to us.”
            </p>
            <cite className="mt-3 block font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-concrete not-italic">
              2 Corinthians 4:7
            </cite>
          </blockquote>
        </div>
      </footer>
    </div>
  );
}
