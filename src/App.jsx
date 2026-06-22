import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIAssistant from "./pages/AIAssistant";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Experts from "./pages/Experts";
import Library from "./pages/Library";
import Communities from "./pages/Communities";
import LearningPaths from "./pages/LearningPaths";
import AdminDashboard from "./pages/AdminDashboard";
import Leaderboard from "./pages/Leaderboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/library" element={<Library />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/learning" element={<LearningPaths />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/assistant" element={<AIAssistant />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;