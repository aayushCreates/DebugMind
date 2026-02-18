import { CheckCircle, Play, ArrowRight, Circle } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen w-full pt-20 bg-gradient-to-br from-[#070a1a] via-[#0b0e1b] to-[#081029] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
            <Circle size={8} className="fill-blue-500 stroke-none" />
            AI-Powered Error Intelligence
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Understand Any{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Terminal Error
            </span>{" "}
            in Seconds.
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Upload a screenshot or paste your stack trace. Get root cause,
            explanation, and intelligent fixes instantly.
          </p>

          <div className="flex gap-4 mb-8">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition font-medium">
              Analyze Error <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:bg-white/5 transition">
              <Play size={18} />
              View Demo
            </button>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              50+ languages supported
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              95% accuracy
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Free to start
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TERMINAL CARD */}
        <div className="relative">
          <div className="bg-[#0B1228] border border-blue-300/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0E1630]">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-gray-400">
                terminal — node app.js
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 text-sm font-mono space-y-4">
              <div>
                <p className="text-gray-400">$ node app.js</p>
                <p className="text-red-400 mt-2">
                  TypeError: Cannot read properties of undefined (reading 'map')
                </p>
                <p className="text-gray-500 mt-2">
                  at UserList (/src/components/UserList.tsx:14:22)
                </p>
              </div>

              {/* Root Cause */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-green-400 font-semibold flex items-center gap-2">
                  <CheckCircle size={16} />
                  Root Cause
                </p>
                <p className="text-gray-300 mt-2">
                  The <span className="text-blue-400">users</span> prop is{" "}
                  <span className="text-purple-400">undefined</span> when{" "}
                  <span className="text-blue-400">.map()</span> is called before
                  async data loads.
                </p>
              </div>

              {/* Suggested Fix */}
              <div className="pt-4">
                <p className="text-green-400 font-semibold flex items-center gap-2">
                  <CheckCircle size={16} />
                  Suggested Fix
                </p>
                <div className="mt-2 bg-black/40 rounded-lg px-4 py-3 text-gray-300">
                  Add optional chaining: users?.map() or default to empty array.
                </div>
              </div>

              {/* Confidence */}
              <div className="pt-4">
                <p className="text-gray-400">
                  Confidence:{" "}
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md">
                    92%
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
