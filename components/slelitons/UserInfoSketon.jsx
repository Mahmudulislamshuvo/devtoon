const UserInfoSketon = () => {
  return (
    <section className="mt-lg">
      <div className="glass-pane p-lg rounded-xl grid grid-cols-1 md:grid-cols-12 gap-lg items-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>

        <div className="md:col-span-3 flex flex-col items-center gap-base">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 p-1">
              {/* Pulsing Circle */}
              <div className="w-full h-full rounded-full bg-white/10 animate-pulse"></div>
            </div>
            {/* Verified Badge Skeleton */}
            <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/20 animate-pulse"></div>
          </div>
        </div>

        {/* Text & Stats Skeleton */}
        <div className="md:col-span-6 space-y-base flex flex-col items-center md:items-start w-full">
          {/* Title/Name Skeleton */}
          <div className="h-10 w-48 bg-white/10 rounded-lg animate-pulse"></div>

          {/* Bio Paragraph Skeleton */}
          <div className="w-full max-w-md space-y-2">
            <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-white/10 rounded animate-pulse"></div>
          </div>

          {/* Stats Pills Skeleton */}
          <div className="flex flex-wrap justify-center md:justify-start gap-sm pt-base">
            <div className="h-8 w-28 bg-white/10 rounded-full animate-pulse"></div>
            <div className="h-8 w-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="h-8 w-24 bg-white/10 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Buttons Skeleton */}
        <div className="md:col-span-3 flex flex-col gap-sm w-full">
          {/* Main Action Button Skeleton */}
          <div className="h-12 w-full bg-white/10 rounded-lg animate-pulse"></div>

          {/* Secondary Buttons Skeleton Row */}
          <div className="flex gap-sm w-full">
            <div className="h-10 flex-1 bg-white/10 rounded-lg animate-pulse"></div>
            <div className="h-10 flex-1 bg-white/10 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfoSketon;
