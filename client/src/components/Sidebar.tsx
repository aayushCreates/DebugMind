import {
  BookSearch,
  ChartColumn,
  History,
  LayoutDashboard,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", href: "/dashboard", active: true, icon: <LayoutDashboard /> },
    { label: "Error History", href: "/error-history", icon: <History /> },
    { label: "Knowledge Base", href: "/knowledge-base", icon: <BookSearch /> },
    { label: "Analytics", href: "/analytics", icon: <ChartColumn /> },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#0b0e1b] border-r border-[#19213c] flex flex-col p-6 text-white">
      {/* Logo / Header */}
      <div className="flex items-center mb-10">
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold flex items-center gap-2"
        >
          <Terminal
            size={28}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1 rounded-md"
          />
          DebugMind
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-4">
        {menuItems.map(({ label, href, active, icon }, idx) => (
          <a
            key={idx}
            href={href}
            className={`px-4 py-2 rounded-md cursor-pointer transition flex items-center gap-2
              ${
                active
                  ? "bg-blue-500/10 border border-blue-500/30 text-blue-500 font-semibold"
                  : "text-gray-400 hover:bg-blue-500/10 hover:text-white"
              }`}
          >
            {icon}
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
