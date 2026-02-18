import Sidebar from "../components/Sidebar";
import ErrorAnalyzer from "../components/ErrorAnalyzer";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-[#25305a]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <ErrorAnalyzer />
      </div>
    </div>
  );
};

export default Dashboard;
