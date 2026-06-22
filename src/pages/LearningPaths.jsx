import Sidebar from "../components/Sidebar";
import { learningPaths } from "../data/learningPaths";
import { useState } from "react";

function LearningPaths() {
  const [paths, setPaths] = useState(learningPaths);

  const continueLearning = (id) => {
    const updatedPaths = paths.map((path) => {
      if (path.id === id) {
        return {
          ...path,
          progress:
            path.progress >= 100
              ? 100
              : path.progress + 5,
        };
      }
      return path;
    });

    setPaths(updatedPaths);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Learning Paths
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold">
                {path.title}
              </h2>

              <p className="mt-4">
                Progress: {path.progress}%
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${path.progress}%`,
                  }}
                ></div>
              </div>

              <button
                onClick={() =>
                  continueLearning(path.id)
                }
                className="mt-5 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Continue Learning
              </button>

              {path.progress === 100 && (
                <p className="text-green-600 font-bold mt-3">
                  Course Completed ✓
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearningPaths;