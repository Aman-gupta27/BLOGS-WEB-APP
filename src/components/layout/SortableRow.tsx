import React, { useState } from "react";

type Alignment = "start" | "center" | "end";

interface SortableRowProps {
  alignment: Alignment;
}

const SortableRow: React.FC<SortableRowProps> = ({ alignment }) => {
  const [sortAscending, setSortAscending] = useState<boolean>(false);

  const toggleSort = () => {
    setSortAscending((prev) => !prev);
  };

  return (
    <div
      className={`flex ${
        alignment === "start"
          ? "justify-start"
          : alignment === "center"
          ? "justify-center"
          : "justify-end"
      } w-full`}
    >
      <div className="flex items-center space-x-2">
        <div className="flex-1 h-px bg-gray-300"></div>

        {/* Sort by: Recent with Subscript Arrow */}
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={toggleSort}
        >
          <span>Sort by:</span>
          <span className="font-bold text-sm">Recent</span>
          <sub className="text-xs">{sortAscending ? "▲" : "▼"}</sub>
        </div>

        {/* Plain Horizontal Line */}
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SortableRow;
