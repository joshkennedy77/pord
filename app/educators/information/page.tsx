// File: app/educators/information/page.tsx
// Educators information gathering form
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const INSTITUTION_TYPES = [
  "K-12 School",
  "Community College",
  "University",
  "Technical Institute",
  "Trade School",
  "Research Institution",
  "Educational Nonprofit",
  "Other"
];

const ACADEMIC_DEPARTMENTS = [
  "Architecture",
  "Engineering",
  "Construction Management",
  "Environmental Science",
  "Urban Planning",
  "Computer Science",
  "Design",
  "Business",
  "Other"
];

const PROGRAM_TYPES = [
  "Degree Program",
  "Certificate Program",
  "Continuing Education",
  "Workshop/Short Course",
  "Research Project",
  "Student Competition",
  "Faculty Development",
  "Industry Partnership"
];

const STUDENT_LEVELS = [
  "Elementary (K-5)",
  "Middle School (6-8)",
  "High School (9-12)",
  "Undergraduate",
  "Graduate",
  "Professional Development",
  "Mixed Levels"
];

const INTEREST_AREAS = [
  "3D Printing Technology",
  "Sustainable Construction",
  "Digital Fabrication",
  "Building Information Modeling (BIM)",
  "Materials Science",
  "Project Management",
  "Innovation in Construction",
  "Career Preparation"
];

