// File: app/designs/[slug]/page.tsx
// Dynamic detail page for ANY design in the DESIGNS array (no per-design files needed)
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DESIGNS } from "../../designs"; // two levels up from /app/designs/[slug]/

export function generateStaticParams() {
  // Prebuild all design routes for faster navigation
  return DESIGNS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = DESIGNS.find((d) => d.slug === params.slug);
  return {
    title: item ? `${item.name} – Pörd` : "Design – Pörd",
    description: item ? `Explore ${item.name} on Pörd` : "Explore a design on Pörd",
  };
}

export default function DesignPage({ params }: { params: { slug: string } }) {
  const item = DESIGNS.find((d) => d.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to designs</Link>
        <Link href="/start-building" className="btn-primary">Start Building</Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <Image
            src={item.img}
            alt={item.name}
            width={1200}
            height={800}
            className="rounded-xl object-cover w-full h-auto"
            priority
          />
        </div>
        <div className="card">
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="mt-2 text-gray-600">
            A sustainable, 3D-printed-ready concept. We’ll help with land, zoning, builder match,
            and end-to-end coordination.
          </p>

          <div className="mt-6 text-lg">
            <span className="font-semibold">Design Price: </span>${item.price.toLocaleString()}
          </div>
          <div className="mt-8 flex items-center gap-3">
            <Link href="/start-building" className="btn-primary">Select This Design</Link>
            <Link href="/" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">Browse More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
