import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          HR Admin Command Center
        </h1>

        <div className="grid grid-cols-3 gap-6 mb-8">
  <div className="bg-white p-6 rounded-xl shadow">
    <h3>Total Employees</h3>
    <h2 className="text-3xl font-bold">1250</h2>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3>Total Experts</h3>
    <h2 className="text-3xl font-bold">120</h2>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3>Knowledge Articles</h3>
    <h2 className="text-3xl font-bold">450</h2>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3>Communities</h3>
    <h2 className="text-3xl font-bold">32</h2>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3>Learning Paths</h3>
    <h2 className="text-3xl font-bold">18</h2>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3>Pending Approvals</h3>
    <h2 className="text-3xl font-bold text-red-500">14</h2>
  </div>
</div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            Recent Knowledge Contributions
          </h2>

          <ul className="space-y-3">
            <li>
              Sarah Johnson published Customer Success Playbook
            </li>

            <li>
              David Miller updated Operations SOP
            </li>

            <li>
              John Smith added Sales Excellence Guide
            </li>

            <li>
              Emma Brown created Customer Retention Framework
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;