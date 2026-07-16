import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background"
      aria-label="Introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gold/20 blur-3xl dark:bg-gold/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-saguaro/15 blur-3xl dark:bg-saguaro/10"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-24">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted uppercase">
            Arizona-based software company
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Building practical software inspired by the resilience of the Southwest.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Saguaro Digital Ventures creates modern software that helps people make
            smarter decisions through thoughtful engineering, intuitive design, and
            practical technology.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/#products"
              className="rounded-full bg-cactus-deep px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cactus-deep/20"
            >
              Explore Products
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <Image
              src="/images/hero-saguaro.jpg"
              alt="A majestic saguaro cactus silhouetted against a golden Arizona sunset, with mountains stretching along the horizon"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
