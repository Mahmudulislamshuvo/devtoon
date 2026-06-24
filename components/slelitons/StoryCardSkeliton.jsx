import React from "react";

const StoryCardSkeliton = () => {
  return (
    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 opacity-60">
      {/* skeliton 1 */}
      <div className="border border-white/10 overflow-hidden flex flex-col bg-surface-container-highest">
        <div className="h-60 skeleton-pulse"></div>
        <div className="p-6 flex flex-col grow">
          <div className="h-6 w-full skeleton-pulse mb-2"></div>
          <div className="h-6 w-3/4 skeleton-pulse mb-6"></div>
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 skeleton-pulse"></div>
              <div className="space-y-2">
                <div className="h-3 w-20 skeleton-pulse"></div>
                <div className="h-2 w-16 skeleton-pulse"></div>
              </div>
            </div>
            <div className="h-6 w-6 skeleton-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCardSkeliton;
