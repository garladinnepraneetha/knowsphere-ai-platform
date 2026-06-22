import { Link } from "react-router-dom";

function Sidebar() {
return ( <div className="w-64 h-screen bg-slate-900 text-white p-5"> <h1 className="text-2xl font-bold">
KnowSphere AI </h1>

  <div className="mt-10 space-y-4 flex flex-col">
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/experts">Experts</Link>
    <Link to="/library">Knowledge Library</Link>
    <Link to="/communities">Communities</Link>
    <Link to="/learning">Learning Paths</Link>
    <Link to="/assistant">AI Assistant</Link>
    <Link to="/leaderboard">Leaderboard</Link>  
    <Link to="/admin">Admin Dashboard</Link>
  </div>

  <button
  className="mt-10 bg-red-600 text-white px-4 py-2 rounded"
  onClick={() => {
    localStorage.clear();
    window.location.href = "/";
  }}
>
  Logout
</button>
</div>

);
}

export default Sidebar;
