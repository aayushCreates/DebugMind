import { useEffect, useState } from "react";
import { X, Mail, Lock, User, Terminal } from "lucide-react";

interface AuthModalType {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "sign up";
}

const AuthModal = ({ isOpen, onClose, mode }: AuthModalType) => {
  const [modalType, setModalType] = useState(mode);

  useEffect(()=> {
    setModalType(mode);
  }, [mode]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(()=> {
    if(isOpen) {
      document.body.style.overflow = "hidden";
    }else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md mx-4 bg-gradient-to-br from-[#080b18] to-[#0a1228] border border-white/10 rounded-xl shadow-2xl px-5 py-5 text-white animate-fadeIn">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <span className="text-xl font-bold"><Terminal /></span>
          </div>
          <h2 className="text-xl font-semibold">DebugMind</h2>
        </div>

        {/* Heading */}
        <h3 className="text-3xl font-bold mb-1">
          {modalType === "login" ? "Welcome Back" : "Create Account"}
        </h3>
        <p className="text-gray-400 mb-8">
          {modalType === "login"
            ? "Login to continue debugging"
            : "Sign up to start debugging smarter"}
        </p>

        {/* Form */}
        <form className="space-y-4">
          {modalType === "sign up" && (
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <div className="flex items-center bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus-within:border-blue-500 transition">
                <User size={18} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-500"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <div className="flex items-center bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus-within:border-blue-500 transition">
              <Mail size={18} className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent outline-none w-full text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <div className="flex items-center bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus-within:border-blue-500 transition">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none w-full text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Confirm Password (sign up Only) */}
          {modalType === "sign up" && (
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Confirm Password
              </label>
              <div className="flex items-center bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus-within:border-blue-500 transition">
                <Lock size={18} className="text-gray-400 mr-3" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-500"
                />
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition font-semibold shadow-lg shadow-blue-500/20 mt-3"
          >
            {modalType === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Toggle modalType */}
        <p className="text-center text-gray-400 text-sm mt-3">
          {modalType === "login" ? (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setModalType("sign up")}
                className="text-blue-400 hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setModalType("login")}
                className="text-blue-400 hover:underline cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
