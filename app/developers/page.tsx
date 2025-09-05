// File: app/developers/page.tsx
// Developers landing page
import Link from "next/link";

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl mb-6">🏢</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Large-Scale Development with 3D Printing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your development projects with faster, more cost-effective construction using advanced 3D printing technology
          </p>
          <Link href="/developers/information" className="btn-primary text-lg px-8 py-4">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Development Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose 3D Printing for Development?</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Faster Time to Market</h3>
            <p className="text-gray-600">
              Complete developments in months, not years, with our accelerated construction process.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3">Reduced Costs</h3>
            <p className="text-gray-600">
              Save up to 50% on construction costs while maintaining high quality standards.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-3">Sustainable Development</h3>
            <p className="text-gray-600">
              Meet environmental goals with reduced waste and carbon footprint construction.
            </p>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Development Project Types</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">🏠 Residential Communities</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Single-family home developments</li>
              <li>• Townhouse communities</li>
              <li>• Apartment complexes</li>
              <li>• Mixed-use developments</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">🏢 Commercial Projects</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Office buildings</li>
              <li>• Retail centers</li>
              <li>• Industrial facilities</li>
              <li>• Hospitality projects</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">🏛️ Public Infrastructure</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Affordable housing</li>
              <li>• Emergency shelters</li>
              <li>• Community centers</li>
              <li>• Educational facilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Project Planning</h3>
            <p className="text-gray-600 text-sm">Site analysis, design development, and feasibility studies</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Permits & Approvals</h3>
            <p className="text-gray-600 text-sm">Handle all regulatory requirements and building permits</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">3D Construction</h3>
            <p className="text-gray-600 text-sm">Rapid construction using our advanced printing technology</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">4</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Project Delivery</h3>
            <p className="text-gray-600 text-sm">Final inspections, handover, and ongoing support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Develop with 3D Printing?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss your development project and how 3D printing can accelerate your timeline and reduce costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/developers/information" className="btn-primary text-lg px-8 py-4">
            Start Your Development
          </Link>
          <Link href="/contact" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50 text-lg px-8 py-4">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
