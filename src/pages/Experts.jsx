import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
// import { useState } from "react";


function Experts() {
  const [search, setSearch] = useState("");
  const [connected, setConnected] = useState([]);
  const [experts, setExperts] = useState([]);


const [experts] = useState([
  {
    id: 1,
    name: "Sarah Johnson",
    expertise: "Customer Success",
    experience: "12 Years",
  },
  {
    id: 2,
    name: "David Miller",
    expertise: "Operations",
    experience: "8 Years",
  },
  {
    id: 3,
    name: "John Smith",
    expertise: "Sales Strategy",
    experience: "10 Years",
  },
]);

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