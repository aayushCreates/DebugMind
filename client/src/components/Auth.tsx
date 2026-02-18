import { useEffect, useState } from "react";
import { X, Mail, Lock, User, Terminal } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface AuthModalType {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "sign up";
}

interface FormType {
  name?: string;
  email: string;
  password: string;
}

const AuthModal = ({ isOpen, onClose, mode }: AuthModalType) => {
  const [modalType, setModalType] = useState(mode);
  const [formData, setFormData] = useState<FormType>({
    email: "",
    password: "",
  });
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const endpoint = modalType === "login" ? "login" : "register";

      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/${endpoint}`,
        formData
      );

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setFormData({
        name: "",
        email: "",
        password: "",
      });
      onClose();
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setModalType(mode);
  }, [mode]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
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
        onClick={() => {
          setFormData({
            name: "",
            email: "",
            password: "",
          });
          onClose();
        }}
      />

      <div className="relative w-full max-w-md mx-4 bg-gradient-to-br from-[#080b18] to-[#0a1228] border border-white/10 rounded-xl shadow-2xl px-5 py-5 text-white animate-fadeIn">
        {/* Close */}
        <button
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              password: "",
            });
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <span className="text-xl font-bold">
              <Terminal />
            </span>
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {modalType === "sign up" && (
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition font-semibold mt-3 disabled:opacity-50"
          >
            {loading
              ? "Processing..."
              : modalType === "login"
                ? "Login"
                : "Create Account"}
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
