// File: app/government/page.tsx
// Government landing page
import Link from "next/link";

export default function GovernmentPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl mb-6">🏛️</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Government Solutions for 3D Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Partner with us to address housing challenges, infrastructure needs, and economic development through innovative 3D printing technology
          </p>
          <Link href="/government/information" className="btn-primary text-lg px-8 py-4">
            Learn More
          </Link>
        </div>
      </section>

      {/* Government Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How 3D Printing Serves Public Interest</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-3">Affordable Housing</h3>
            <p className="text-gray-600">
              Address housing shortages with faster, more cost-effective construction methods.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-3">Economic Development</h3>
            <p className="text-gray-600">
              Create jobs, attract investment, and stimulate local economic growth.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3">Environmental Goals</h3>
            <p className="text-gray-600">
              Meet sustainability targets with reduced waste and carbon footprint construction.
            </p>
          </div>
        </div>
      </section>

      {/* Government Applications */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Government Applications</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Public Housing Projects</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Affordable housing developments</li>
              <li>• Emergency housing solutions</li>
              <li>• Senior living communities</li>
              <li>• Veterans housing programs</li>
              <li>• Homeless shelter construction</li>
            </ul>
            <Link href="/government/information" className="btn-primary">
              Learn More
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Infrastructure Development</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Public facilities construction</li>
              <li>• School and hospital buildings</li>
              <li>• Community centers</li>
              <li>• Disaster relief housing</li>
              <li>• Military and defense facilities</li>
            </ul>
            <Link href="/government/information" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Policy and Regulation */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Policy and Regulatory Support</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-3">Code Development</h3>
            <p className="text-gray-600">
              Work with us to develop building codes and regulations for 3D printed construction.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-3">Compliance Support</h3>
            <p className="text-gray-600">
              Ensure all projects meet local, state, and federal building requirements.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Stakeholder Engagement</h3>
            <p className="text-gray-600">
              Facilitate community engagement and public-private partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Economic Impact</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Job Creation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• High-tech construction jobs</li>
              <li>• Technology maintenance positions</li>
              <li>• Design and engineering roles</li>
              <li>• Training and education jobs</li>
              <li>• Supply chain employment</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Cost Savings</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Reduced construction costs</li>
              <li>• Faster project completion</li>
              <li>• Lower maintenance requirements</li>
              <li>• Energy efficiency benefits</li>
              <li>• Reduced infrastructure burden</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Public Construction?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's work together to address your community's housing and infrastructure needs with innovative 3D printing solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/government/information" className="btn-primary text-lg px-8 py-4">
            Start Partnership
          </Link>
          <Link href="/contact" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50 text-lg px-8 py-4">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
