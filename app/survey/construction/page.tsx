// File: app/survey/construction/page.tsx
// Construction/Design/Engineering specific survey questions
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const COMPANY_SIZES = [
  "1-10 employees",
  "11-50 employees", 
  "51-200 employees",
  "201-500 employees",
  "500+ employees"
];

const EXPERIENCE_LEVELS = [
  "No experience with 3D printing",
  "Some knowledge, no hands-on experience",
  "Limited hands-on experience",
  "Moderate experience",
  "Extensive experience"
];

const PROJECT_TYPES = [
  "Residential construction",
  "Commercial construction",
  "Infrastructure projects",
  "Custom architectural designs",
  "Emergency/disaster relief",
  "Research and development"
];

export default function ConstructionSurveyPage() {
  const [formData, setFormData] = useState({
    companySize: "",
    experienceLevel: "",
    projectTypes: [] as string[],
    currentChallenges: "",
    technologyInterest: "",
    collaborationInterest: "",
    timeline: "",
    specificNeeds: ""
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProjectTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type]
    }));
  };

  const handleNext = () => {
    if (!formData.companySize || !formData.experienceLevel || formData.projectTypes.length === 0) {
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
          <span>Construction / Design / Engineering</span>
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
        <h1 className="text-3xl font-bold mb-6">Professional Background</h1>
        
        {/* Q10: Company Size */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What is the size of your company?
          </h2>
          <div className="space-y-3">
            {COMPANY_SIZES.map((size) => (
              <label
                key={size}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.companySize === size
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="companySize"
                  value={size}
                  checked={formData.companySize === size}
                  onChange={(e) => handleInputChange("companySize", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q11: Experience Level */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What is your experience level with 3D printing technology?
          </h2>
          <div className="space-y-3">
            {EXPERIENCE_LEVELS.map((level) => (
              <label
                key={level}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.experienceLevel === level
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="experienceLevel"
                  value={level}
                  checked={formData.experienceLevel === level}
                  onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q12: Project Types */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What types of projects does your company work on? (Select all that apply)
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {PROJECT_TYPES.map((type) => (
              <label
                key={type}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.projectTypes.includes(type)
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.projectTypes.includes(type)}
                  onChange={() => handleProjectTypeChange(type)}
                  className="sr-only"
                />
                <span className="font-medium">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q13: Current Challenges */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What are your biggest challenges in traditional construction?
          </h2>
          <textarea
            value={formData.currentChallenges}
            onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Please describe the main challenges you face in your current construction projects..."
          />
        </div>

        {/* Q14: Technology Interest */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What aspects of 3D printing technology interest you most?
          </h2>
          <textarea
            value={formData.technologyInterest}
            onChange={(e) => handleInputChange("technologyInterest", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Please describe what aspects of 3D printing technology you find most interesting or promising..."
          />
        </div>

        {/* Additional Questions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Are you interested in collaborating with us on projects?
          </h2>
          <div className="space-y-3">
            {["Yes, very interested", "Yes, somewhat interested", "Maybe, need more information", "No, just exploring"].map((option) => (
              <label
                key={option}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.collaborationInterest === option
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="collaborationInterest"
                  value={option}
                  checked={formData.collaborationInterest === option}
                  onChange={(e) => handleInputChange("collaborationInterest", e.target.value)}
                  className="sr-only"
                />
                <span className="font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What is your timeline for implementing 3D printing technology?
          </h2>
          <select
            value={formData.timeline}
            onChange={(e) => handleInputChange("timeline", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (0-3 months)</option>
            <option value="short">Short-term (3-6 months)</option>
            <option value="medium">Medium-term (6-12 months)</option>
            <option value="long">Long-term (1+ years)</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What specific needs or requirements do you have?
          </h2>
          <textarea
            value={formData.specificNeeds}
            onChange={(e) => handleInputChange("specificNeeds", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Please describe any specific needs, requirements, or questions you have about 3D printing technology..."
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
