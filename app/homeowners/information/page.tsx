// File: app/homeowners/information/page.tsx
// Homeowners/Buyers information gathering form
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

export default function HomeownersInformationPage() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    email: "",
    phone: "",
    state: "",
    
    // Home Preferences
    homeType: "",
    budget: "",
    timeline: "",
    location: "",
    familySize: "",
    sustainability: "",
    customDesign: "",
    concerns: "",
    
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
    if (!formData.name || !formData.email || !formData.homeType || !formData.budget) {
      alert("Please fill in all required fields");
      return;
    }
    if (!formData.agreeToContact || !formData.agreeToTerms) {
      alert("Please agree to the terms and contact preferences");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Homeowners information submitted:", formData);
    
    // Redirect to confirmation page
    router.push("/homeowners/confirmation");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/homeowners" className="text-sm text-gray-600 hover:underline">← Back to Homeowners</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Your Dream Home Information</h1>
        <p className="text-gray-600 mb-8">
          Help us understand your vision so we can make your dream home a reality with 3D printing technology.
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
            <div>
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

        {/* Home Preferences */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Your Dream Home</h2>
          
          {/* Home Type */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What type of home are you looking for? *
            </h3>
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

          {/* Budget */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What is your budget range? *
            </h3>
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

          {/* Timeline */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              When are you looking to move in?
            </h3>
            <div className="space-y-3">
              {TIMELINES.map((timeline) => (
                <label
                  key={timeline}
                  className={`block w-full p-4 border border-gray-200 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    formData.timeline === timeline
                      ? "ring-2 ring-blue-500 bg-blue-50 border-blue-300"
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

          {/* Location */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Where are you looking to build? (City, State, or Region)
            </h3>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Austin, TX or Pacific Northwest"
            />
          </div>

          {/* Family Size */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How many people will be living in the home?
            </h3>
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

          {/* Sustainability */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How important is sustainability to you?
            </h3>
            <div className="space-y-3">
              {["Very Important", "Somewhat Important", "Not Very Important", "Not Important"].map((level) => (
                <label
                  key={level}
                  className={`block w-full p-4 border border-gray-200 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    formData.sustainability === level
                      ? "ring-2 ring-blue-500 bg-blue-50 border-blue-300"
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

          {/* Custom Design */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Are you interested in custom design options?
            </h3>
            <div className="space-y-3">
              {["Yes, very interested", "Yes, somewhat", "No, prefer standard designs", "Not sure"].map((option) => (
                <label
                  key={option}
                  className={`block w-full p-4 border border-gray-200 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    formData.customDesign === option
                      ? "ring-2 ring-blue-500 bg-blue-50 border-blue-300"
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

          {/* Concerns */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What are your main concerns about 3D printed homes?
            </h3>
            <textarea
              value={formData.concerns}
              onChange={(e) => handleInputChange("concerns", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please share any concerns, questions, or specific requirements you have..."
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Is there anything else you'd like us to know about your dream home?
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
                "Email updates about new designs",
                "Phone consultation with our team",
                "In-person meeting or site visit",
                "Custom design consultation",
                "Cost estimates and timeline",
                "Financing options and guidance",
                "Construction process overview"
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
              How urgent is your project timeline?
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
                I agree to be contacted by the Pörd team regarding my home building project. *
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
