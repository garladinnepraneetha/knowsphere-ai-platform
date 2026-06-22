import Sidebar from "../components/Sidebar";
import { useState } from "react";

function Assistant() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const knowledgeBase = [
    {
      keyword: "customer",
      expert: "Sarah Johnson",
      article: "Customer Success Playbook",
      community: "Customer Success Community",
    },
    {
      keyword: "sales",
      expert: "John Smith",
      article: "Sales Excellence Guide",
      community: "Sales Excellence Forum",
    },
    {
      keyword: "operations",
      expert: "David Miller",
      article: "Operations SOP",
      community: "Operations Leaders Network",
    },
  ];

  const handleSearch = () => {
    const found = knowledgeBase.find((item) =>
      query.toLowerCase().includes(item.keyword)
    );

    if (found) {
      setResult(found);
    } else {
      setResult({
        expert: "No Expert Found",
        article: "No Article Found",
        community: "No Community Found",
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          AI Knowledge Assistant
        </h1>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <input
            type="text"
            placeholder="Ask something... e.g. customer retention"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border p-3 rounded w-full"
          />

          <button
            onClick={handleSearch}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
          >
            Search
          </button>
        </div>

        {result && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Recommended Resources
            </h2>

            <p className="mb-2">
              <strong>Expert:</strong> {result.expert}
            </p>

            <p className="mb-2">
              <strong>Article:</strong> {result.article}
            </p>

            <p>
              <strong>Community:</strong> {result.community}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Assistant;