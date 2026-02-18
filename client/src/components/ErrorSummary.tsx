import React from "react";

interface ErrorSummaryProps {
  language: string;
  framework: string;
  category: string;
  stackDepth: number;
  confidence: number;
}

const ErrorSummary: React.FC<ErrorSummaryProps> = ({
  language,
  framework,
  category,
  stackDepth,
  confidence,
}) => {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - confidence / 100);

  return (
    <section className="bg-[#0a0c1a] border border-[#1a203b] rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
      {/* Error details */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white mb-4">Error Summary</h2>
        <ul className="space-y-1 text-gray-300">
          <li>
            <span className="font-semibold text-white">Language:</span> {language}
          </li>
          <li>
            <span className="font-semibold text-white">Framework:</span> {framework}
          </li>
          <li>
            <span className="font-semibold text-white">Category:</span> {category}
          </li>
          <li>
            <span className="font-semibold text-white">Stack Depth:</span> {stackDepth} frames
          </li>
        </ul>
      </div>

      {/* Confidence circle */}
      <div className="flex flex-col items-center justify-center">
        <svg className="w-32 h-32" viewBox="0 0 96 96">
          {/* Background circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeOpacity="0.2"
          />
          {/* Progress circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 48 48)"
          />
          {/* Confidence text */}
          <text
            x="48"
            y="54"
            textAnchor="middle"
            fill="#3b82f6"
            fontWeight="bold"
            fontSize="20"
            fontFamily="Arial, sans-serif"
          >
            {confidence}%
          </text>
        </svg>
        <p className="mt-3 text-gray-400 font-medium">Confidence Score</p>
      </div>
    </section>
  );
};

export default ErrorSummary;
