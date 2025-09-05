"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DevelopersInformationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    companyType: "",
    foundedYear: "",
    employeeCount: "",
    annualRevenue: "",
    headquarters: "",
    operatingRegions: [] as string[],
    
    // Development Experience
    yearsInDevelopment: "",
    projectTypes: [] as string[],
    totalProjectsCompleted: "",
    averageProjectValue: "",
    currentPortfolio: "",
    previous3DExperience: "",
    
    // Project Information
    projectName: "",
    projectType: [] as string[],
    projectDescription: "",
    projectLocation: "",
    projectSize: "",
    estimatedUnits: "",
    targetMarket: [] as string[],
    projectTimeline: "",
    budgetRange: "",
    fundingStatus: "",
    fundingSources: [] as string[],
    
    // Technical Requirements
    designPreferences: [] as string[],
    sustainabilityGoals: [] as string[],
    technologyRequirements: [] as string[],
    qualityStandards: [] as string[],
    complianceNeeds: [] as string[],
    
    // Business Information
    businessModel: [] as string[],
    revenueModel: [] as string[],
    partnershipType: [] as string[],
    expectedROI: "",
    riskTolerance: "",
    marketStrategy: "",
    
    // Additional Information
    challenges: "",
    questions: "",
    followUp: [] as string[],
    urgency: "",
    referralSource: "",
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Developer Information:", formData);
    router.push("/developer-dashboard");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/developers" className="text-sm text-gray-600 hover:underline">← Back to Developers</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Development Project Information</h1>
        <p className="text-gray-600 mb-8">
          Help us understand your development company and project requirements so we can provide the best 3D printing solutions for your large-scale projects.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your development company name"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                  value={formData.contactName}
                  onChange={(e) => handleInputChange("contactName", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://yourcompany.com"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Type *</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  value={formData.companyType}
                  onChange={(e) => handleInputChange("companyType", e.target.value)}
                >
                  <option value="">Select company type</option>
                  <option value="Real Estate Developer">Real Estate Developer</option>
                  <option value="Construction Company">Construction Company</option>
                  <option value="Investment Firm">Investment Firm</option>
                  <option value="REIT">Real Estate Investment Trust (REIT)</option>
                  <option value="Government Entity">Government Entity</option>
                  <option value="Nonprofit Developer">Nonprofit Developer</option>
                  <option value="International Developer">International Developer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year Founded</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1990"
                  min="1800"
                  max="2024"
                  value={formData.foundedYear}
                  onChange={(e) => handleInputChange("foundedYear", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employee Count</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.employeeCount}
                  onChange={(e) => handleInputChange("employeeCount", e.target.value)}
                >
                  <option value="">Select employee count</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.annualRevenue}
                  onChange={(e) => handleInputChange("annualRevenue", e.target.value)}
                >
                  <option value="">Select revenue range</option>
                  <option value="Under $10M">Under $10M</option>
                  <option value="$10M - $50M">$10M - $50M</option>
                  <option value="$50M - $100M">$50M - $100M</option>
                  <option value="$100M - $500M">$100M - $500M</option>
                  <option value="$500M - $1B">$500M - $1B</option>
                  <option value="Over $1B">Over $1B</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Headquarters Location</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City, State/Country"
                  value={formData.headquarters}
                  onChange={(e) => handleInputChange("headquarters", e.target.value)}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Operating Regions (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "North America",
                  "South America", 
                  "Europe",
                  "Asia Pacific",
                  "Middle East",
                  "Africa",
                  "Local/Regional",
                  "International"
                ].map((region) => (
                  <label key={region} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.operatingRegions.includes(region)}
                      onChange={(e) => handleArrayChange("operatingRegions", region, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{region}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Development Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Development Experience</h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years in Development</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.yearsInDevelopment}
                  onChange={(e) => handleInputChange("yearsInDevelopment", e.target.value)}
                >
                  <option value="">Select experience level</option>
                  <option value="1-5 years">1-5 years</option>
                  <option value="6-10 years">6-10 years</option>
                  <option value="11-20 years">11-20 years</option>
                  <option value="21-30 years">21-30 years</option>
                  <option value="30+ years">30+ years</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Projects Completed</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Number of completed projects"
                  min="0"
                  value={formData.totalProjectsCompleted}
                  onChange={(e) => handleInputChange("totalProjectsCompleted", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Average Project Value</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.averageProjectValue}
                  onChange={(e) => handleInputChange("averageProjectValue", e.target.value)}
                >
                  <option value="">Select project value range</option>
                  <option value="Under $1M">Under $1M</option>
                  <option value="$1M - $5M">$1M - $5M</option>
                  <option value="$5M - $10M">$5M - $10M</option>
                  <option value="$10M - $25M">$10M - $25M</option>
                  <option value="$25M - $50M">$25M - $50M</option>
                  <option value="$50M - $100M">$50M - $100M</option>
                  <option value="Over $100M">Over $100M</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Previous 3D Printing Experience</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.previous3DExperience}
                  onChange={(e) => handleInputChange("previous3DExperience", e.target.value)}
                >
                  <option value="">Select experience level</option>
                  <option value="None">No experience</option>
                  <option value="Pilot projects">Pilot projects only</option>
                  <option value="Small projects">Small projects (under $1M)</option>
                  <option value="Medium projects">Medium projects ($1M-$10M)</option>
                  <option value="Large projects">Large projects ($10M+)</option>
                  <option value="Extensive">Extensive experience</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Project Types (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Residential communities",
                  "Apartment complexes",
                  "Mixed-use developments",
                  "Office buildings",
                  "Retail centers",
                  "Industrial facilities",
                  "Hospitality projects",
                  "Affordable housing",
                  "Luxury developments",
                  "Senior living",
                  "Student housing",
                  "Public infrastructure"
                ].map((type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.projectTypes.includes(type)}
                      onChange={(e) => handleArrayChange("projectTypes", type, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Portfolio Description</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="Describe your current development portfolio and notable projects..."
                value={formData.currentPortfolio}
                onChange={(e) => handleInputChange("currentPortfolio", e.target.value)}
              />
            </div>
          </div>

          {/* Project Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Project Information</h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your development project name"
                  required
                  value={formData.projectName}
                  onChange={(e) => handleInputChange("projectName", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Location *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City, State/Country"
                  required
                  value={formData.projectLocation}
                  onChange={(e) => handleInputChange("projectLocation", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Size (Acres)</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Project size in acres"
                  min="0"
                  step="0.1"
                  value={formData.projectSize}
                  onChange={(e) => handleInputChange("projectSize", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Units</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Total number of units"
                  min="1"
                  value={formData.estimatedUnits}
                  onChange={(e) => handleInputChange("estimatedUnits", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.projectTimeline}
                  onChange={(e) => handleInputChange("projectTimeline", e.target.value)}
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate (0-6 months)">Immediate (0-6 months)</option>
                  <option value="Short-term (6-12 months)">Short-term (6-12 months)</option>
                  <option value="Medium-term (1-2 years)">Medium-term (1-2 years)</option>
                  <option value="Long-term (2+ years)">Long-term (2+ years)</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.budgetRange}
                  onChange={(e) => handleInputChange("budgetRange", e.target.value)}
                >
                  <option value="">Select budget range</option>
                  <option value="Under $10M">Under $10M</option>
                  <option value="$10M - $25M">$10M - $25M</option>
                  <option value="$25M - $50M">$25M - $50M</option>
                  <option value="$50M - $100M">$50M - $100M</option>
                  <option value="$100M - $250M">$100M - $250M</option>
                  <option value="$250M - $500M">$250M - $500M</option>
                  <option value="Over $500M">Over $500M</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="Describe your development project in detail..."
                required
                value={formData.projectDescription}
                onChange={(e) => handleInputChange("projectDescription", e.target.value)}
              />
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Target Market (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Luxury market",
                  "Mid-market",
                  "Affordable housing",
                  "Senior living",
                  "Student housing",
                  "First-time buyers",
                  "Rental market",
                  "Commercial tenants",
                  "Mixed-use",
                  "International buyers",
                  "Local market",
                  "Other"
                ].map((market) => (
                  <label key={market} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.targetMarket.includes(market)}
                      onChange={(e) => handleArrayChange("targetMarket", market, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{market}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Funding Status</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.fundingStatus}
                  onChange={(e) => handleInputChange("fundingStatus", e.target.value)}
                >
                  <option value="">Select funding status</option>
                  <option value="Fully funded">Fully funded</option>
                  <option value="Partially funded">Partially funded</option>
                  <option value="Seeking funding">Seeking funding</option>
                  <option value="In development">In development</option>
                  <option value="Concept stage">Concept stage</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Funding Sources (Select all that apply)</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value=""
                  onChange={(e) => {
                    if (e.target.value) {
                      handleArrayChange("fundingSources", e.target.value, true);
                      e.target.value = "";
                    }
                  }}
                >
                  <option value="">Add funding source</option>
                  <option value="Private equity">Private equity</option>
                  <option value="Bank financing">Bank financing</option>
                  <option value="Government grants">Government grants</option>
                  <option value="REIT funding">REIT funding</option>
                  <option value="International investors">International investors</option>
                  <option value="Joint venture">Joint venture</option>
                  <option value="Crowdfunding">Crowdfunding</option>
                  <option value="Other">Other</option>
                </select>
                {formData.fundingSources.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.fundingSources.map((source, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        {source}
                        <button
                          type="button"
                          onClick={() => handleArrayChange("fundingSources", source, false)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Technical Requirements */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Technical Requirements</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Design Preferences (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Modern/Contemporary",
                  "Traditional",
                  "Sustainable/Green",
                  "Luxury finishes",
                  "Minimalist",
                  "Custom designs",
                  "Modular construction",
                  "Smart home features",
                  "Universal design",
                  "Cultural adaptation",
                  "Other"
                ].map((preference) => (
                  <label key={preference} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.designPreferences.includes(preference)}
                      onChange={(e) => handleArrayChange("designPreferences", preference, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{preference}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Sustainability Goals (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "LEED certification",
                  "Net zero energy",
                  "Carbon neutral",
                  "Water conservation",
                  "Waste reduction",
                  "Renewable energy",
                  "Green materials",
                  "Energy efficiency",
                  "Sustainable landscaping",
                  "Other"
                ].map((goal) => (
                  <label key={goal} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.sustainabilityGoals.includes(goal)}
                      onChange={(e) => handleArrayChange("sustainabilityGoals", goal, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{goal}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Technology Requirements (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Smart building systems",
                  "IoT integration",
                  "Automated systems",
                  "High-speed internet",
                  "Security systems",
                  "Energy management",
                  "Building automation",
                  "Mobile apps",
                  "Other"
                ].map((tech) => (
                  <label key={tech} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.technologyRequirements.includes(tech)}
                      onChange={(e) => handleArrayChange("technologyRequirements", tech, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{tech}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Business Information</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Business Model (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Build and sell",
                  "Build and hold",
                  "Build to rent",
                  "Mixed-use development",
                  "Master planned communities",
                  "Public-private partnership",
                  "Joint venture",
                  "Other"
                ].map((model) => (
                  <label key={model} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.businessModel.includes(model)}
                      onChange={(e) => handleArrayChange("businessModel", model, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{model}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected ROI</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.expectedROI}
                  onChange={(e) => handleInputChange("expectedROI", e.target.value)}
                >
                  <option value="">Select expected ROI</option>
                  <option value="Under 10%">Under 10%</option>
                  <option value="10-15%">10-15%</option>
                  <option value="15-20%">15-20%</option>
                  <option value="20-25%">20-25%</option>
                  <option value="25-30%">25-30%</option>
                  <option value="Over 30%">Over 30%</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Risk Tolerance</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.riskTolerance}
                  onChange={(e) => handleInputChange("riskTolerance", e.target.value)}
                >
                  <option value="">Select risk tolerance</option>
                  <option value="Conservative">Conservative</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Aggressive">Aggressive</option>
                  <option value="Very aggressive">Very aggressive</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Market Strategy</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="Describe your market strategy and competitive advantages..."
                value={formData.marketStrategy}
                onChange={(e) => handleInputChange("marketStrategy", e.target.value)}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Challenges and Concerns</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="What challenges or concerns do you have about this project or 3D printing technology?"
                value={formData.challenges}
                onChange={(e) => handleInputChange("challenges", e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Questions for Our Team</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="Any specific questions about our technology, process, or partnership opportunities?"
                value={formData.questions}
                onChange={(e) => handleInputChange("questions", e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">How would you like us to follow up? (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Email updates about development opportunities",
                  "Phone consultation with our team",
                  "In-person meeting or site visit",
                  "Project proposal and timeline",
                  "Cost estimates and budget planning",
                  "Technical demonstration",
                  "Market analysis presentation",
                  "Partnership agreement discussion",
                  "Other"
                ].map((followUp) => (
                  <label key={followUp} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.followUp.includes(followUp)}
                      onChange={(e) => handleArrayChange("followUp", followUp, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{followUp}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How urgent is your timeline?</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.urgency}
                  onChange={(e) => handleInputChange("urgency", e.target.value)}
                >
                  <option value="">Select urgency level</option>
                  <option value="Very urgent (within 1 month)">Very urgent (within 1 month)</option>
                  <option value="Urgent (1-3 months)">Urgent (1-3 months)</option>
                  <option value="Moderate (3-6 months)">Moderate (3-6 months)</option>
                  <option value="Flexible (6+ months)">Flexible (6+ months)</option>
                  <option value="Just exploring options">Just exploring options</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.referralSource}
                  onChange={(e) => handleInputChange("referralSource", e.target.value)}
                >
                  <option value="">Select referral source</option>
                  <option value="Website">Website</option>
                  <option value="Social media">Social media</option>
                  <option value="News article">News article</option>
                  <option value="Conference/Event">Conference/Event</option>
                  <option value="Referral from partner">Referral from partner</option>
                  <option value="Google search">Google search</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="Any additional information you'd like to share about your company or project?"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              />
            </div>
          </div>

          {/* Agreements */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Agreements</h2>
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm">I agree to be contacted by the Pörd team regarding development opportunities. *</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm">I agree to the Terms of Service and Privacy Policy. *</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn-primary text-lg px-8 py-4">
              Submit Development Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
