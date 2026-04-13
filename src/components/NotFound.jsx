import React from "react";

const NotFound = () => {
  return (
    <div className="bg-white border border-gray-300/70 flex items-center justify-center rounded-xl h-64">
      <div className="flex items-center justify-center gap-2 flex-col">
        <img src="/images/not_found.png" className="w-40" alt="not found" />
        <p className="text-gray-600">No posts werer found.</p>
      </div>
    </div>
  );
};

export default NotFound;
