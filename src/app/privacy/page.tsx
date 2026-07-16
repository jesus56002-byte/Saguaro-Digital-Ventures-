import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Saguaro Digital Ventures.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: July 16, 2026</p>

      <div className="mt-10 space-y-8 text-muted">
        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">Overview</h2>
          <p className="mt-3 leading-relaxed">
            Saguaro Digital Ventures (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            respects your privacy. This policy explains what information we collect
            through this website, how we use it, and the choices you have.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Information We Collect
          </h2>
          <p className="mt-3 leading-relaxed">
            When you submit our contact form, we receive the information you provide,
            such as your name, email address, and message. We do not use tracking
            cookies or third-party advertising trackers on this website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            How We Use Information
          </h2>
          <p className="mt-3 leading-relaxed">
            We use the information you provide solely to respond to your inquiries and
            communicate with you about Saguaro Digital Ventures and its products.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Information Sharing
          </h2>
          <p className="mt-3 leading-relaxed">
            We do not sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Your Choices
          </h2>
          <p className="mt-3 leading-relaxed">
            You may contact us at any time to ask what information we hold about you
            or to request that it be deleted.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Contact Us
          </h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy can be sent to{" "}
            <a
              href="mailto:hello@saguarodigitalventures.com"
              className="font-medium text-terracotta hover:text-clay"
            >
              hello@saguarodigitalventures.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
