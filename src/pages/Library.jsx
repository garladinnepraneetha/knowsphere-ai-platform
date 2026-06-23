import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

function Library() {
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  // const [articles, setArticles] = useState([]);
  const [summary, setSummary] = useState("");

 const [articles] = useState([
  {
    id: 1,
    title: "Customer Success Playbook",
    category: "Best Practice",
    author: "Sarah Johnson",
    content:
      "This guide explains customer retention, onboarding and engagement strategies.",
  },
  {
    id: 2,
    title: "Sales Excellence Guide",
    category: "Training",
    author: "John Smith",
    content:
      "Learn prospecting, negotiation and closing techniques.",
  },
  {
    id: 3,
    title: "Operations SOP",
    category: "Operations",
    author: "David Miller",
    content:
      "Standard operating procedures for operational excellence.",
  },
]);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Knowledge Library
        </h1>

        <input
          type="text"
          placeholder="Search Articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded mb-6 w-full"
        />

        <div className="grid grid-cols-3 gap-6">
          {articles
            .filter(
              (article) =>
                article.title
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                article.category
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                article.author
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .map((article) => (
              <div
                key={article.id}
                className="bg-white p-6 rounded-xl shadow"
              >
                <h2 className="text-xl font-bold">
                  {article.title}
                </h2>

                <p className="mt-2">
                  Category: {article.category}
                </p>

                <p>
                  Author: {article.author}
                </p>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() =>
                      setSelectedArticle(article)
                    }
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    View
                  </button>

                  <button
                    onClick={() =>
                      setSummary(
                        article.content.substring(0, 120) +
                          "..."
                      )
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Summarize
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Article View Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-[600px] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              {selectedArticle.title}
            </h2>

            <p className="mb-4">
              {selectedArticle.content}
            </p>

            <button
              onClick={() =>
                setSelectedArticle(null)
              }
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* AI Summary Modal */}
      {summary && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-[500px] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              AI Summary
            </h2>

            <p>{summary}</p>

            <button
              onClick={() => setSummary("")}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Library;