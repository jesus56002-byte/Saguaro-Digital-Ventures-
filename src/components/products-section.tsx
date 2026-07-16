import Link from "next/link";
import { Reveal } from "@/components/reveal";

const comingSoon = [
  "Our next product is taking shape. Check back soon.",
  "Something new is in the works.",
  "Stay tuned for what we build next.",
];

export function ProductsSection() {
  return (
    <section id="products" className="bg-surface py-24 sm:py-28" aria-label="Products">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-muted">
              Practical software built to last, designed around real problems and real
              people.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="sm:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5">
              <div>
                <span className="inline-flex items-center rounded-full bg-saguaro/10 px-3 py-1 text-xs font-medium text-saguaro dark:bg-saguaro/15">
                  Live Product
                </span>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                  Monte Estate
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  A real estate investment platform that helps investors analyze
                  residential properties using customizable financial scenarios and
                  Monte Carlo simulations.
                </p>
              </div>
              <Link
                href="/products/monte-estate"
                className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-terracotta transition-colors hover:text-clay"
              >
                Learn More
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </Reveal>

          {comingSoon.map((copy, i) => (
            <Reveal key={i} delay={100 * (i + 1)}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-border bg-background/50 p-8">
                <div>
                  <span className="inline-flex items-center rounded-full bg-surface-strong px-3 py-1 text-xs font-medium text-muted">
                    Coming Soon
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground/50">
                    Future Product
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
