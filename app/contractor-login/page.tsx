// File: app/contractor-login/page.tsx
// Contractor login and registration page
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CONTRACTOR_TYPES = [
  "General Contractor",
  "3D Printing Specialist", 
  "Construction Manager",
  "Project Coordinator",
  "Site Supervisor",
  "Quality Inspector"
];

const EXPERIENCE_LEVELS = [
  "0-2 years",
  "3-5 years",
  "6-10 years",
  "11-15 years",
  "16+ years"
];

const SERVICE_AREAS = [
  "Residential Construction",
  "Commercial Construction",
  "3D Printing Technology",
  "Project Management",
  "Quality Control",
  "Customer Relations"
];

export default function ContractorLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    // Login fields
    email: "",
    password: "",
    
    // Registration fields
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    contractorType: "",
    experienceLevel: "",
    serviceAreas: [] as string[],
    licenseNumber: "",
    insuranceProvider: "",
    insuranceExpiry: "",
    references: "",
    portfolio: "",
    agreeToTerms: false,
    agreeToPrivacy: false
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceAreaChange = (area: string) => {
    setFormData(prev => ({
      ...prev,
      serviceAreas: prev.serviceAreas.includes(area)
        ? prev.serviceAreas.filter(a => a !== area)
        : [...prev.serviceAreas, area]
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in all required fields");
      return;
    }
    
    // Here you would typically authenticate with your backend
    console.log("Contractor login:", { email: formData.email });
    
    // Redirect to contractor dashboard
    router.push("/contractor-dashboard");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      alert("Please fill in all required fields");
      return;
    }
    if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
      alert("Please agree to the terms and privacy policy");
      return;
    }
    
    // Here you would typically register with your backend
    console.log("Contractor registration:", formData);
    
    // Redirect to contractor dashboard
    router.push("/contractor-dashboard");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Contractor Portal</h1>
        <p className="text-xl text-gray-600">
          {isLogin ? "Sign in to manage your leads and projects" : "Join our network of trusted contractors"}
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              isLogin
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              !isLogin
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Register
          </button>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Login Form */}
        {isLogin && (
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
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
                  Password *
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-3"
              >
                Sign In
              </button>
            </form>
          </div>
        )}

        {/* Registration Form */}
        {!isLogin && (
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Contractor Registration</h2>
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Personal Information */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
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
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Construction Company"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
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
                    placeholder="12345"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contractor Type
                </label>
                <select
                  value={formData.contractorType}
                  onChange={(e) => handleInputChange("contractorType", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your role</option>
                  {CONTRACTOR_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  {EXPERIENCE_LEVELS.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Areas (Select all that apply)
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {SERVICE_AREAS.map((area) => (
                    <label
                      key={area}
                      className={`card cursor-pointer transition-all hover:shadow-md ${
                        formData.serviceAreas.includes(area)
                          ? "ring-2 ring-blue-500 bg-blue-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.serviceAreas.includes(area)}
                        onChange={() => handleServiceAreaChange(area)}
                        className="sr-only"
                      />
                      <span className="font-medium">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* License and Insurance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  License Number
                </label>
                <input
                  type="text"
                  value={formData.licenseNumber}
                  onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your contractor license number"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Provider
                  </label>
                  <input
                    type="text"
                    value={formData.insuranceProvider}
                    onChange={(e) => handleInputChange("insuranceProvider", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Insurance company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Expiry
                  </label>
                  <input
                    type="date"
                    value={formData.insuranceExpiry}
                    onChange={(e) => handleInputChange("insuranceExpiry", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  References
                </label>
                <textarea
                  value={formData.references}
                  onChange={(e) => handleInputChange("references", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Please provide 2-3 professional references with contact information..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio/Previous Work
                </label>
                <textarea
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange("portfolio", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Describe your previous projects, especially 3D printing or innovative construction work..."
                />
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm">
                    I agree to the Contractor Terms of Service and understand my responsibilities as a Pörd contractor. *
                  </span>
                </label>
                
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeToPrivacy}
                    onChange={(e) => handleInputChange("agreeToPrivacy", e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm">
                    I agree to the Privacy Policy and consent to the processing of my personal data. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-3"
              >
                Register as Contractor
              </button>
            </form>
          </div>
        )}

        {/* Benefits Sidebar */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Why Join Pörd?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Access to qualified leads and customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Cutting-edge 3D printing technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Project management tools and support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Competitive rates and payment terms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Training and certification programs</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Contractor Benefits</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Real-time project tracking and updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Direct communication with customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Access to project specifications and plans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Quality control and inspection tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Performance analytics and reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
