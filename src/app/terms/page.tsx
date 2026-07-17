import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Saguaro Digital Ventures.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: July 16, 2026</p>

      <div className="mt-10 space-y-8 text-muted">
        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Acceptance of Terms
          </h2>
          <p className="mt-3 leading-relaxed">
            By accessing this website, you agree to be bound by these Terms of
            Service. If you do not agree with any part of these terms, please do not
            use this website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Use of This Website
          </h2>
          <p className="mt-3 leading-relaxed">
            This website is provided for informational purposes about Saguaro Digital
            Ventures and its products. You agree to use it only for lawful purposes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Intellectual Property
          </h2>
          <p className="mt-3 leading-relaxed">
            All content on this website, including text, graphics, and logos, is the
            property of Saguaro Digital Ventures unless otherwise noted, and may not
            be used without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Third-Party Products
          </h2>
          <p className="mt-3 leading-relaxed">
            Products referenced on this website, such as Monte Estate, may be governed
            by their own separate terms of service.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Limitation of Liability
          </h2>
          <p className="mt-3 leading-relaxed">
            This website and its content are provided &ldquo;as is&rdquo; without
            warranties of any kind. Saguaro Digital Ventures is not liable for any
            damages arising from the use of this website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Changes to These Terms
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update these Terms of Service from time to time. Continued use of
            this website after changes are posted constitutes acceptance of the
            revised terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Contact Us
          </h2>
          <p className="mt-3 leading-relaxed">
            Questions about these terms can be sent to{" "}
            <a
              href="mailto:jesus@saguarodigitalventures.com"
              className="font-medium text-terracotta hover:text-clay"
            >
              jesus@saguarodigitalventures.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
