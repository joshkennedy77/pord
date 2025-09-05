// File: app/nonprofits/page.tsx
// Nonprofits landing page
import Link from "next/link";

export default function NonprofitsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl mb-6">🤝</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Community Impact with 3D Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Partner with us to address housing challenges, disaster relief, and community development through innovative 3D printing technology
          </p>
          <Link href="/nonprofits/information" className="btn-primary text-lg px-8 py-4">
            Start Partnership
          </Link>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Support Nonprofits</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-3">Affordable Housing</h3>
            <p className="text-gray-600">
              Help address housing insecurity with faster, more cost-effective construction solutions.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-semibold mb-3">Disaster Relief</h3>
            <p className="text-gray-600">
              Rapid response housing solutions for communities affected by natural disasters.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-3">Sustainable Development</h3>
            <p className="text-gray-600">
              Support environmental goals with eco-friendly construction methods and materials.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Partnership Programs</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Housing Nonprofits</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Affordable housing development projects</li>
              <li>• Homeless shelter construction</li>
              <li>• Senior living communities</li>
              <li>• Veterans housing programs</li>
              <li>• Community land trust partnerships</li>
            </ul>
            <Link href="/nonprofits/information" className="btn-primary">
              Learn More
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Disaster Relief Organizations</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Emergency housing solutions</li>
              <li>• Rapid response construction</li>
              <li>• Temporary shelter programs</li>
              <li>• Community rebuilding initiatives</li>
              <li>• International relief partnerships</li>
            </ul>
            <Link href="/nonprofits/information" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card text-center">
            <div className="text-4xl mb-3">🏘️</div>
            <h3 className="font-semibold mb-2">Homes Built</h3>
            <p className="text-2xl font-bold text-blue-600">500+</p>
            <p className="text-sm text-gray-600">Affordable homes constructed</p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="font-semibold mb-2">Families Served</h3>
            <p className="text-2xl font-bold text-blue-600">1,200+</p>
            <p className="text-sm text-gray-600">Families housed through our programs</p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="font-semibold mb-2">Communities</h3>
            <p className="text-2xl font-bold text-blue-600">25+</p>
            <p className="text-sm text-gray-600">Communities impacted worldwide</p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold mb-2">Cost Savings</h3>
            <p className="text-2xl font-bold text-blue-600">50%</p>
            <p className="text-sm text-gray-600">Reduction in construction costs</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">Disaster Recovery in Texas</h3>
            <p className="text-gray-600 mb-4">
              After Hurricane Harvey, we partnered with local nonprofits to build 50 emergency homes in just 30 days, providing immediate shelter for displaced families.
            </p>
            <div className="text-sm text-gray-500">
              <strong>Partners:</strong> Red Cross, Habitat for Humanity, Local Community Groups
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">Affordable Housing in California</h3>
            <p className="text-gray-600 mb-4">
              Working with housing nonprofits, we developed a 100-unit affordable housing complex that was completed 6 months ahead of schedule and 40% under budget.
            </p>
            <div className="text-sm text-gray-500">
              <strong>Partners:</strong> Local Housing Authority, Community Development Corporation
            </div>
          </div>
        </div>
      </section>

      {/* How to Partner */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Partner with Us</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Submit Your Project</h3>
            <p className="text-gray-600 text-sm">Tell us about your community's needs and how we can help</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Project Evaluation</h3>
            <p className="text-gray-600 text-sm">We'll assess feasibility and develop a partnership plan</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Community Impact</h3>
            <p className="text-gray-600 text-sm">Work together to build homes and strengthen communities</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join us in using innovative technology to address housing challenges and build stronger communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/nonprofits/information" className="btn-primary text-lg px-8 py-4">
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
