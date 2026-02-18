import React from "react";

interface ConfidenceItem {
  label: string;
  value: number;
}

interface DebugConfidenceProps {
  debugConfidence: ConfidenceItem[];
}

const DebugConfidence: React.FC<DebugConfidenceProps> = ({ debugConfidence }) => {
  return (
    <section className="bg-[#0a0c1a] border border-[#1a203b] rounded-md p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-3">Debug Confidence</h2>
      <div className="space-y-4">
        {debugConfidence.map(({ label, value }, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{label}</span>
              <span>{value}%</span>
            </div>
            <div className="h-2 bg-[#25305a] rounded-full overflow-hidden">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DebugConfidence;
