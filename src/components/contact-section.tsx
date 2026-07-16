"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";

const CONTACT_EMAIL = "hello@saguarodigitalventures.com";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Message from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="bg-background py-24 sm:py-28" aria-label="Contact">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&rsquo;s Build Something Great
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Have a question, a product idea, or a partnership in mind? We&rsquo;d love
              to hear from you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 grid max-w-xl gap-5 rounded-2xl border border-border bg-surface p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-cactus-deep"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-cactus-deep"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-cactus-deep"
              />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex w-fit items-center rounded-full bg-cactus-deep px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send Message
            </button>

            <p className="text-sm text-muted" role="status" aria-live="polite">
              {status === "sent"
                ? "Thanks — your email client should now be open to send your message."
                : " "}
            </p>
          </form>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center gap-2 text-center text-sm text-muted">
            <p>
              Prefer email? Reach us directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-terracotta transition-colors hover:text-clay"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="text-xs text-muted/70">LinkedIn — coming soon</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
