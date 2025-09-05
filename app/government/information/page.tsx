// File: app/government/information/page.tsx
// Government information gathering form
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GOVERNMENT_LEVELS = [
  "Federal",
  "State", 
  "County",
  "City/Municipal",
  "Regional",
  "International"
];

const DEPARTMENTS = [
  "Housing & Urban Development",
  "Transportation",
  "Economic Development",
  "Planning & Zoning",
  "Public Works",
  "Environmental Protection",
  "Emergency Management",
  "Other"
];

const PROJECT_TYPES = [
  "Affordable Housing",
  "Emergency Housing",
  "Public Infrastructure",
  "Disaster Relief",
  "Community Development",
  "Urban Planning",
  "Environmental Projects",
  "Other"
];

const BUDGET_RANGES = [
  "Under $1M",
  "$1M - $5M",
  "$5M - $10M",
  "$10M - $25M",
  "$25M - $50M",
  "Over $50M"
];

export default function GovernmentInformationPage() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    title: "",
    email: "",
    phone: "",
    department: "",
    organization: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Government Details
    governmentLevel: "",
    projectTypes: [] as string[],
    budget: "",
    timeline: "",
    jurisdiction: "",
    population: "",
    currentChallenges: "",
    sustainabilityGoals: "",
    
    // Project Information
    projectDescription: "",
    expectedBenefits: "",
    communityImpact: "",
    regulatoryRequirements: "",
    stakeholderInvolvement: "",
    
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

  const handleProjectTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type]
    }));
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
    if (!formData.name || !formData.email || !formData.governmentLevel || !formData.department) {
      alert("Please fill in all required fields");
      return;
    }
    if (!formData.agreeToContact || !formData.agreeToTerms) {
      alert("Please agree to the terms and contact preferences");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Government information submitted:", formData);
    
    // Redirect to contact page for additional information
    router.push("/contact");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/government" className="text-sm text-gray-600 hover:underline">← Back to Government</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Government Partnership Information</h1>
        <p className="text-gray-600 mb-8">
          Help us understand your government's needs so we can provide the best solutions for your community.
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
                Title/Position
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your job title"
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
                Department *
              </label>
              <select
                value={formData.department}
                onChange={(e) => handleInputChange("department", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select department</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
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
                placeholder="Your government organization"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Street address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="City"
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
                placeholder="State"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ZIP Code"
              />
            </div>
          </div>
        </div>

        {/* Government Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Government Details</h2>
          
          {/* Government Level */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What level of government do you represent? *
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {GOVERNMENT_LEVELS.map((level) => (
                <label
                  key={level}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.governmentLevel === level
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="governmentLevel"
                    value={level}
                    checked={formData.governmentLevel === level}
                    onChange={(e) => handleInputChange("governmentLevel", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Types */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What types of projects are you interested in? (Select all that apply)
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

          {/* Budget */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What is your typical project budget range?
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
              What is your project timeline?
            </h3>
            <select
              value={formData.timeline}
              onChange={(e) => handleInputChange("timeline", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate (0-6 months)</option>
              <option value="short">Short-term (6-12 months)</option>
              <option value="medium">Medium-term (1-2 years)</option>
              <option value="long">Long-term (2+ years)</option>
              <option value="planning">Just planning/exploring</option>
            </select>
          </div>

          {/* Jurisdiction */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What is your jurisdiction or service area?
            </h3>
            <input
              type="text"
              value={formData.jurisdiction}
              onChange={(e) => handleInputChange("jurisdiction", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., City of Austin, Travis County, State of Texas"
            />
          </div>

          {/* Population */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What is the population of your jurisdiction?
            </h3>
            <select
              value={formData.population}
              onChange={(e) => handleInputChange("population", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select population range</option>
              <option value="under-10k">Under 10,000</option>
              <option value="10k-50k">10,000 - 50,000</option>
              <option value="50k-100k">50,000 - 100,000</option>
              <option value="100k-500k">100,000 - 500,000</option>
              <option value="500k-1m">500,000 - 1,000,000</option>
              <option value="over-1m">Over 1,000,000</option>
            </select>
          </div>

          {/* Current Challenges */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What are your biggest challenges in housing and infrastructure?
            </h3>
            <textarea
              value={formData.currentChallenges}
              onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe the main challenges your government faces in housing, infrastructure, or community development..."
            />
          </div>

          {/* Sustainability Goals */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What are your sustainability and environmental goals?
            </h3>
            <textarea
              value={formData.sustainabilityGoals}
              onChange={(e) => handleInputChange("sustainabilityGoals", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe your sustainability goals, environmental initiatives, or green building requirements..."
            />
          </div>
        </div>

        {/* Project Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Project Information</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Please describe your specific project or initiative
            </h3>
            <textarea
              value={formData.projectDescription}
              onChange={(e) => handleInputChange("projectDescription", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please provide details about your specific project, initiative, or area where you need assistance..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What benefits do you expect from this project?
            </h3>
            <textarea
              value={formData.expectedBenefits}
              onChange={(e) => handleInputChange("expectedBenefits", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe the expected benefits for your community, residents, or stakeholders..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How will this project impact your community?
            </h3>
            <textarea
              value={formData.communityImpact}
              onChange={(e) => handleInputChange("communityImpact", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe the expected community impact, job creation, economic benefits, or social outcomes..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What regulatory requirements or approvals are needed?
            </h3>
            <textarea
              value={formData.regulatoryRequirements}
              onChange={(e) => handleInputChange("regulatoryRequirements", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Please describe any regulatory requirements, permits, approvals, or compliance needs..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Who are the key stakeholders involved?
            </h3>
            <textarea
              value={formData.stakeholderInvolvement}
              onChange={(e) => handleInputChange("stakeholderInvolvement", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Please list key stakeholders, community groups, or other parties involved in this project..."
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Is there anything else you'd like us to know about your project?
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
                "Email with project information",
                "Phone call to discuss details",
                "In-person meeting or site visit",
                "Proposal and cost estimates",
                "Technical specifications and materials",
                "Regulatory and permitting guidance",
                "Community engagement support"
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
              How did you hear about us?
            </h3>
            <select
              value={formData.referralSource}
              onChange={(e) => handleInputChange("referralSource", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select referral source</option>
              <option value="google">Google Search</option>
              <option value="social">Social Media</option>
              <option value="referral">Colleague Referral</option>
              <option value="conference">Conference/Event</option>
              <option value="news">News Article</option>
              <option value="other">Other</option>
            </select>
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
              placeholder="Any specific questions about 3D printing technology, government partnerships, or project implementation..."
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
                I agree to be contacted by the Pörd team regarding government partnership opportunities. *
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
