// File: app/not-found.tsx
// Shared 404 page (used if a slug doesn't exist)
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl text-center py-20">
      <h2 className="text-2xl font-bold">Page not found</h2>
      <p className="mt-2 text-gray-600">The link you followed may be broken or the page has moved.</p>
      <div className="mt-6">
        <Link href="/" className="btn-primary">Go home</Link>
      </div>
    </div>
  );
}
