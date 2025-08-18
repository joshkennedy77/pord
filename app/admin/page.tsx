export default function AdminHome() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul className="list-disc pl-6 text-blue-600">
        <li><a href="/admin/designs">Manage Designs</a></li>
        <li><a href="/admin/contractors">Manage Contractors</a></li>
        <li><a href="/admin/customers">Manage Customers</a></li>
      </ul>
    </div>
  );
}
