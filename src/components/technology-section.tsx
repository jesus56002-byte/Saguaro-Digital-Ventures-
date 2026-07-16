import { Reveal } from "@/components/reveal";
import {
  NextjsIcon,
  TypeScriptIcon,
  TailwindIcon,
  SupabaseIcon,
  StripeIcon,
  AnthropicIcon,
  VercelIcon,
} from "@/components/tech-icons";

const technologies = [
  { name: "Next.js", icon: NextjsIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "Stripe", icon: StripeIcon },
  { name: "Claude API", icon: AnthropicIcon },
  { name: "Vercel", icon: VercelIcon },
];

export function TechnologySection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-24" aria-label="Technology">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Built with Modern Technology
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
            {technologies.map(({ name, icon: Icon }) => (
              <li key={name} className="flex flex-col items-center gap-3">
                <Icon className="h-7 w-7 text-foreground/60 transition-colors hover:text-foreground" />
                <span className="text-xs font-medium text-muted">{name}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-12 text-center text-xs text-muted/70">
          Logos are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}
