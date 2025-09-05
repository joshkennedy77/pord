// File: app/survey/finance/page.tsx
// Finance/Investors specific survey questions
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

export default function FinanceSurveyPage() {
  const [formData, setFormData] = useState({
    investmentSize: "",
    investmentType: "",
    timeline: "",
    riskTolerance: "",
    previousExperience: "",
    specificInterests: ""
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (!formData.investmentSize || !formData.investmentType || !formData.timeline) {
      alert("Please fill in all required fields");
      return;
    }
    router.push("/survey/wrap-up");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Step 2 of 3</span>
          <span>Finance / Investors</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "66%" }}></div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link href="/survey" className="text-sm text-gray-600 hover:underline">← Back to General Info</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Investment Details</h1>
        
        {/* Q4: Investment Size */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What is your typical investment size range?
          </h2>
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

        {/* Q5: Investment Type */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What type of investment are you most interested in?
          </h2>
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

        {/* Q6: Timeline */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What is your investment timeline?
          </h2>
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

        {/* Q7: Risk Tolerance */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            How would you describe your risk tolerance?
          </h2>
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

        {/* Q8: Previous Experience */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Do you have previous experience with construction or real estate investments?
          </h2>
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

        {/* Q9: Specific Interests */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What specific aspects of 3D printed construction interest you most?
          </h2>
          <textarea
            value={formData.specificInterests}
            onChange={(e) => handleInputChange("specificInterests", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Please describe your specific interests, concerns, or questions about 3D printed construction investments..."
          />
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="btn-primary"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
