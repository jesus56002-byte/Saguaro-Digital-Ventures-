import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Monte Estate",
  description:
    "Monte Estate is a real estate investment platform that helps investors analyze residential properties using customizable financial scenarios and Monte Carlo simulations.",
};

const capabilities = [
  {
    title: "Customizable Scenarios",
    description:
      "Model rent growth, financing terms, vacancy, and expenses to reflect the assumptions that matter for each deal.",
  },
  {
    title: "Monte Carlo Simulations",
    description:
      "Run thousands of simulated outcomes to understand a property's range of returns, not just a single projection.",
  },
  {
    title: "Clear, Actionable Reporting",
    description:
      "Translate complex financial modeling into straightforward insights that support confident investment decisions.",
  },
];

export default function MonteEstatePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <p className="text-sm font-medium text-terracotta">A Saguaro Digital Ventures product</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Monte Estate
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          A real estate investment platform that helps investors analyze residential
          properties using customizable financial scenarios and Monte Carlo
          simulations, so decisions are grounded in data rather than guesswork.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Interested in Monte Estate?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Get in touch to learn more about access, pricing, or partnership
            opportunities.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center rounded-full bg-cactus-deep px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </Reveal>

      <p className="mt-10 text-sm text-muted">
        <Link href="/#products" className="transition-colors hover:text-foreground">
          &larr; Back to Products
        </Link>
      </p>
    </div>
  );
}
