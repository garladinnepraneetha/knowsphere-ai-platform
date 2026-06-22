import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
// import { useState } from "react";


function Experts() {
  const [search, setSearch] = useState("");
  const [connected, setConnected] = useState([]);
  const [experts, setExperts] = useState([]);


useEffect(() => {
  fetch("http://localhost:8000/api/experts.php")
    .then((res) => res.json())
    .then((data) => setExperts(data))
    .catch((err) => console.error(err));
}, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Expert Directory
        </h1>

        <input
          type="text"
          placeholder="Search Experts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded mb-6 w-full"
        />

        <div className="grid grid-cols-3 gap-6">
          {experts
            .filter(
              (expert) =>
                expert.name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                expert.expertise
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .map((expert) => (
              <div
                key={expert.id}
                className="bg-white p-6 rounded-xl shadow"
              >
                <h2 className="text-xl font-bold">
                  {expert.name}
                </h2>

                <p className="mt-2">
                  Expertise: {expert.expertise}
                </p>

                <p>
                  Experience: {expert.experience}
                </p>

                <button
  onClick={() =>
    setConnected([...connected, expert.id])
  }
  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
>
  {connected.includes(expert.id)
    ? "Connected ✓"
    : "Connect"}
</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Experts;