// File: app/finance/page.tsx
// Finance/Investors landing page
import Link from "next/link";

export default function FinancePage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl mb-6">💰</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Investment Opportunities in 3D Printed Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join the future of construction with sustainable, cost-effective, and innovative building solutions
          </p>
          <Link href="/finance/information" className="btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Invest in 3D Printed Construction?</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-3">High Growth Potential</h3>
            <p className="text-gray-600">
              The 3D construction market is projected to grow at 20%+ annually, offering significant investment opportunities.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3">Cost Efficiency</h3>
            <p className="text-gray-600">
              Reduce construction costs by up to 50% while maintaining quality and accelerating project timelines.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-3">Sustainable Impact</h3>
            <p className="text-gray-600">
              Support environmentally responsible construction with reduced waste and carbon footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Investment Opportunities</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Project Financing</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Direct investment in specific construction projects</li>
              <li>• Predictable returns with clear timelines</li>
              <li>• Investment range: $100K - $10M+</li>
              <li>• Geographic diversification options</li>
            </ul>
            <Link href="/finance/information" className="btn-primary">
              Learn More
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Technology Partnerships</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Equity investments in technology development</li>
              <li>• Long-term growth potential</li>
              <li>• Intellectual property rights</li>
              <li>• Strategic partnership opportunities</li>
            </ul>
            <Link href="/finance/information" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Invest in the Future?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Tell us about your investment goals and we'll connect you with the right opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/finance/information" className="btn-primary text-lg px-8 py-4">
            Start Your Investment Journey
          </Link>
          <Link href="/contact" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50 text-lg px-8 py-4">
            Schedule a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
