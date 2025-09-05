// File: app/contractor-dashboard/page.tsx
// Contractor dashboard for managing leads and projects
"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data - in a real app, this would come from your backend
const mockLeads = [
  {
    id: 1,
    customerName: "Sarah Johnson",
    email: "sarah@email.com",
    phone: "(555) 123-4567",
    projectType: "Single Family Home",
    budget: "$400K - $600K",
    location: "Austin, TX",
    status: "New Lead",
    priority: "High",
    submittedDate: "2024-01-15",
    timeline: "6-12 months",
    notes: "Interested in 3D printed home, eco-friendly materials"
  },
  {
    id: 2,
    customerName: "Mike Wilson",
    email: "mike@email.com",
    phone: "(555) 987-6543",
    projectType: "Townhouse",
    budget: "$300K - $400K",
    location: "Dallas, TX",
    status: "In Progress",
    priority: "Medium",
    submittedDate: "2024-01-10",
    timeline: "3-6 months",
    notes: "Site visit scheduled for next week"
  },
  {
    id: 3,
    customerName: "Emily Davis",
    email: "emily@email.com",
    phone: "(555) 456-7890",
    projectType: "Custom Design",
    budget: "$600K - $800K",
    location: "Houston, TX",
    status: "Qualified",
    priority: "High",
    submittedDate: "2024-01-12",
    timeline: "1-2 years",
    notes: "Architectural plans approved, ready for construction"
  }
];

const mockProjects = [
  {
    id: 1,
    customerName: "John Smith",
    projectType: "Single Family Home",
    address: "123 Oak Street, Austin, TX",
    status: "Foundation",
    progress: 25,
    startDate: "2024-01-01",
    expectedCompletion: "2024-04-01",
    budget: "$450,000",
    actualCost: "$112,500"
  },
  {
    id: 2,
    customerName: "Lisa Brown",
    projectType: "Townhouse",
    address: "456 Pine Avenue, Dallas, TX",
    status: "3D Printing",
    progress: 60,
    startDate: "2023-12-15",
    expectedCompletion: "2024-03-15",
    budget: "$350,000",
    actualCost: "$210,000"
  }
];

const statusColors = {
  "New Lead": "bg-blue-100 text-blue-800",
  "Qualified": "bg-yellow-100 text-yellow-800",
  "In Progress": "bg-green-100 text-green-800",
  "Completed": "bg-gray-100 text-gray-800",
  "Foundation": "bg-orange-100 text-orange-800",
  "3D Printing": "bg-purple-100 text-purple-800",
  "Finishing": "bg-indigo-100 text-indigo-800"
};

const priorityColors = {
  "High": "bg-red-100 text-red-800",
  "Medium": "bg-yellow-100 text-yellow-800",
  "Low": "bg-green-100 text-green-800"
};

export default function ContractorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [leads] = useState(mockLeads);
  const [projects] = useState(mockProjects);

  const getStatusCounts = () => {
    const counts: { [key: string]: number } = {};
    leads.forEach(lead => {
      counts[lead.status] = (counts[lead.status] || 0) + 1;
    });
    return counts;
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Contractor Dashboard</h1>
            <p className="text-gray-600">Manage your leads and track project progress</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contractor-login" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">
              Logout
            </Link>
            <button className="btn-primary">
              New Project
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "leads", label: "Leads" },
            { id: "projects", label: "Active Projects" },
            { id: "completed", label: "Completed" },
            { id: "profile", label: "Profile" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
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
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">L</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Leads</p>
                  <p className="text-2xl font-semibold text-gray-900">{leads.length}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                    <span className="text-green-600 font-semibold">P</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Active Projects</p>
                  <p className="text-2xl font-semibold text-gray-900">{projects.length}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold">N</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">New This Week</p>
                  <p className="text-2xl font-semibold text-gray-900">3</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">$</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-semibold text-gray-900">$1.2M</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Status Distribution */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Lead Status Distribution</h3>
              <div className="space-y-3">
                {Object.entries(statusCounts).map(([status, count]) => (
                  <div key={status} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{status}</span>
                    <span className="text-sm text-gray-500">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">New lead from Sarah Johnson</span>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Project update: Foundation complete</span>
                  <span className="text-xs text-gray-400">1 day ago</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Site visit scheduled for Mike Wilson</span>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Leads Tab */}
      {activeTab === "leads" && (
        <div className="card">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Customer Leads</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{lead.customerName}</div>
                        <div className="text-sm text-gray-500">{lead.email}</div>
                        <div className="text-sm text-gray-500">{lead.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">{lead.projectType}</div>
                        <div className="text-sm text-gray-500">{lead.location}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {lead.budget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[lead.status as keyof typeof statusColors]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${priorityColors[lead.priority as keyof typeof priorityColors]}`}>
                        {lead.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">View</button>
                      <button className="text-green-600 hover:text-green-900 mr-4">Contact</button>
                      <button className="text-purple-600 hover:text-purple-900">Convert</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Projects Tab */}
      {activeTab === "projects" && (
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.customerName} - {project.projectType}</h3>
                  <p className="text-sm text-gray-600">{project.address}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Budget: {project.budget}</p>
                  <p className="text-sm text-gray-600">Spent: {project.actualCost}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-medium">{project.status}</p>
                </div>
                <div>
                  <p className="text-gray-600">Start Date</p>
                  <p className="font-medium">{project.startDate}</p>
                </div>
                <div>
                  <p className="text-gray-600">Expected Completion</p>
                  <p className="font-medium">{project.expectedCompletion}</p>
                </div>
                <div>
                  <p className="text-gray-600">Actions</p>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-900">Update</button>
                    <button className="text-green-600 hover:text-green-900">View</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Completed Tab */}
      {activeTab === "completed" && (
        <div className="card">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Completed Projects</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-600">No completed projects yet. Your completed projects will appear here.</p>
          </div>
        </div>
      )}

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="card">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Contractor Profile</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-600">Profile management features will be implemented here.</p>
          </div>
        </div>
      )}
    </div>
  );
}
