// File: app/media/page.tsx
// Media landing page
import Link from "next/link";

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl mb-6">📰</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Media Resources for 3D Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access press materials, story opportunities, and expert insights on the future of construction technology
          </p>
          <Link href="/media/information" className="btn-primary text-lg px-8 py-4">
            Access Resources
          </Link>
        </div>
      </section>

      {/* Media Benefits */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Cover 3D Construction?</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Cutting-Edge Technology</h3>
            <p className="text-gray-600">
              Cover the latest innovations in construction technology and their real-world applications.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
            <p className="text-gray-600">
              Report on how 3D printing is addressing housing crises and infrastructure challenges worldwide.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3">Future of Work</h3>
            <p className="text-gray-600">
              Explore how technology is transforming traditional industries and creating new opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Press Resources */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Press Resources</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Press Kit</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Company fact sheets and backgrounders</li>
              <li>• High-resolution images and videos</li>
              <li>• Executive biographies and headshots</li>
              <li>• Recent press releases and announcements</li>
              <li>• Industry statistics and market data</li>
            </ul>
            <Link href="/media/information" className="btn-primary">
              Download Press Kit
            </Link>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Story Opportunities</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Project case studies and success stories</li>
              <li>• Technology demonstrations and site visits</li>
              <li>• Expert interviews and commentary</li>
              <li>• Industry trend analysis and predictions</li>
              <li>• Behind-the-scenes content and exclusives</li>
            </ul>
            <Link href="/media/information" className="btn-primary">
              Pitch a Story
            </Link>
          </div>
        </div>
      </section>

      {/* Media Types */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Media Coverage Types</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card text-center">
            <div className="text-3xl mb-3">📺</div>
            <h3 className="font-semibold mb-2">Television</h3>
            <p className="text-sm text-gray-600">Live demonstrations, interviews, and project coverage</p>
          </div>
          
          <div className="card text-center">
            <div className="text-3xl mb-3">📻</div>
            <h3 className="font-semibold mb-2">Radio</h3>
            <p className="text-sm text-gray-600">Podcast interviews and radio show appearances</p>
          </div>
          
          <div className="card text-center">
            <div className="text-3xl mb-3">📰</div>
            <h3 className="font-semibold mb-2">Print</h3>
            <p className="text-sm text-gray-600">Newspaper articles, magazine features, and trade publications</p>
          </div>
          
          <div className="card text-center">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="font-semibold mb-2">Digital</h3>
            <p className="text-sm text-gray-600">Online articles, blog posts, and social media content</p>
          </div>
        </div>
      </section>

      {/* Expert Commentary */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Expert Commentary</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Technology Trends</h3>
            <p className="text-gray-600 text-sm">Insights on the latest developments in 3D printing technology and construction applications.</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Market Analysis</h3>
            <p className="text-gray-600 text-sm">Expert analysis of market trends, growth projections, and industry challenges.</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Policy Impact</h3>
            <p className="text-gray-600 text-sm">Commentary on regulatory changes, building codes, and government initiatives.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Media Contact</h2>
        </div>
        
        <div className="card text-center">
          <h3 className="text-2xl font-semibold mb-4">Press Inquiries</h3>
          <p className="text-lg text-gray-600 mb-6">
            For press inquiries, interview requests, or media resources, please contact our media team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:press@pord.com" className="btn-primary">
              Email Press Team
            </a>
            <a href="tel:+1-555-0123" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">
              Call Press Line
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Cover the Future of Construction?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join us in telling the story of how 3D printing is revolutionizing the construction industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/media/information" className="btn-primary text-lg px-8 py-4">
            Access Media Resources
          </Link>
          <Link href="/contact" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50 text-lg px-8 py-4">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
