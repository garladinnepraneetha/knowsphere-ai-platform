import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

function Communities() {
  const [joinedCommunities, setJoinedCommunities] = useState({});
  const [communities, setCommunities] = useState([]);
const [joined, setJoined] = useState([]);

  const handleJoin = (id) => {
    setJoinedCommunities({
      ...joinedCommunities,
      [id]: true,
    });
  };


  useEffect(() => {
  fetch("http://localhost:8000/api/communities.php")
    .then((res) => res.json())
    .then((data) => setCommunities(data))
    .catch((err) => console.log(err));
}, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Communities
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {communities.map((community) => (
            <div
              key={community.id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold">
                {community.name}
              </h2>

              <p className="mt-3 text-gray-600">
                {community.description}
              </p>

              <p className="mt-3">
                Members: {community.members}
              </p>

              <button
  onClick={() =>
    setJoined([...joined, community.id])
  }
  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
>
  {joined.includes(community.id)
    ? "Joined ✓"
    : "Join Community"}
</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Communities;