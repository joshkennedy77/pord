// File: app/page.tsx
// Homepage with survey flow and design showcase
import Link from "next/link";
import Image from "next/image";
import { DESIGNS } from "./designs";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Building the Future with 3D Printed Housing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your interest — we'll guide you to the right path.
          </p>
        </div>
      </section>

      {/* Role Selection */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How can we help you?</h2>
          <p className="text-lg text-gray-600">Select your role to get started</p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/finance" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Finance / Investors</h3>
            <p className="text-gray-600 text-sm">Investment opportunities and project financing</p>
          </Link>
          
          <Link href="/contractor-login" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold mb-2">Contractors</h3>
            <p className="text-gray-600 text-sm">Join our network and manage leads</p>
          </Link>
          
          <Link href="/homeowners" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Homeowners / Buyers</h3>
            <p className="text-gray-600 text-sm">Your dream home with 3D printing technology</p>
          </Link>
          
          <Link href="/developers" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-2">Developers</h3>
            <p className="text-gray-600 text-sm">Large-scale projects and development opportunities</p>
          </Link>
          
          <Link href="/educators" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Educators</h3>
            <p className="text-gray-600 text-sm">Educational resources and research collaboration</p>
          </Link>
          
          <Link href="/government" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-semibold mb-2">Government</h3>
            <p className="text-gray-600 text-sm">Policy, regulations, and public projects</p>
          </Link>
          
          <Link href="/media" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📰</div>
            <h3 className="text-xl font-semibold mb-2">Media</h3>
            <p className="text-gray-600 text-sm">Press resources and story opportunities</p>
          </Link>
          
          <Link href="/nonprofits" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Nonprofits</h3>
            <p className="text-gray-600 text-sm">Community impact and social housing solutions</p>
          </Link>
        </div>
      </section>

      {/* Design Showcase Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Designs</h2>
          <p className="text-lg text-gray-600">Browse our collection of 3D-printed home designs</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Residential Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Residential</h3>
            <div className="space-y-6">
              {DESIGNS.slice(0, 8).map((d) => (
                <article key={d.slug} className="card text-left">
                  <Link href={`/designs/${d.slug}`} className="block">
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={500}
                      height={350}
                      className="object-cover rounded-xl w-full h-auto"
                    />
                    <h4 className="mt-4 font-semibold">{d.name}</h4>
                  </Link>
                  <p className="mt-1 text-sm text-gray-600">${d.price.toLocaleString()}</p>
                  <div className="mt-4 flex gap-2">
                    <Link href={`/designs/${d.slug}`} className="btn-primary">View</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          {/* Commercial Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Commercial</h3>
            <div className="space-y-6">
              {DESIGNS.slice(8, 16).map((d) => (
                <article key={d.slug} className="card text-left">
                  <Link href={`/designs/${d.slug}`} className="block">
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={500}
                      height={350}
                      className="object-cover rounded-xl w-full h-auto"
                    />
                    <h4 className="mt-4 font-semibold">{d.name}</h4>
                  </Link>
                  <p className="mt-1 text-sm text-gray-600">${d.price.toLocaleString()}</p>
                  <div className="mt-4 flex gap-2">
                    <Link href={`/designs/${d.slug}`} className="btn-primary">View</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          {/* Community Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Community</h3>
            <div className="space-y-6">
              {DESIGNS.slice(16, 24).map((d) => (
                <article key={d.slug} className="card text-left">
                  <Link href={`/designs/${d.slug}`} className="block">
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={500}
                      height={350}
                      className="object-cover rounded-xl w-full h-auto"
                    />
                    <h4 className="mt-4 font-semibold">{d.name}</h4>
                  </Link>
                  <p className="mt-1 text-sm text-gray-600">${d.price.toLocaleString()}</p>
                  <div className="mt-4 flex gap-2">
                    <Link href={`/designs/${d.slug}`} className="btn-primary">View</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
