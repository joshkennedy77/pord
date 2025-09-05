// File: app/finance/confirmation/page.tsx
// Finance confirmation page after information submission
import Link from "next/link";

export default function FinanceConfirmationPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="card text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-6">
            Your investment information has been submitted successfully.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our investment team will review your information and contact you within 1-2 business days to discuss opportunities that match your investment goals.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">📞 Investment Consultation</h3>
              <p className="text-sm text-gray-600">We'll schedule a call to discuss your investment goals and available opportunities.</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">📋 Investment Proposal</h3>
              <p className="text-sm text-gray-600">Receive detailed investment proposals tailored to your risk tolerance and timeline.</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">🏗️ Project Portfolio</h3>
              <p className="text-sm text-gray-600">Access our portfolio of current and upcoming 3D construction projects.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Investment Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/finance" className="btn-primary">
              Back to Finance
            </Link>
            <Link href="/designs" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">
              View Our Designs
            </Link>
            <Link href="/contact" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/investment-deck" className="text-blue-600 hover:underline">
              Investment Deck
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/case-studies" className="text-blue-600 hover:underline">
              Case Studies
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/financial-projections" className="text-blue-600 hover:underline">
              Financial Projections
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/market-analysis" className="text-blue-600 hover:underline">
              Market Analysis
            </Link>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Questions? Contact our investment team at <a href="mailto:investors@pord.com" className="text-blue-600 hover:underline">investors@pord.com</a></p>
        </div>
      </div>
    </div>
  );
}
