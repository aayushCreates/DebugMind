import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-[#050816]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold flex items-center gap-2"
        >
          <Terminal size={32} className="bg-blue-500 px-0.5 py-0.5 rounded-sm shadow shadow-blue-500" />
          DebugMind
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">
            Features
          </li>
          <li className="hover:text-white transition cursor-pointer">
            Working
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 text-gray-300 hover:text-white transition">
            Sign up
          </button>
          <button className="px-7 py-2 rounded-md bg-blue-600 font-medium shadow shadow-blue-500">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
