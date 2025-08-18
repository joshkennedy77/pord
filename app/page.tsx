// File: app/page.tsx
// Homepage that shows all design cards and links to /designs/<slug>
import Link from "next/link";
import Image from "next/image";
import { DESIGNS } from "./designs";

export default function Page() {
  return (
    <section className="text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Building Your Dream Home Has Never Been Easier
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The marketplace for 3D Printed & Sustainable Housing
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/start-building" className="btn-primary">Start Building</Link>
          <Link href="/contractors" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">For Builders</Link>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESIGNS.map((d) => (
          <article key={d.slug} className="card text-left">
            <Link href={`/designs/${d.slug}`} className="block">
              <Image
                src={d.img}
                alt={d.name}
                width={500}
                height={350}
                className="object-cover rounded-xl w-full h-auto"
              />
              <h3 className="mt-4 font-semibold">{d.name}</h3>
            </Link>
            <p className="mt-1 text-sm text-gray-600">${d.price.toLocaleString()}</p>
            <div className="mt-4 flex gap-2">
              <Link href={`/designs/${d.slug}`} className="btn-primary">View</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
