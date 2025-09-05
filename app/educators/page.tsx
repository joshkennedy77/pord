// File: app/educators/page.tsx
// Educators landing page
import Link from "next/link";

export default function EducatorsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl mb-6">🎓</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Educational Resources for 3D Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access cutting-edge educational materials, research opportunities, and hands-on learning experiences in 3D printed construction
          </p>
          <Link href="/educators/information" className="btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>

      {/* Educational Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Partner with Pörd for Education?</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-3">Comprehensive Curriculum</h3>
            <p className="text-gray-600">
              Access to complete educational materials covering 3D printing technology and construction methods.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-3">Research Collaboration</h3>
            <p className="text-gray-600">
              Partner with us on cutting-edge research projects and contribute to industry advancement.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Hands-On Learning</h3>
            <p className="text-gray-600">
              Provide students with real-world experience through site visits and practical training.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Educational Programs</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Academic Partnerships</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• University research collaborations</li>
              <li>• Student internship programs</li>
              <li>• Faculty exchange opportunities</li>
              <li>• Joint curriculum development</li>
              <li>• Industry advisory board participation</li>
            </ul>
            <Link href="/educators/information" className="btn-primary">
              Learn More
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Professional Development</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Continuing education courses</li>
              <li>• Industry certification programs</li>
              <li>• Technical training workshops</li>
              <li>• Conference presentations</li>
              <li>• Online learning modules</li>
            </ul>
            <Link href="/educators/information" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Available */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card text-center">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-semibold mb-2">Course Materials</h3>
            <p className="text-sm text-gray-600">Comprehensive textbooks, presentations, and study guides</p>
          </div>
          
          <div className="card text-center">
            <div className="text-3xl mb-3">🎥</div>
            <h3 className="font-semibold mb-2">Video Content</h3>
            <p className="text-sm text-gray-600">Educational videos, demonstrations, and virtual tours</p>
          </div>
          
          <div className="card text-center">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-semibold mb-2">Software Tools</h3>
            <p className="text-sm text-gray-600">Design software, simulation tools, and modeling programs</p>
          </div>
          
          <div className="card text-center">
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="font-semibold mb-2">Site Visits</h3>
            <p className="text-sm text-gray-600">Guided tours of active construction sites and facilities</p>
          </div>
        </div>
      </section>

      {/* Research Opportunities */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Research Opportunities</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Material Science</h3>
            <p className="text-gray-600 text-sm">Research new concrete formulations, additives, and composite materials for 3D printing applications.</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Structural Engineering</h3>
            <p className="text-gray-600 text-sm">Study structural performance, load testing, and optimization of 3D printed building components.</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Sustainability</h3>
            <p className="text-gray-600 text-sm">Investigate environmental impact, carbon footprint reduction, and sustainable construction practices.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Educate the Next Generation?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our educational network and help shape the future of construction through innovative teaching and research.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/educators/information" className="btn-primary text-lg px-8 py-4">
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
