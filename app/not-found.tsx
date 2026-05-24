import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Not found</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">This guide page is not available</h1>
      <p className="mt-4 leading-7 text-muted">Return to the checklist hub and choose a source-linked guide.</p>
      <Link href="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-ink">
        Back to home
      </Link>
    </main>
  );
}