export default function EducatorsInformationPage() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    title: "",
    email: "",
    phone: "",
    department: "",
    institution: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Institution Details
    institutionType: "",
    academicDepartments: [] as string[],
    studentCount: "",
    facultyCount: "",
    programTypes: [] as string[],
    studentLevels: [] as string[],
    
    // Educational Goals
    interestAreas: [] as string[],
    learningObjectives: "",
    curriculumIntegration: "",
    handsOnLearning: "",
    technologyAccess: "",
    budget: "",
    timeline: "",
    
    // Project Information
    projectDescription: "",
    expectedOutcomes: "",
    studentBenefits: "",
    facultyBenefits: "",
    industryConnections: "",
    researchOpportunities: "",
    
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

  const handleMultiSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.institutionType || !formData.department) {
      alert("Please fill in all required fields");
      return;
    }
    if (!formData.agreeToContact || !formData.agreeToTerms) {
      alert("Please agree to the terms and contact preferences");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Educators information submitted:", formData);
    
    // Redirect to contact page for additional information
    router.push("/contact");
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/educators" className="text-sm text-gray-600 hover:underline">← Back to Educators</Link>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Educational Partnership Information</h1>
        <p className="text-gray-600 mb-8">
          Help us understand your educational institution's needs so we can provide the best learning opportunities for your students.
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
                placeholder="Professor, Teacher, Administrator, etc."
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
                placeholder="your@institution.edu"
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
                {ACADEMIC_DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution
              </label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) => handleInputChange("institution", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your educational institution"
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
                placeholder="Institution address"
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

        {/* Institution Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Institution Details</h2>
          
          {/* Institution Type */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What type of educational institution do you represent? *
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INSTITUTION_TYPES.map((type) => (
                <label
                  key={type}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.institutionType === type
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="institutionType"
                    value={type}
                    checked={formData.institutionType === type}
                    onChange={(e) => handleInputChange("institutionType", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Academic Departments */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Which academic departments are involved? (Select all that apply)
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ACADEMIC_DEPARTMENTS.map((dept) => (
                <label
                  key={dept}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.academicDepartments.includes(dept)
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.academicDepartments.includes(dept)}
                    onChange={() => handleMultiSelectChange("academicDepartments", dept)}
                    className="sr-only"
                  />
                  <span className="font-medium">{dept}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Student and Faculty Count */}
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Approximate Student Count
              </label>
              <select
                value={formData.studentCount}
                onChange={(e) => handleInputChange("studentCount", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select range</option>
                <option value="under-100">Under 100</option>
                <option value="100-500">100 - 500</option>
                <option value="500-1000">500 - 1,000</option>
                <option value="1000-5000">1,000 - 5,000</option>
                <option value="5000-10000">5,000 - 10,000</option>
                <option value="over-10000">Over 10,000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Approximate Faculty Count
              </label>
              <select
                value={formData.facultyCount}
                onChange={(e) => handleInputChange("facultyCount", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select range</option>
                <option value="under-10">Under 10</option>
                <option value="10-25">10 - 25</option>
                <option value="25-50">25 - 50</option>
                <option value="50-100">50 - 100</option>
                <option value="100-500">100 - 500</option>
                <option value="over-500">Over 500</option>
              </select>
            </div>
          </div>

          {/* Program Types */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What types of programs are you interested in? (Select all that apply)
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PROGRAM_TYPES.map((type) => (
                <label
                  key={type}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.programTypes.includes(type)
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.programTypes.includes(type)}
                    onChange={() => handleMultiSelectChange("programTypes", type)}
                    className="sr-only"
                  />
                  <span className="font-medium">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Student Levels */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What student levels would be involved? (Select all that apply)
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {STUDENT_LEVELS.map((level) => (
                <label
                  key={level}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.studentLevels.includes(level)
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.studentLevels.includes(level)}
                    onChange={() => handleMultiSelectChange("studentLevels", level)}
                    className="sr-only"
                  />
                  <span className="font-medium">{level}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Educational Goals */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Educational Goals</h2>
          
          {/* Interest Areas */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What areas are you most interested in? (Select all that apply)
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INTEREST_AREAS.map((area) => (
                <label
                  key={area}
                  className={`card cursor-pointer transition-all hover:shadow-md ${
                    formData.interestAreas.includes(area)
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.interestAreas.includes(area)}
                    onChange={() => handleMultiSelectChange("interestAreas", area)}
                    className="sr-only"
                  />
                  <span className="font-medium">{area}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What are your learning objectives for students?
            </h3>
            <textarea
              value={formData.learningObjectives}
              onChange={(e) => handleInputChange("learningObjectives", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe what you want students to learn about 3D printing, construction technology, or related topics..."
            />
          </div>

          {/* Curriculum Integration */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How would this integrate with your current curriculum?
            </h3>
            <textarea
              value={formData.curriculumIntegration}
              onChange={(e) => handleInputChange("curriculumIntegration", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe how this would fit into your existing courses, programs, or curriculum structure..."
            />
          </div>

          {/* Hands-on Learning */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What type of hands-on learning experience are you looking for?
            </h3>
            <div className="space-y-3">
              {[
                "Virtual demonstrations and simulations",
                "On-site visits to construction sites",
                "Hands-on workshops with 3D printing equipment",
                "Project-based learning with real materials",
                "Industry mentorship programs",
                "Student competitions and challenges",
                "Research collaboration opportunities"
              ].map((option) => (
                <label
                  key={option}
                  className={`block w-full p-4 border border-gray-200 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    formData.handsOnLearning === option
                      ? "ring-2 ring-blue-500 bg-blue-50 border-blue-300"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="handsOnLearning"
                    value={option}
                    checked={formData.handsOnLearning === option}
                    onChange={(e) => handleInputChange("handsOnLearning", e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Technology Access */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What technology resources does your institution currently have?
            </h3>
            <textarea
              value={formData.technologyAccess}
              onChange={(e) => handleInputChange("technologyAccess", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Please describe your current technology resources, labs, equipment, or facilities..."
            />
          </div>

          {/* Budget and Timeline */}
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your budget range for this initiative?
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
                <option value="grant-funded">Grant-funded</option>
                <option value="partnership">Partnership/In-kind</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your timeline for implementation?
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange("timeline", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (within 1 semester)</option>
                <option value="short">Short-term (1-2 semesters)</option>
                <option value="medium">Medium-term (1 academic year)</option>
                <option value="long">Long-term (2+ years)</option>
                <option value="planning">Just planning/exploring</option>
              </select>
            </div>
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
              placeholder="Please provide details about your specific educational project, initiative, or area where you need assistance..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              What outcomes do you expect for your students?
            </h3>
            <textarea
              value={formData.expectedOutcomes}
              onChange={(e) => handleInputChange("expectedOutcomes", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Please describe the expected learning outcomes, skills, or knowledge students will gain..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How will this benefit your students' career preparation?
            </h3>
            <textarea
              value={formData.studentBenefits}
              onChange={(e) => handleInputChange("studentBenefits", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Please describe how this will help prepare students for careers in construction, engineering, or related fields..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How will this benefit your faculty and institution?
            </h3>
            <textarea
              value={formData.facultyBenefits}
              onChange={(e) => handleInputChange("facultyBenefits", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Please describe the benefits for faculty development, research opportunities, or institutional advancement..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Are you interested in industry connections or partnerships?
            </h3>
            <textarea
              value={formData.industryConnections}
              onChange={(e) => handleInputChange("industryConnections", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Please describe any interest in industry partnerships, guest speakers, internships, or job placement opportunities..."
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Are there research opportunities you'd like to explore?
            </h3>
            <textarea
              value={formData.researchOpportunities}
              onChange={(e) => handleInputChange("researchOpportunities", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Please describe any research interests, collaboration opportunities, or academic projects..."
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              Is there anything else you'd like us to know about your educational needs?
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
                "Email with educational resources",
                "Phone call to discuss curriculum integration",
                "In-person meeting or campus visit",
                "Proposal for educational partnership",
                "Information about student programs",
                "Faculty development opportunities",
                "Research collaboration details"
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
                    onChange={() => handleMultiSelectChange("followUpMethods", method)}
                    className="sr-only"
                  />
                  <span className="font-medium">{method}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              How urgent is your timeline for implementation?
            </h3>
            <div className="space-y-3">
              {[
                "Very urgent (within 1 month)",
                "Urgent (1-3 months)",
                "Moderate (3-6 months)",
                "Flexible (6+ months)",
                "Just exploring options"
              ].map((level) => (
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
              <option value="colleague">Colleague Referral</option>
              <option value="conference">Conference/Event</option>
              <option value="news">News Article</option>
              <option value="education">Education Network</option>
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
              placeholder="Any specific questions about educational programs, curriculum integration, or partnership opportunities..."
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
                I agree to be contacted by the Pörd team regarding educational partnership opportunities. *
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
