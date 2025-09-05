// File: app/construction/page.tsx
// Construction/Engineering landing page
import Link from "next/link";

export default function ConstructionPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl mb-6">🏗️</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Partner with Us in 3D Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join the construction revolution with cutting-edge 3D printing technology and build the future together
          </p>
          <Link href="/construction/information" className="btn-primary text-lg px-8 py-4">
            Partner with Us
          </Link>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Partner with Pörd?</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Cutting-Edge Technology</h3>
            <p className="text-gray-600">
              Access to the latest 3D printing technology and construction methods.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-3">Increased Efficiency</h3>
            <p className="text-gray-600">
              Complete projects 50% faster with reduced labor costs and waste.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Full Support</h3>
            <p className="text-gray-600">
              Comprehensive training, ongoing support, and technical assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">General Contractors</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Integrate 3D printing into existing projects</li>
              <li>• Access to our technology and expertise</li>
              <li>• Joint project opportunities</li>
              <li>• Training and certification programs</li>
            </ul>
            <Link href="/construction/information" className="btn-primary">
              Learn More
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Engineering Firms</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Design collaboration and consultation</li>
              <li>• Technical specification development</li>
              <li>• Quality assurance partnerships</li>
              <li>• Research and development projects</li>
            </ul>
            <Link href="/construction/information" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">3D Printing Capabilities</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Large-scale concrete printing</li>
              <li>• Multi-story building construction</li>
              <li>• Custom architectural designs</li>
              <li>• Rapid prototyping and testing</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Quality Standards</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Industry-leading precision</li>
              <li>• Structural integrity testing</li>
              <li>• Building code compliance</li>
              <li>• Environmental sustainability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our network of construction partners and be part of the 3D printing revolution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/construction/information" className="btn-primary text-lg px-8 py-4">
            Become a Partner
          </Link>
          <Link href="/contact" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50 text-lg px-8 py-4">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
