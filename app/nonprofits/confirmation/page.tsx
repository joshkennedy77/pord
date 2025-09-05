import Link from "next/link";

export default function NonprofitsConfirmationPage() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/nonprofits" className="text-sm text-gray-600 hover:underline">← Back to Nonprofits</Link>
      </div>

      <div className="card text-center">
        <div className="text-6xl mb-6">🤝</div>
        <h1 className="text-4xl font-bold mb-6">Thank You for Your Interest!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We've received your partnership information and are excited about the potential to work together on creating meaningful community impact through 3D printed housing.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
              <div>
                <h3 className="font-semibold">Review and Assessment</h3>
                <p className="text-gray-600 text-sm">Our team will review your organization's information and project details within 2-3 business days.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
              <div>
                <h3 className="font-semibold">Initial Contact</h3>
                <p className="text-gray-600 text-sm">We'll reach out to discuss your project, answer questions, and explore partnership opportunities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
              <div>
                <h3 className="font-semibold">Partnership Development</h3>
                <p className="text-gray-600 text-sm">If there's a good fit, we'll work together to develop a detailed partnership plan and project timeline.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Resources for Nonprofits</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card text-left">
              <h3 className="font-semibold mb-2">Partnership Guide</h3>
              <p className="text-gray-600 text-sm mb-3">Learn about our partnership process and what to expect when working with Pörd.</p>
              <Link href="/contact" className="text-blue-600 hover:underline text-sm">Download Guide →</Link>
            </div>
            <div className="card text-left">
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm mb-3">Explore successful partnerships and community impact stories from our nonprofit collaborations.</p>
              <Link href="/contact" className="text-blue-600 hover:underline text-sm">View Case Studies →</Link>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-6">
            Follow our progress and stay updated on new partnership opportunities and community impact stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
            <Link href="/" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">
              Return to Home
            </Link>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>Questions? Contact us at <a href="mailto:partnerships@pord.com" className="text-blue-600 hover:underline">partnerships@pord.com</a></p>
        </div>
      </div>
    </div>
  );
}
