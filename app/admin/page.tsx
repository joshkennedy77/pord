// File: app/admin/page.tsx
// Admin dashboard for managing responses
"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data - in a real app, this would come from your backend
const mockResponses = [
  {
    id: 1,
    role: "Finance",
    name: "John Smith",
    email: "john@example.com",
    organization: "ABC Investments",
    submittedAt: "2024-01-15",
    status: "New",
    investmentSize: "$1M - $5M",
    urgency: "Urgent (1-3 months)"
  },
  {
    id: 2,
    role: "Homeowners",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    organization: "",
    submittedAt: "2024-01-14",
    status: "In Progress",
    homeType: "Single Family Home",
    budget: "$400K - $600K"
  },
  {
    id: 3,
    role: "Construction",
    name: "Mike Wilson",
    email: "mike@construction.com",
    organization: "Wilson Construction",
    submittedAt: "2024-01-13",
    status: "Contacted",
    companySize: "11-50 employees",
    experienceLevel: "Some knowledge, no hands-on experience"
  }
];

const statusColors = {
  "New": "bg-blue-100 text-blue-800",
  "In Progress": "bg-yellow-100 text-yellow-800",
  "Contacted": "bg-green-100 text-green-800",
  "Completed": "bg-gray-100 text-gray-800"
};

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [responses] = useState(mockResponses);

  const getRoleCounts = () => {
    const counts: { [key: string]: number } = {};
    responses.forEach(response => {
      counts[response.role] = (counts[response.role] || 0) + 1;
    });
    return counts;
  };

  const getStatusCounts = () => {
    const counts: { [key: string]: number } = {};
    responses.forEach(response => {
      counts[response.status] = (counts[response.status] || 0) + 1;
    });
    return counts;
  };

  const roleCounts = getRoleCounts();
  const statusCounts = getStatusCounts();

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Manage responses and follow-up activities</p>
          </div>
          <div className="flex gap-4">
            <button className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">
              Export CSV
            </button>
            <button className="btn-primary">
              Add Response
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "responses", label: "All Responses" },
            { id: "customers", label: "Customers" },
            { id: "contractors", label: "Contractors" },
            { id: "designs", label: "Designs" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                selectedTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {selectedTab === "overview" && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">T</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Responses</p>
                  <p className="text-2xl font-semibold text-gray-900">{responses.length}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                    <span className="text-green-600 font-semibold">N</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">New This Week</p>
                  <p className="text-2xl font-semibold text-gray-900">12</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold">P</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">In Progress</p>
                  <p className="text-2xl font-semibold text-gray-900">{statusCounts["In Progress"] || 0}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">C</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Contacted</p>
                  <p className="text-2xl font-semibold text-gray-900">{statusCounts["Contacted"] || 0}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Role Distribution */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Responses by Role</h3>
              <div className="space-y-3">
                {Object.entries(roleCounts).map(([role, count]) => (
                  <div key={role} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{role}</span>
                    <span className="text-sm text-gray-500">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Status Distribution</h3>
              <div className="space-y-3">
                {Object.entries(statusCounts).map(([status, count]) => (
                  <div key={status} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{status}</span>
                    <span className="text-sm text-gray-500">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responses Tab */}
      {selectedTab === "responses" && (
        <div className="card">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">All Responses</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Organization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {responses.map((response) => (
                  <tr key={response.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{response.name}</div>
                        <div className="text-sm text-gray-500">{response.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{response.role}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{response.organization || "N/A"}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[response.status as keyof typeof statusColors]}`}>
                        {response.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {response.submittedAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">View</button>
                      <button className="text-green-600 hover:text-green-900">Contact</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Other tabs would be implemented similarly */}
      {selectedTab === "customers" && (
        <div className="card">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Customer Management</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-600">Customer management features would be implemented here.</p>
          </div>
        </div>
      )}

      {selectedTab === "contractors" && (
        <div className="card">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Contractor Management</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-600">Contractor management features would be implemented here.</p>
          </div>
        </div>
      )}

      {selectedTab === "designs" && (
        <div className="card">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Design Management</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-600">Design management features would be implemented here.</p>
          </div>
        </div>
      )}
    </div>
  );
}