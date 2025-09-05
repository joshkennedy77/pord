"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeveloperDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration
  const dashboardData = {
    overview: {
      totalProjects: 12,
      activeProjects: 8,
      completedProjects: 4,
      totalRevenue: 125000000,
      newThisMonth: 3,
      pendingApprovals: 2
    },
    projects: [
      {
        id: 1,
        name: "Sunset Ridge Community",
        location: "Austin, TX",
        type: "Residential",
        units: 150,
        budget: 45000000,
        status: "In Progress",
        progress: 65,
        startDate: "2024-01-15",
        completionDate: "2024-08-30"
      },
      {
        id: 2,
        name: "Downtown Office Complex",
        location: "Miami, FL",
        type: "Commercial",
        units: 200,
        budget: 75000000,
        status: "Planning",
        progress: 25,
        startDate: "2024-03-01",
        completionDate: "2025-02-28"
      },
      {
        id: 3,
        name: "Riverside Apartments",
        location: "Denver, CO",
        type: "Mixed-Use",
        units: 300,
        budget: 95000000,
        status: "Completed",
        progress: 100,
        startDate: "2023-06-01",
        completionDate: "2024-01-15"
      }
    ],
    leads: [
      {
        id: 1,
        company: "Metro Development Group",
        project: "Urban Renewal Initiative",
        location: "Chicago, IL",
        budget: 120000000,
        status: "Hot Lead",
        contactDate: "2024-01-20",
        nextFollowUp: "2024-01-25"
      },
      {
        id: 2,
        company: "Coastal Properties LLC",
        project: "Beachfront Resort",
        location: "San Diego, CA",
        budget: 200000000,
        status: "Qualified",
        contactDate: "2024-01-18",
        nextFollowUp: "2024-01-30"
      },
      {
        id: 3,
        company: "Mountain View Developers",
        project: "Ski Resort Village",
        location: "Aspen, CO",
        budget: 150000000,
        status: "Proposal Sent",
        contactDate: "2024-01-15",
        nextFollowUp: "2024-01-28"
      }
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Hot Lead":
        return "bg-red-100 text-red-800";
      case "Qualified":
        return "bg-blue-100 text-blue-800";
      case "Proposal Sent":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Developer Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your development projects and track progress</p>
          </div>
          <div className="flex gap-4">
            <Link href="/developers" className="btn bg-white ring-1 ring-gray-200 hover:bg-gray-50">
              Back to Developers
            </Link>
            <button className="btn-primary">
              New Project
            </button>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
        <div className="card text-center">
          <div className="text-2xl font-bold text-blue-600">{dashboardData.overview.totalProjects}</div>
          <div className="text-sm text-gray-600">Total Projects</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-green-600">{dashboardData.overview.activeProjects}</div>
          <div className="text-sm text-gray-600">Active Projects</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-purple-600">{dashboardData.overview.completedProjects}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-orange-600">{formatCurrency(dashboardData.overview.totalRevenue)}</div>
          <div className="text-sm text-gray-600">Total Revenue</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-indigo-600">{dashboardData.overview.newThisMonth}</div>
          <div className="text-sm text-gray-600">New This Month</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-red-600">{dashboardData.overview.pendingApprovals}</div>
          <div className="text-sm text-gray-600">Pending Approvals</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "projects", label: "Active Projects" },
            { id: "leads", label: "Leads" },
            { id: "completed", label: "Completed" },
            { id: "analytics", label: "Analytics" }
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

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Recent Activity */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Riverside Apartments completed</p>
                    <p className="text-sm text-gray-600">300 units delivered on time</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">New lead: Metro Development Group</p>
                    <p className="text-sm text-gray-600">$120M Urban Renewal project</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">5 days ago</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Downtown Office Complex approved</p>
                    <p className="text-sm text-gray-600">Construction starting March 1st</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
            </div>
          </div>

          {/* Project Status Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Project Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">In Progress</span>
                  <span className="text-sm text-gray-600">8 projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "67%" }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Planning</span>
                  <span className="text-sm text-gray-600">2 projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "17%" }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Completed</span>
                  <span className="text-sm text-gray-600">4 projects</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "33%" }}></div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Revenue by Quarter</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Q4 2023</span>
                  <span className="text-sm font-bold text-green-600">$45.2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Q3 2023</span>
                  <span className="text-sm font-bold text-blue-600">$38.7M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Q2 2023</span>
                  <span className="text-sm font-bold text-purple-600">$41.1M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "projects" && (
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Active Projects</h3>
            <button className="btn-primary">Add Project</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardData.projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{project.name}</div>
                        <div className="text-sm text-gray-500">{project.units} units</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(project.budget)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                        </div>
                        <span className="text-sm text-gray-600">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                      <button className="text-green-600 hover:text-green-900">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "leads" && (
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Development Leads</h3>
            <button className="btn-primary">Add Lead</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Follow-up</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardData.leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.project}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(lead.budget)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lead.nextFollowUp}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Contact</button>
                      <button className="text-green-600 hover:text-green-900">Convert</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "completed" && (
        <div className="card">
          <h3 className="text-xl font-semibold mb-6">Completed Projects</h3>
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏗️</div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No completed projects yet</h4>
            <p className="text-gray-600">Completed projects will appear here once they're finished.</p>
          </div>
        </div>
      )}

      {activeTab === "analytics" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Project Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">On-time Delivery</span>
                <span className="text-sm font-bold text-green-600">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Budget Adherence</span>
                <span className="text-sm font-bold text-blue-600">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Client Satisfaction</span>
                <span className="text-sm font-bold text-purple-600">98%</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Revenue Trends</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Monthly Growth</span>
                <span className="text-sm font-bold text-green-600">+12.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Year-over-Year</span>
                <span className="text-sm font-bold text-blue-600">+28.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Average Project Value</span>
                <span className="text-sm font-bold text-purple-600">$71.2M</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
