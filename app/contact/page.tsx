// File: app/contact/page.tsx
// General Contact Us page
"use client";

import { useState } from "react";
import Link from "next/link";

const CONTACT_REASONS = [
  "General Inquiry",
  "Partnership Opportunity",
  "Investment Information",
  "Media Request",
  "Technical Support",
  "Career Opportunities",
  "Other"
];

const URGENCY_LEVELS = [
  "Low - No rush",
  "Medium - Within a week",
  "High - Within 24 hours",
  "Urgent - Immediate response needed"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    urgency: "",
    subject: "",
    message: "",
    agreeToContact: false,
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }
    
    if (!formData.agreeToContact || !formData.agreeToTerms) {
      alert("Please agree to the terms and contact preferences");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", formData);
    
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      reason: "",
      urgency: "",
      subject: "",
      message: "",
      agreeToContact: false,
      agreeToTerms: false
    });
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our team. We're here to help with your 3D printing construction needs.
          </p>
        </div>
      </section>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
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
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Reason for Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Contact
              </label>
              <select
                value={formData.reason}
                onChange={(e) => handleInputChange("reason", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a reason</option>
                {CONTACT_REASONS.map((reason) => (
                  <option key={reason} value={reason}>{reason}</option>
                ))}
              </select>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => handleInputChange("urgency", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select urgency level</option>
                {URGENCY_LEVELS.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief subject line"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={6}
                placeholder="Please describe your inquiry in detail..."
                required
              />
            </div>

            {/* Agreements */}
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
                  I agree to be contacted by the Pörd team regarding my inquiry. *
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary text-lg px-8 py-4"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Office Information */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Office Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-gray-600">123 Innovation Drive<br />Tech City, TC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-2xl">✉️</div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">hello@pord.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Contacts */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Department Contacts</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">General Inquiries</p>
                <p className="text-sm text-gray-600">hello@pord.com</p>
              </div>
              
              <div>
                <p className="font-medium">Investment & Partnerships</p>
                <p className="text-sm text-gray-600">investors@pord.com</p>
              </div>
              
              <div>
                <p className="font-medium">Media & Press</p>
                <p className="text-sm text-gray-600">press@pord.com</p>
              </div>
              
              <div>
                <p className="font-medium">Technical Support</p>
                <p className="text-sm text-gray-600">support@pord.com</p>
              </div>
              
              <div>
                <p className="font-medium">Career Opportunities</p>
                <p className="text-sm text-gray-600">careers@pord.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
