import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
// const [stats, setStats] = useState({
//   experts: 0,
//   articles: 0,
//   communities: 0,
//   learningPaths: 0
// });

// useEffect(() => {
//   fetch("http://localhost:8000/api/dashboard.php")
//     .then((res) => res.json())
//     .then((data) => setStats(data));
// }, []);

const stats = {
  experts: 120,
  articles: 450,
  communities: 32,
  learningPaths: 18,
};

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Employee Dashboard
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
  <StatsCard title="Experts" value={stats.experts} />
  <StatsCard title="Articles" value={stats.articles} />
  <StatsCard title="Communities" value={stats.communities} />
  <StatsCard title="Learning Paths" value={stats.learningPaths} />
</div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              Top Contributors
            </h2>

            <ul className="space-y-2">
              <li>🥇 Sarah Johnson</li>
              <li>🥈 David Miller</li>
              <li>🥉 John Smith</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              Quick Actions
            </h2>

            <div className="flex flex-col gap-3">
              <Link to="/experts">Find Experts →</Link>
              <Link to="/library">Browse Knowledge Library →</Link>
              <Link to="/assistant">Ask AI Assistant →</Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="text-xl font-bold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-2">
            <li>
              Sarah Johnson published Customer Success
              Playbook
            </li>

            <li>
              David Miller updated Operations SOP
            </li>

            <li>
              John Smith shared Sales Excellence Guide
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 text-gray-500">
          © 2026 KnowSphere AI Platform
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;