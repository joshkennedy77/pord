// File: app/page.tsx
// Homepage: hero + CTA + design cards
import Link from "next/link";
import Image from "next/image";

const DESIGNS = [
  {
    slug: "cactus",
    name: "The Cactus",
    price: 1495,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/3D_printed_house_example.jpg/640px-3D_printed_house_example.jpg"
  },
  {
    slug: "fibonacci",
    name: "The Fibonacci",
    price: 1495,
    img: "https://images.unsplash.com/photo-1582582621959-2e8b7b9f5e8c?q=80&w=1920&auto=format&fit=crop"
  }
];

export default function HomePage() {
  return (
    <section className="text-center">
      {/* ----- Hero ----- */}
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Building Your Dream Home Has Never Been Easier
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A marketplace to design, finance, and build 3D-printed & sustainable housing.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/start-building" className="btn-primary">Start Building</Link>
          <Link href="/contractors" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">For Builders</Link>
        </div>
      </div>

      {/* ----- Design Cards ----- */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DESIGNS.map((d) => (
          <article key={d.slug} className="card text-left">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src={d.img} alt={d.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
            </div>
            <h3 className="mt-4 font-semibold">{d.name}</h3>
            <p className="mt-1 text-sm text-gray-600">${d.price.toLocaleString()}</p>
            <div className="mt-4 flex gap-2">
              <button
                className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50"
                onClick={() => alert(`Saved ${d.name} to favorites`)}
              >
                ☆ Favorite
              </button>
              <Link href="/start-building" className="btn-primary">Select</Link>
            </div>
          </article>
        ))}
      </div>

      {/* ----- Selling Points ----- */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h3 className="font-semibold">Pick a Design</h3>
          <p className="mt-2 text-sm text-gray-600">Browse iconic 3D-printed and sustainable designs and favorite your picks.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Site & Permitting</h3>
          <p className="mt-2 text-sm text-gray-600">We automate zoning, permits, and inspections with trusted partners.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Vetted Builders</h3>
          <p className="mt-2 text-sm text-gray-600">We match you with rated, vetted contractors and manage progress.</p>
        </div>
      </div>
    </section>
  );
}
