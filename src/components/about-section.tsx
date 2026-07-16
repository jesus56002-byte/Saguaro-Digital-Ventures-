import { Reveal } from "@/components/reveal";

const principles = [
  {
    title: "Thoughtful Engineering",
    description: "Every decision is intentional. We value quality over speed.",
  },
  {
    title: "Practical Solutions",
    description: "We solve real problems instead of building technology for its own sake.",
  },
  {
    title: "Long-Term Thinking",
    description: "We build products that continue creating value well into the future.",
  },
  {
    title: "Simplicity",
    description: "Powerful software should still feel approachable and intuitive.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 sm:py-28" aria-label="About us">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Who We Are
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Saguaro Digital Ventures is an Arizona-based software company dedicated
                to building practical digital products that solve real-world problems.
              </p>
              <p>
                Rather than chasing trends, we focus on creating software that remains
                useful for years to come.
              </p>
              <p>
                Our products are designed with thoughtful engineering, clear user
                experiences, and long-term value in mind.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={80 * i}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
