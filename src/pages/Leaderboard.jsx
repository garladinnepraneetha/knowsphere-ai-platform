import Sidebar from "../components/Sidebar";

function Leaderboard() {
  const contributors = [
  {
    name: "Sarah Johnson",
    points: 1250,
    badge: "🥇 Gold Mentor"
  },
  {
    name: "David Miller",
    points: 980,
    badge: "🥈 Silver Contributor"
  },
  {
    name: "John Smith",
    points: 850,
    badge: "🥉 Knowledge Champion"
  }
];

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Top Contributors
        </h1>

        <div className="space-y-4">
          {contributors.map((user, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow flex justify-between"
            >
              <div>
  <h2 className="font-bold text-lg">
    {user.name}
  </h2>

  <p className="text-yellow-600">
    {user.badge}
  </p>
</div>

<h2 className="font-bold">
  {user.points} pts
</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;