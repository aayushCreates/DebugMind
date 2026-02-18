import React from "react";

interface SuggestedFixProps {
  steps: string[];
  code: string;
}

const SuggestedFix: React.FC<SuggestedFixProps> = ({ steps, code }) => {
  return (
    <section className="bg-[#0a0c1a] border border-[#1a203b] rounded-md p-6">
      <h2 className="text-xl font-semibold mb-3">Suggested Fix</h2>
      <ol className="list-decimal list-inside space-y-2 mb-4">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <pre className="bg-blue-800 p-4 rounded-md overflow-x-auto text-sm font-mono">{code}</pre>
    </section>
  );
};

export default SuggestedFix;
