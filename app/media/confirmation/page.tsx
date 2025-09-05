// File: app/media/confirmation/page.tsx
// Media confirmation page after information submission
import Link from "next/link";

export default function MediaConfirmationPage() {
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
            Your media request has been submitted successfully.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our media team will review your request and contact you within 24 hours to discuss your story needs and provide the resources you requested.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">📞 Media Consultation</h3>
              <p className="text-sm text-gray-600">We'll schedule a call to discuss your story requirements and provide tailored resources.</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">📋 Press Materials</h3>
              <p className="text-sm text-gray-600">Receive comprehensive press kit with high-resolution images, videos, and company information.</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">🎯 Story Support</h3>
              <p className="text-sm text-gray-600">Get access to expert interviews, site visits, and exclusive content for your story.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Media Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/media" className="btn-primary">
              Back to Media
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
            <Link href="/press-kit" className="text-blue-600 hover:underline">
              Press Kit
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/case-studies" className="text-blue-600 hover:underline">
              Case Studies
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/expert-interviews" className="text-blue-600 hover:underline">
              Expert Interviews
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/media-gallery" className="text-blue-600 hover:underline">
              Media Gallery
            </Link>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Questions? Contact our media team at <a href="mailto:press@pord.com" className="text-blue-600 hover:underline">press@pord.com</a></p>
        </div>
      </div>
    </div>
  );
}
