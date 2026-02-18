import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./Auth";

const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "sign up">("login");
  const [isMobileOpen, setIsMobileOpen] = useState(false);


  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-[#050816]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white">
          
          {/* Logo */}
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

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Features
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Working
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              className="px-4 py-2 text-gray-300 hover:text-white transition"
              onClick={() => {
                setIsAuthOpen(true);
                setAuthType("sign up");
              }}
            >
              Sign up
            </button>
            <button
              className="px-6 py-2 rounded-md bg-blue-600 font-medium shadow shadow-blue-500"
              onClick={() => {
                setIsAuthOpen(true);
                setAuthType("login");
              }}
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileOpen && (
          <div className="md:hidden bg-[#0B1026] border-t border-white/10 px-6 py-6 space-y-6 text-white animate-fadeIn">
            
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Working</li>
            </ul>

            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <button
                className="py-2 text-gray-300 hover:text-white transition"
                onClick={() => {
                  setIsAuthOpen(true);
                  setAuthType("sign up");
                  setIsMobileOpen(false);
                }}
              >
                Sign up
              </button>

              <button
                className="py-2 rounded-md bg-blue-600 font-medium shadow shadow-blue-500"
                onClick={() => {
                  setIsAuthOpen(true);
                  setAuthType("login");
                  setIsMobileOpen(false);
                }}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        mode={authType}
      />
    </>
  );
};

export default Navbar;
