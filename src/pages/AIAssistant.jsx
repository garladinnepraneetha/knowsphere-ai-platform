import { useState } from "react";
import Sidebar from "../components/Sidebar";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);

 const handleSearch = () => {
  const query = question.toLowerCase();

  if (query.includes("customer")) {
    setResult({
      expert: "Sarah Johnson",
      article: "Customer Success Playbook",
      community: "Customer Success Community",
    });
  } else if (query.includes("sales")) {
    setResult({
      expert: "John Smith",
      article: "Sales Excellence Guide",
      community: "Sales Excellence Forum",
    });
  } else if (query.includes("operations")) {
    setResult({
      expert: "David Miller",
      article: "Operations SOP",
      community: "Operations Leaders Network",
    });
  } else {
    setResult({
      expert: "Knowledge Team",
      article: "Knowledge Discovery Guide",
      community: "General Learning Community",
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

        <div className="bg-white p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Ask a question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <button
            onClick={handleSearch}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
          >
            Search
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              Recommended Resources
            </h2>

            <p>
              <strong>Expert:</strong> {result.expert}
            </p>

            <p>
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

export default AIAssistant;