// File: app/survey/page.tsx
// Main survey page with step 1 - General Info
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PROJECT_TYPES = [
  { id: "residential", label: "Residential Housing", description: "Single-family homes, townhouses, apartments" },
  { id: "commercial", label: "Commercial Buildings", description: "Offices, retail spaces, warehouses" },
  { id: "infrastructure", label: "Infrastructure", description: "Bridges, roads, public facilities" },
  { id: "emergency", label: "Emergency Housing", description: "Disaster relief, temporary shelters" },
  { id: "custom", label: "Custom Projects", description: "Unique architectural designs" }
];

const INDUSTRIES = [
  "Finance / Investors",
  "Construction / Design / Engineering", 
  "Educators",
  "Government",
  "Media",
  "Nonprofits",
  "Homeowners / Buyers",
  "Developers"
];

export default function SurveyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectTypes: [] as string[],
    industry: "",
    name: "",
    email: "",
    organization: "",
    state: ""
  });
  const router = useRouter();

  const handleProjectTypeChange = (typeId: string) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(typeId)
        ? prev.projectTypes.filter(id => id !== typeId)
        : [...prev.projectTypes, typeId]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (formData.projectTypes.length === 0 || !formData.industry || !formData.name || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    // Route to role-specific section based on industry
    const roleMap: { [key: string]: string } = {
      "Finance / Investors": "finance",
      "Construction / Design / Engineering": "construction",
      "Educators": "educators",
      "Government": "government",
      "Media": "media",
      "Nonprofits": "nonprofits",
      "Homeowners / Buyers": "homeowners",
      "Developers": "developers"
    };

    const role = roleMap[formData.industry];
    router.push(`/survey/${role}`);
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Step 1 of 3</span>
          <span>General Information</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "33%" }}></div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Tell Us About Your Interest</h1>
        
        {/* Q1: Project Types */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What type of 3D Printed Project are you most interested in?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECT_TYPES.map((type) => (
              <label
                key={type.id}
                className={`card cursor-pointer transition-all hover:shadow-md ${
                  formData.projectTypes.includes(type.id)
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.projectTypes.includes(type.id)}
                  onChange={() => handleProjectTypeChange(type.id)}
                  className="sr-only"
                />
                <h3 className="font-semibold mb-2">{type.label}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </label>
            ))}
          </div>
        </div>

        {/* Q2: Industry */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            What industry best describes you?
          </h2>
          <select
            value={formData.industry}
            onChange={(e) => handleInputChange("industry", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select your industry</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        {/* Q3: Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
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
                State
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
