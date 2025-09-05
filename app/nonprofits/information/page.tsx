"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NonprofitsInformationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Organization Information
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    organizationType: "",
    taxId: "",
    foundedYear: "",
    staffSize: "",
    annualBudget: "",
    serviceArea: "",
    states: [] as string[],
    
    // Mission and Focus
    missionStatement: "",
    primaryFocus: [] as string[],
    targetPopulation: [] as string[],
    currentPrograms: "",
    successMetrics: "",
    
    // Project Information
    projectType: [] as string[],
    projectDescription: "",
    projectLocation: "",
    projectTimeline: "",
    estimatedUnits: "",
    targetPopulationSize: "",
    fundingStatus: "",
    budgetRange: "",
    fundingSources: [] as string[],
    
    // Community Impact
    communityNeeds: "",
    expectedImpact: "",
    sustainabilityGoals: [] as string[],
    environmentalBenefits: "",
    socialBenefits: "",
    economicBenefits: "",
    
    // Partnership Details
    partnershipType: [] as string[],
    previousExperience: "",
    technicalSupport: [] as string[],
    trainingNeeds: [] as string[],
    volunteerInvolvement: "",
    communityEngagement: "",
    
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
    // In a real application, you would send this data to your backend
    console.log("Nonprofit Information:", formData);
    router.push("/contact");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/nonprofits" className="text-sm text-gray-600 hover:underline">← Back to Nonprofits</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Partnership Information</h1>
        <p className="text-gray-600 mb-8">
          Help us understand your organization's mission and how we can work together to create meaningful community impact through 3D printed housing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Organization Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Organization Information</h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your organization's name"
                  required
                  value={formData.organizationName}
                  onChange={(e) => handleInputChange("organizationName", e.target.value)}
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
                  placeholder="your@organization.org"
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
                  placeholder="https://yourorganization.org"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type *</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  value={formData.organizationType}
                  onChange={(e) => handleInputChange("organizationType", e.target.value)}
                >
                  <option value="">Select organization type</option>
                  <option value="501(c)(3) Nonprofit">501(c)(3) Nonprofit</option>
                  <option value="501(c)(4) Social Welfare">501(c)(4) Social Welfare</option>
                  <option value="Community Development Corporation">Community Development Corporation</option>
                  <option value="Housing Authority">Housing Authority</option>
                  <option value="Religious Organization">Religious Organization</option>
                  <option value="Foundation">Foundation</option>
                  <option value="International NGO">International NGO</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID (EIN)</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="XX-XXXXXXX"
                  value={formData.taxId}
                  onChange={(e) => handleInputChange("taxId", e.target.value)}
                />
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Staff Size</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.staffSize}
                  onChange={(e) => handleInputChange("staffSize", e.target.value)}
                >
                  <option value="">Select staff size</option>
                  <option value="1-5">1-5 employees</option>
                  <option value="6-20">6-20 employees</option>
                  <option value="21-50">21-50 employees</option>
                  <option value="51-100">51-100 employees</option>
                  <option value="100+">100+ employees</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Budget</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.annualBudget}
                  onChange={(e) => handleInputChange("annualBudget", e.target.value)}
                >
                  <option value="">Select budget range</option>
                  <option value="Under $100K">Under $100K</option>
                  <option value="$100K - $500K">$100K - $500K</option>
                  <option value="$500K - $1M">$500K - $1M</option>
                  <option value="$1M - $5M">$1M - $5M</option>
                  <option value="$5M - $10M">$5M - $10M</option>
                  <option value="Over $10M">Over $10M</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Area</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Los Angeles County, CA or National"
                value={formData.serviceArea}
                onChange={(e) => handleInputChange("serviceArea", e.target.value)}
              />
            </div>
          </div>

          {/* Mission and Focus */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Mission and Focus</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="Describe your organization's mission and core values..."
                value={formData.missionStatement}
                onChange={(e) => handleInputChange("missionStatement", e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Primary Focus Areas (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Affordable Housing",
                  "Homelessness Prevention",
                  "Disaster Relief",
                  "Community Development",
                  "Environmental Justice",
                  "Veterans Services",
                  "Senior Housing",
                  "Youth Development",
                  "Economic Development",
                  "Health and Wellness",
                  "Education",
                  "International Relief"
                ].map((focus) => (
                  <label key={focus} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.primaryFocus.includes(focus)}
                      onChange={(e) => handleArrayChange("primaryFocus", focus, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{focus}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Target Population (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Low-income families",
                  "Homeless individuals",
                  "Veterans",
                  "Seniors",
                  "People with disabilities",
                  "Single parents",
                  "Immigrants/Refugees",
                  "Youth aging out of foster care",
                  "Disaster survivors",
                  "Rural communities",
                  "Urban communities",
                  "All community members"
                ].map((population) => (
                  <label key={population} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.targetPopulation.includes(population)}
                      onChange={(e) => handleArrayChange("targetPopulation", population, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{population}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Programs and Services</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="Describe your current programs, services, and initiatives..."
                value={formData.currentPrograms}
                onChange={(e) => handleInputChange("currentPrograms", e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Success Metrics</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="How do you measure success? What metrics do you track?"
                value={formData.successMetrics}
                onChange={(e) => handleInputChange("successMetrics", e.target.value)}
              />
            </div>
          </div>

          {/* Project Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Project Information</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Project Type (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Affordable housing development",
                  "Emergency shelter construction",
                  "Disaster relief housing",
                  "Senior living community",
                  "Veterans housing",
                  "Transitional housing",
                  "Community center",
                  "Multi-family housing",
                  "Single-family homes",
                  "Tiny home community",
                  "Sustainable housing",
                  "Mixed-use development"
                ].map((type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.projectType.includes(type)}
                      onChange={(e) => handleArrayChange("projectType", type, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="Describe your proposed project in detail..."
                required
                value={formData.projectDescription}
                onChange={(e) => handleInputChange("projectDescription", e.target.value)}
              />
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Location *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City, State or specific address"
                  required
                  value={formData.projectLocation}
                  onChange={(e) => handleInputChange("projectLocation", e.target.value)}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Units</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Number of housing units"
                  min="1"
                  value={formData.estimatedUnits}
                  onChange={(e) => handleInputChange("estimatedUnits", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Population Size</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Number of people to serve"
                  min="1"
                  value={formData.targetPopulationSize}
                  onChange={(e) => handleInputChange("targetPopulationSize", e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.budgetRange}
                  onChange={(e) => handleInputChange("budgetRange", e.target.value)}
                >
                  <option value="">Select budget range</option>
                  <option value="Under $500K">Under $500K</option>
                  <option value="$500K - $1M">$500K - $1M</option>
                  <option value="$1M - $5M">$1M - $5M</option>
                  <option value="$5M - $10M">$5M - $10M</option>
                  <option value="$10M - $25M">$10M - $25M</option>
                  <option value="Over $25M">Over $25M</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Funding Sources (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Federal grants",
                  "State grants",
                  "Local government funding",
                  "Private foundations",
                  "Corporate sponsorships",
                  "Individual donations",
                  "Community fundraising",
                  "Bank loans",
                  "Tax credits",
                  "Bond financing",
                  "International funding",
                  "Other"
                ].map((source) => (
                  <label key={source} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.fundingSources.includes(source)}
                      onChange={(e) => handleArrayChange("fundingSources", source, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{source}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Community Impact</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Community Needs</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="What specific needs in your community would this project address?"
                value={formData.communityNeeds}
                onChange={(e) => handleInputChange("communityNeeds", e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected Impact</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="What positive impact do you expect this project to have on the community?"
                value={formData.expectedImpact}
                onChange={(e) => handleInputChange("expectedImpact", e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Sustainability Goals (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Environmental sustainability",
                  "Economic sustainability",
                  "Social sustainability",
                  "Energy efficiency",
                  "Water conservation",
                  "Waste reduction",
                  "Carbon footprint reduction",
                  "Green building certification",
                  "Renewable energy integration",
                  "Sustainable materials",
                  "Community resilience",
                  "Long-term affordability"
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
            
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Environmental Benefits</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="Environmental benefits..."
                  value={formData.environmentalBenefits}
                  onChange={(e) => handleInputChange("environmentalBenefits", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Social Benefits</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="Social benefits..."
                  value={formData.socialBenefits}
                  onChange={(e) => handleInputChange("socialBenefits", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Economic Benefits</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="Economic benefits..."
                  value={formData.economicBenefits}
                  onChange={(e) => handleInputChange("economicBenefits", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Partnership Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Partnership Details</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Partnership Type (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Project partnership",
                  "Long-term collaboration",
                  "Pilot program",
                  "Research collaboration",
                  "Community engagement",
                  "Volunteer coordination",
                  "Resource sharing",
                  "Advocacy partnership",
                  "Training partnership",
                  "Technical assistance",
                  "Funding partnership",
                  "Other"
                ].map((type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.partnershipType.includes(type)}
                      onChange={(e) => handleArrayChange("partnershipType", type, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Previous Experience with 3D Printing</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="Describe any previous experience with 3D printing technology or similar innovations..."
                value={formData.previousExperience}
                onChange={(e) => handleInputChange("previousExperience", e.target.value)}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Technical Support Needed (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Project planning and design",
                  "Construction management",
                  "Technology training",
                  "Equipment operation",
                  "Quality control",
                  "Safety protocols",
                  "Maintenance training",
                  "Troubleshooting support",
                  "Documentation assistance",
                  "Compliance guidance",
                  "Performance monitoring",
                  "Other"
                ].map((support) => (
                  <label key={support} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.technicalSupport.includes(support)}
                      onChange={(e) => handleArrayChange("technicalSupport", support, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{support}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Training Needs (Select all that apply)</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Staff training",
                  "Volunteer training",
                  "Community education",
                  "Technology overview",
                  "Safety training",
                  "Maintenance training",
                  "Project management",
                  "Community engagement",
                  "Fundraising support",
                  "Grant writing",
                  "Impact measurement",
                  "Other"
                ].map((training) => (
                  <label key={training} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.trainingNeeds.includes(training)}
                      onChange={(e) => handleArrayChange("trainingNeeds", training, e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{training}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Volunteer Involvement</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="How do you envision volunteer involvement in this project?"
                  value={formData.volunteerInvolvement}
                  onChange={(e) => handleInputChange("volunteerInvolvement", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Community Engagement</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="How will you engage the community in this project?"
                  value={formData.communityEngagement}
                  onChange={(e) => handleInputChange("communityEngagement", e.target.value)}
                />
              </div>
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
                placeholder="What challenges or concerns do you have about this project or partnership?"
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
                  "Email updates about partnership opportunities",
                  "Phone consultation with our team",
                  "In-person meeting or site visit",
                  "Project proposal and timeline",
                  "Cost estimates and budget planning",
                  "Technical demonstration",
                  "Community presentation",
                  "Grant application support",
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
                placeholder="Any additional information you'd like to share about your organization or project?"
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
                <span className="text-sm">I agree to be contacted by the Pörd team regarding partnership opportunities. *</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm">I agree to the Terms of Service and Privacy Policy. *</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn-primary text-lg px-8 py-4">
              Submit Partnership Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
