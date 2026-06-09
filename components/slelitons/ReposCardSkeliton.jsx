import React from "react";

const ReposCardSkeliton = () => {
  return (
    <div className="glass-card p-md rounded-xl animate-pulse">
      {/* Top Section (Title + Badge) */}
      <div className="flex justify-between items-start mb-md">
        <div className="w-2/3">
          {/* Repo Name Bar (Matches h3 heading) */}
          <div className="h-6 w-36 md:w-44 bg-white/10 rounded mb-2"></div>
          {/* Description Bar (Matches p description) */}
          <div className="h-4 w-24 md:w-32 bg-white/5 rounded"></div>
        </div>

        {/* Star/Commit Badge Placeholder */}
        <div className="h-7 w-20 bg-white/5 rounded"></div>
      </div>

      {/* Progress Bar Placeholder */}
      <div className="h-1 bg-white/10 rounded-full mb-md overflow-hidden">
        <div className="h-full bg-white/20 w-3/4 rounded-full"></div>
      </div>

      {/* Button Placeholder (Using exact same padding for perfect height matching) */}
      <div className="w-full py-sm bg-white/5 border border-white/5 rounded flex items-center justify-center">
        {/* Inside button text bar */}
        <div className="h-4 w-28 bg-white/10 rounded"></div>
      </div>
    </div>
  );
};

export default ReposCardSkeliton;
