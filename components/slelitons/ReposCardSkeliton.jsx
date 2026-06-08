const ReposCardSkeliton = () => {
  return (
    <div className="glass-card p-md rounded-xl">
      <div className="flex justify-between items-start mb-md">
        {/* Title and Subtitle Skeleton */}
        <div className="space-y-2">
          {/* h3 (quantum-engine) skeleton */}
          <div className="h-7 w-32 bg-white/10 rounded-md animate-pulse"></div>
          {/* p (Rust // MIT License) skeleton */}
          <div className="h-4 w-24 bg-white/10 rounded-md animate-pulse"></div>
        </div>

        {/* Star Badge Skeleton */}
        <div className="h-7 w-16 bg-white/5 rounded animate-pulse"></div>
      </div>

      {/* Progress Bar Skeleton */}
      <div className="h-1 bg-white/10 rounded-full mb-md animate-pulse"></div>

      {/* Button Skeleton */}
      <div className="w-full h-10 bg-white/5 border border-white/10 rounded animate-pulse"></div>
    </div>
  );
};

export default ReposCardSkeliton;
