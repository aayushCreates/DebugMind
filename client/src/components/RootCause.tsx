import { File } from "lucide-react";
import React from "react";

interface RootCauseProps {
  title: string;
  description: string;
  file: string;
}

const RootCause: React.FC<RootCauseProps> = ({ title, description, file }) => {
  return (
    <section className="bg-[#0a0c1a] border border-[#1a203b] rounded-md p-6">
      <h2 className="text-xl font-semibold mb-3">Root Cause</h2>
      <p className="mb-3">{title}</p>
      <p className="text-gray-400 mb-3">{description}</p>
      <code className="bg-blue-800 p-3 rounded-md font-mono text-sm overflow-x-auto text-white cursor-pointer flex items-center gap-1">
        <File height={16} />
        {file}
      </code>
    </section>
  );
};

export default RootCause;
