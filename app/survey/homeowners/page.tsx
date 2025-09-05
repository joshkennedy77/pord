// File: app/survey/homeowners/page.tsx
// Homeowners/Buyers specific survey questions
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HOME_TYPES = [
  "Single Family Home",
  "Townhouse", 
  "Condo/Apartment",
  "Tiny Home",
  "Custom Design",
  "Multi-generational Home"
];

const BUDGET_RANGES = [
  "Under $200K",
  "$200K - $400K",
  "$400K - $600K", 
  "$600K - $800K",
  "$800K - $1M",
  "Over $1M"
];

const TIMELINES = [
  "Immediate (0-6 months)",
  "Short-term (6-12 months)",
  "Medium-term (1-2 years)",
  "Long-term (2+ years)",
  "Just exploring"
];

export default function HomeownersSurveyPage() {
  const [formData, setFormData] = useState({
    homeType: "",
    budget: "",
    timeline: "",
    location: "",
    familySize: "",
    sustainability: "",
    customDesign: "",
    financing: "",
    concerns: ""
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (!formData.homeType || !formData.budget || !formData.timeline) {
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
          <span>Homeowners / Buyers</span>
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
        <h1 className="text-3xl font-bold mb-6">Your Dream Home</h1>
        
        {/* Q31: Home Type */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What type of home are you looking for?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_TYPES.map((type) => (
              <label
                key={type}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.homeType === type
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="homeType"
                  value={type}
                  checked={formData.homeType === type}
                  onChange={(e) => handleInputChange("homeType", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q32: Budget */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What is your budget range?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BUDGET_RANGES.map((budget) => (
              <label
                key={budget}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.budget === budget
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="budget"
                  value={budget}
                  checked={formData.budget === budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{budget}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q33: Timeline */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            When are you looking to move in?
          </h2>
          <div className="space-y-3">
            {TIMELINES.map((timeline) => (
              <label
                key={timeline}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.timeline === timeline
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="timeline"
                  value={timeline}
                  checked={formData.timeline === timeline}
                  onChange={(e) => handleInputChange("timeline", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{timeline}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q34: Location */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Where are you looking to build? (City, State, or Region)
          </h2>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Austin, TX or Pacific Northwest"
          />
        </div>

        {/* Q35: Family Size */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            How many people will be living in the home?
          </h2>
          <select
            value={formData.familySize}
            onChange={(e) => handleInputChange("familySize", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select family size</option>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3-4">3-4 people</option>
            <option value="5-6">5-6 people</option>
            <option value="7+">7+ people</option>
          </select>
        </div>

        {/* Additional Questions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            How important is sustainability to you?
          </h2>
          <div className="space-y-3">
            {["Very Important", "Somewhat Important", "Not Very Important", "Not Important"].map((level) => (
              <label
                key={level}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.sustainability === level
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="sustainability"
                  value={level}
                  checked={formData.sustainability === level}
                  onChange={(e) => handleInputChange("sustainability", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Are you interested in custom design options?
          </h2>
          <div className="space-y-3">
            {["Yes, very interested", "Yes, somewhat", "No, prefer standard designs", "Not sure"].map((option) => (
              <label
                key={option}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.customDesign === option
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="customDesign"
                  value={option}
                  checked={formData.customDesign === option}
                  onChange={(e) => handleInputChange("customDesign", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What are your main concerns about 3D printed homes?
          </h2>
          <textarea
            value={formData.concerns}
            onChange={(e) => handleInputChange("concerns", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Please share any concerns, questions, or specific requirements you have..."
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
