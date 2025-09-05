// File: app/media/information/page.tsx
// Media information gathering form
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MEDIA_TYPES = [
  "Television",
  "Radio/Podcast", 
  "Print/Newspaper",
  "Online/Digital",
  "Trade Publication",
  "Blog/Influencer"
];

const STORY_TYPES = [
  "Technology Feature",
  "Industry Analysis",
  "Case Study",
  "Company Profile",
  "Trend Report",
  "Expert Interview"
];

const URGENCY_LEVELS = [
  "Immediate (within 24 hours)",
  "This week",
  "This month",
  "Flexible timeline",
  "Just exploring"
];

export default function MediaInformationPage() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    email: "",
    phone: "",
    organization: "",
    website: "",
    state: "",
    
    // Media Details
    mediaType: "",
    storyType: "",
    audience: "",
    circulation: "",
    deadline: "",
    urgency: "",
    specificInterests: "",
    
    // Story Requirements
    storyRequirements: "",
    interviewRequests: "",
    siteVisit: false,
    pressKit: false,
    exclusiveAccess: false,
    embargoDate: "",
    
    // Additional Info
    additionalInfo: "",
    followUpMethods: [] as string[],
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
    if (!formData.name || !formData.email || !formData.mediaType || !formData.storyType) {
      alert("Please fill in all required fields");
      return;
    }
    if (!formData.agreeToContact || !formData.agreeToTerms) {
      alert("Please agree to the terms and contact preferences");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Media information submitted:", formData);
    
    // Redirect to confirmation page
    router.push("/media/confirmation");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/media" className="text-sm text-gray-600 hover:underline">← Back to Media</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Media Information Request</h1>
        <p className="text-gray-600 mb-8">
          Help us understand your story needs so we can provide the best resources and access for your coverage.
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
                Organization/Publication
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => handleInputChange("organization", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your media organization"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://yourwebsite.com"
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
                placeholder="Your location"
              />
            </div>
          </div>
        </div>

        {/* Media Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Media Details</h2>
          
          {/* Media Type */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What type of media do you represent? *
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {MEDIA_TYPES.map((type) => (
                <label
                  key={type}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.mediaType === type
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="mediaType"
                    value={type}
                    checked={formData.mediaType === type}
                    onChange={(e) => handleInputChange("mediaType", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Story Type */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What type of story are you working on? *
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {STORY_TYPES.map((type) => (
                <label
                  key={type}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.storyType === type
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="storyType"
                    value={type}
                    checked={formData.storyType === type}
                    onChange={(e) => handleInputChange("storyType", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Audience */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Who is your target audience?
            </h3>
            <textarea
              value={formData.audience}
              onChange={(e) => handleInputChange("audience", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Describe your audience demographics, interests, and reach..."
            />
          </div>

          {/* Circulation/Reach */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What is your publication's circulation/reach?
            </h3>
            <input
              type="text"
              value={formData.circulation}
              onChange={(e) => handleInputChange("circulation", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 50,000 monthly readers, 100K social followers"
            />
          </div>

          {/* Deadline */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What is your deadline?
            </h3>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) => handleInputChange("deadline", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Urgency */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How urgent is your request?
            </h3>
            <div className="space-y-3">
              {URGENCY_LEVELS.map((level) => (
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
              placeholder="Please describe what aspects of 3D printing technology, construction process, or business model you find most interesting for your story..."
            />
          </div>
        </div>

        {/* Story Requirements */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Story Requirements</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What specific resources do you need for your story?
            </h3>
            <textarea
              value={formData.storyRequirements}
              onChange={(e) => handleInputChange("storyRequirements", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe what specific resources, materials, or access you need for your story..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Do you need interviews with specific team members?
            </h3>
            <textarea
              value={formData.interviewRequests}
              onChange={(e) => handleInputChange("interviewRequests", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Please specify who you'd like to interview (CEO, CTO, engineers, etc.) and any specific questions..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Additional Access Needs
            </h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.siteVisit}
                  onChange={(e) => handleInputChange("siteVisit", e.target.checked)}
                  className="rounded"
                />
                <span>Site visit to active construction project</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.pressKit}
                  onChange={(e) => handleInputChange("pressKit", e.target.checked)}
                  className="rounded"
                />
                <span>Press kit with high-resolution images and videos</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.exclusiveAccess}
                  onChange={(e) => handleInputChange("exclusiveAccess", e.target.checked)}
                  className="rounded"
                />
                <span>Exclusive access or embargoed information</span>
              </label>
            </div>
          </div>

          {formData.exclusiveAccess && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Embargo Date (if applicable)
              </h3>
              <input
                type="datetime-local"
                value={formData.embargoDate}
                onChange={(e) => handleInputChange("embargoDate", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Is there anything else you'd like us to know about your story?
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
                "Email with press materials",
                "Phone call to discuss story details",
                "In-person meeting or site visit",
                "Exclusive interview scheduling",
                "Press kit delivery",
                "Regular updates on new projects",
                "Invitation to company events"
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
              <option value="press-release">Press Release</option>
              <option value="conference">Conference/Event</option>
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
              placeholder="Any specific questions about 3D printing technology, our company, or story opportunities..."
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
                I agree to be contacted by the Pörd team regarding my media request and story needs. *
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
            Submit Media Request
          </button>
        </div>
      </div>
    </div>
  );
}
