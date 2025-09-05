// File: app/survey/wrap-up/page.tsx
// Final survey questions and submission
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FOLLOW_UP_OPTIONS = [
  "Email updates about new projects",
  "Phone consultation with our team",
  "In-person meeting or site visit",
  "Investment opportunity details",
  "Technical specifications and materials",
  "Cost estimates and timeline",
  "Regulatory and permitting guidance",
  "Other"
];

export default function WrapUpSurveyPage() {
  const [formData, setFormData] = useState({
    additionalInfo: "",
    followUpMethods: [] as string[],
    urgency: "",
    referralSource: "",
    specificQuestions: "",
    agreeToContact: false,
    agreeToTerms: false
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFollowUpChange = (method: string) => {
    setFormData(prev => ({
      ...prev,
      followUpMethods: prev.followUpMethods.includes(method)
        ? prev.followUpMethods.filter(m => m !== method)
        : [...prev.followUpMethods, method]
    }));
  };

  const handleSubmit = () => {
    if (!formData.agreeToContact || !formData.agreeToTerms) {
      alert("Please agree to the terms and contact preferences");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Survey submitted:", formData);
    
    // Redirect to confirmation page
    router.push("/survey/confirmation");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Step 3 of 3</span>
          <span>Wrap-up</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link href="/survey" className="text-sm text-gray-600 hover:underline">← Back to Survey</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Almost Done!</h1>
        
        {/* Q40: Additional Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Is there anything else you'd like us to know about your project or interests?
          </h2>
          <textarea
            value={formData.additionalInfo}
            onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Any additional details, special requirements, or questions you have..."
          />
        </div>

        {/* Q41: Follow-up Methods */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            How would you like us to follow up with you? (Select all that apply)
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {FOLLOW_UP_OPTIONS.map((method) => (
              <label
                key={method}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.followUpMethods.includes(method)
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.followUpMethods.includes(method)}
                  onChange={() => handleFollowUpChange(method)}
                  className="sr-only"
                />
                <span className="font-medium">{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q42: Urgency */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            How urgent is your project?
          </h2>
          <div className="space-y-3">
            {["Very urgent (within 1 month)", "Urgent (1-3 months)", "Moderate (3-6 months)", "Flexible (6+ months)", "Just exploring"].map((level) => (
              <label
                key={level}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.urgency === level
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={level}
                  checked={formData.urgency === level}
                  onChange={(e) => handleInputChange("urgency", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q43: Referral Source */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            How did you hear about us?
          </h2>
          <select
            value={formData.referralSource}
            onChange={(e) => handleInputChange("referralSource", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select referral source</option>
            <option value="google">Google Search</option>
            <option value="social">Social Media</option>
            <option value="referral">Friend/Colleague Referral</option>
            <option value="news">News Article</option>
            <option value="conference">Conference/Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Q44: Specific Questions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Do you have any specific questions for our team?
          </h2>
          <textarea
            value={formData.specificQuestions}
            onChange={(e) => handleInputChange("specificQuestions", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="Any specific questions about 3D printing technology, costs, timeline, or process..."
          />
        </div>

        {/* Q45: Agreements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Agreements
          </h2>
          <div className="space-y-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.agreeToContact}
                onChange={(e) => handleInputChange("agreeToContact", e.target.checked)}
                className="mt-1"
                required
              />
              <span className="text-sm">
                I agree to be contacted by the Pörd team regarding my interest in 3D printed construction. *
              </span>
            </label>
            
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                className="mt-1"
                required
              />
              <span className="text-sm">
                I agree to the Terms of Service and Privacy Policy. *
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="btn-primary"
          >
            Send My Responses
          </button>
        </div>
      </div>
    </div>
  );
}
