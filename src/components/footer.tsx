import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-heading text-sm font-semibold text-foreground">
            Saguaro Digital Ventures
          </p>
          <p className="mt-1 text-sm text-muted">Arizona, USA</p>
        </div>

        <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/privacy" className="text-muted transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-muted transition-colors hover:text-foreground">
            Terms of Service
          </Link>
        </nav>

        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Saguaro Digital Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
