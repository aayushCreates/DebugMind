import { useState } from "react";
import ErrorSummary from "./ErrorSummary";
import RootCause from "./RootCause";
import SuggestedFix from "./SuggestedFix";
import SimilarErrors from "./SimilarErrors";
import DebugConfidence from "./DebugConfidence";
import { toast } from "sonner";

const dummyAnalysisResult = {
  errorSummary: {
    language: "JavaScript",
    framework: "React 18",
    category: "Runtime Error",
    stackDepth: 12,
    confidence: 92,
  },
  rootCause: {
    title:
      "The users prop passed to the UserList component is undefined when the .map() method is called.",
    description:
      "This typically happens when an API response hasn't resolved yet and the component renders before the data is available.",
    file: "/src/components/UserList.tsx:14:22",
  },
  suggestedFix: {
    steps: [
      "Add a guard clause with optional chaining or default value",
      "Add a loading state before rendering the list",
      "Initialize state with an empty array",
    ],
    code: `const users = data?.users ?? [];
return users.map(user => (
  <UserCard key={user.id} {...user} />
));`,
  },
  similarErrors: [
    {
      message: "TypeError: Cannot read property 'length' of undefined",
      resolved: 94,
      link: "#",
    },
    {
      message: "TypeError: arr.filter is not a function",
      resolved: 87,
      link: "#",
    },
    {
      message: "TypeError: Cannot destructure property 'data' of undefined",
      resolved: 78,
      link: "#",
    },
  ],
  debugConfidence: [
    { label: "Undefined prop before async resolution", value: 87 },
    { label: "Missing data fetch initialization", value: 42 },
    { label: "Incorrect prop type passed", value: 18 },
  ],
};

const ErrorAnalyzer = () => {
  const [errorInput, setErrorInput] = useState("");
  const [result, setResult] = useState<typeof dummyAnalysisResult | null>(null);

  const handleAnalyze = () => {
    if (errorInput.trim() === "")
      return toast.error("Please paste an error to analyze");
    setResult(dummyAnalysisResult);
  };

  return (
    <div className="min-h-screen text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-3">Analyze an Error</h1>
      <p className="text-center text-gray-400 mb-10">
        Paste your stack trace or upload a screenshot to get started.
      </p>

      {/* Input Section */}
      <div className="mb-12 max-w-4xl mx-auto bg-[#0a0e1e] rounded-xl py-10 px-10 border border-[#1f2a4d] shadow-lg">
        {/* Tabs */}
        <div className="flex mb-4 bg-[#0f152b] rounded-md p-1 border border-[#1f2a4d]">
          <button className="flex-1 py-2 text-sm font-medium bg-blue-900 rounded-md">
            Paste Error
          </button>
          <button className="flex-1 py-2 text-sm font-medium text-gray-400 hover:text-white">
            Upload Screenshot
          </button>
        </div>

        <textarea
          className="w-full h-40 bg-[#0b122e] p-4 rounded-lg text-sm font-mono resize-none placeholder:text-gray-500 outline-none border border-[#1f2a4d] focus:border-blue-500 transition"
          placeholder="Paste your terminal error or stack trace here..."
          value={errorInput}
          onChange={(e) => setErrorInput(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold shadow-lg shadow-blue-600/40 transition"
        >
          Analyze Error
        </button>
      </div>

      {/* Result Section */}
      {result && (
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Top 3 Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ErrorSummary {...result.errorSummary} />
            <RootCause {...result.rootCause} />
            <SuggestedFix {...result.suggestedFix} />
            <DebugConfidence debugConfidence={result.debugConfidence} />
          </div>

          {/* Bottom Section */}
          <div className="space-y-6">
            <SimilarErrors similarErrors={result.similarErrors} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorAnalyzer;
