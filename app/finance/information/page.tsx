// File: app/finance/information/page.tsx
// Finance/Investors information gathering form
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const INVESTMENT_SIZES = [
  "Under $100K",
  "$100K - $500K", 
  "$500K - $1M",
  "$1M - $5M",
  "$5M - $10M",
  "Over $10M"
];

const INVESTMENT_TYPES = [
  "Equity Investment",
  "Debt Financing",
  "Project Financing",
  "Technology Licensing",
  "Joint Venture",
  "Other"
];

export default function FinanceInformationPage() {
  const [formData, setFormData] = useState({
    // General Info
    name: "",
    email: "",
    organization: "",
    phone: "",
    state: "",
    
    // Investment Details
    investmentSize: "",
    investmentType: "",
    timeline: "",
    riskTolerance: "",
    previousExperience: "",
    specificInterests: "",
    
    // Additional Info
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
    if (!formData.name || !formData.email || !formData.investmentSize || !formData.investmentType) {
      alert("Please fill in all required fields");
      return;
    }
    if (!formData.agreeToContact || !formData.agreeToTerms) {
      alert("Please agree to the terms and contact preferences");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Finance information submitted:", formData);
    
    // Redirect to confirmation page
    router.push("/finance/confirmation");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/finance" className="text-sm text-gray-600 hover:underline">← Back to Finance</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Investment Information</h1>
        <p className="text-gray-600 mb-8">
          Help us understand your investment goals so we can connect you with the right opportunities.
        </p>
        
        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => handleInputChange("organization", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company or organization"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State/Region
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your state or region"
              />
            </div>
          </div>
        </div>

        {/* Investment Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Investment Details</h2>
          
          {/* Investment Size */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What is your typical investment size range? *
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INVESTMENT_SIZES.map((size) => (
                <label
                  key={size}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.investmentSize === size
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="investmentSize"
                    value={size}
                    checked={formData.investmentSize === size}
                    onChange={(e) => handleInputChange("investmentSize", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Investment Type */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What type of investment are you most interested in? *
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INVESTMENT_TYPES.map((type) => (
                <label
                  key={type}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.investmentType === type
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="investmentType"
                    value={type}
                    checked={formData.investmentType === type}
                    onChange={(e) => handleInputChange("investmentType", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What is your investment timeline?
            </h3>
            <select
              value={formData.timeline}
              onChange={(e) => handleInputChange("timeline", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate (0-3 months)</option>
              <option value="short">Short-term (3-12 months)</option>
              <option value="medium">Medium-term (1-3 years)</option>
              <option value="long">Long-term (3+ years)</option>
            </select>
          </div>

          {/* Risk Tolerance */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How would you describe your risk tolerance?
            </h3>
            <div className="space-y-3">
              {["Conservative", "Moderate", "Aggressive", "Very Aggressive"].map((risk) => (
                <label
                  key={risk}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.riskTolerance === risk
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="riskTolerance"
                    value={risk}
                    checked={formData.riskTolerance === risk}
                    onChange={(e) => handleInputChange("riskTolerance", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{risk}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Previous Experience */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Do you have previous experience with construction or real estate investments?
            </h3>
            <div className="space-y-3">
              {["Yes, extensive", "Yes, some", "No, but interested", "No experience"].map((exp) => (
                <label
                  key={exp}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.previousExperience === exp
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="previousExperience"
                    value={exp}
                    checked={formData.previousExperience === exp}
                    onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{exp}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Specific Interests */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What specific aspects of 3D printed construction interest you most?
            </h3>
            <textarea
              value={formData.specificInterests}
              onChange={(e) => handleInputChange("specificInterests", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe your specific interests, concerns, or questions about 3D printed construction investments..."
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Is there anything else you'd like us to know about your investment goals?
            </h3>
            <textarea
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Any additional details, special requirements, or questions you have..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How would you like us to follow up with you? (Select all that apply)
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Email updates about new projects",
                "Phone consultation with our team",
                "In-person meeting or site visit",
                "Investment opportunity details",
                "Technical specifications and materials",
                "Cost estimates and timeline",
                "Regulatory and permitting guidance"
              ].map((method) => (
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

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How urgent is your investment timeline?
            </h3>
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

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Do you have any specific questions for our team?
            </h3>
            <textarea
              value={formData.specificQuestions}
              onChange={(e) => handleInputChange("specificQuestions", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Any specific questions about 3D printing technology, costs, timeline, or process..."
            />
          </div>
        </div>

        {/* Agreements */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Agreements</h2>
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
                I agree to be contacted by the Pörd team regarding investment opportunities in 3D printed construction. *
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
            className="btn-primary text-lg px-8 py-4"
          >
            Submit Information
          </button>
        </div>
      </div>
    </div>
  );
}
