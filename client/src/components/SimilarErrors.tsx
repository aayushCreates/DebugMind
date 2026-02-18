import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";

interface SimilarError {
  message: string;
  resolved: number;
  link: string;
}

interface SimilarErrorsProps {
  similarErrors: SimilarError[];
}

const SimilarErrors: React.FC<SimilarErrorsProps> = ({ similarErrors }) => {
  return (
    <section className="bg-[#0a0c1a] border border-[#1a203b] rounded-md p-6">
      <h2 className="text-xl font-semibold mb-3">
        Similar Errors Found ({similarErrors.length})
      </h2>
      <ul className="space-y-3">
        {similarErrors.map(({ message, resolved, link }, i) => (
          <li
            key={i}
            className="flex justify-between items-center border px-4 py-5 rounded-lg bg-[#171a2c]/40 border-[#222948]"
          >
            <p>{message}</p>
            <div className="flex items-center gap-10">
              <span className="text-green-500 font-semibold">{resolved}% resolved</span>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 flex text-sm items-center"
              >
                View Fix
                <SquareArrowOutUpRight height={15} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SimilarErrors;
