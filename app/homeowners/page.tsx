// File: app/homeowners/page.tsx
// Homeowners/Buyers landing page
import Link from "next/link";
import Image from "next/image";
import { DESIGNS } from "../designs";

export default function HomeownersPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl mb-6">🏠</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Your Dream Home, Built with 3D Printing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience faster, more affordable, and sustainable home construction with cutting-edge 3D printing technology
          </p>
          <Link href="/homeowners/information" className="btn-primary text-lg px-8 py-4">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose 3D Printed Homes?</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
            <p className="text-gray-600">
              Save up to 50% on construction costs compared to traditional building methods.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Faster Build</h3>
            <p className="text-gray-600">
              Complete your home in weeks, not months, with our advanced 3D printing technology.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
            <p className="text-gray-600">
              Sustainable construction with reduced waste and lower environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Home Designs</h2>
          <p className="text-lg text-gray-600">Choose from our collection of beautiful, customizable designs</p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESIGNS.slice(0, 6).map((design) => (
            <article key={design.slug} className="card text-left">
              <Link href={`/designs/${design.slug}`} className="block">
                <Image
                  src={design.img}
                  alt={design.name}
                  width={500}
                  height={350}
                  className="object-cover rounded-xl w-full h-auto"
                />
                <h3 className="mt-4 font-semibold">{design.name}</h3>
              </Link>
              <p className="mt-1 text-sm text-gray-600">${design.price.toLocaleString()}</p>
              <div className="mt-4 flex gap-2">
                <Link href={`/designs/${design.slug}`} className="btn-primary">View Details</Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/designs" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">
            View All Designs
          </Link>
        </div>
      </section>

      {/* Process Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Choose Your Design</h3>
            <p className="text-gray-600 text-sm">Select from our collection or work with us on a custom design</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Site Preparation</h3>
            <p className="text-gray-600 text-sm">We handle permits, land preparation, and utility connections</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">3D Printing</h3>
            <p className="text-gray-600 text-sm">Watch your home come to life with our advanced printing technology</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">4</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Move In</h3>
            <p className="text-gray-600 text-sm">Complete finishing touches and move into your new home</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Home?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Tell us about your vision and we'll help make it a reality with 3D printing technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/homeowners/information" className="btn-primary text-lg px-8 py-4">
            Start Your Project
          </Link>
          <Link href="/contact" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50 text-lg px-8 py-4">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
