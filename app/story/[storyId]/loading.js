import { MdArrowBack } from "react-icons/md";

export default function LoadingStory() {
  return (
    <main className="pt-xl pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
      {/* Back link skeleton */}
      <div className="inline-flex items-center gap-2 text-on-surface-variant/40 text-sm mb-6">
        <MdArrowBack /> Back to Story Stream
      </div>

      {/* Story Header skeleton */}
      <section className="">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="w-full max-w-md space-y-4">
            {/* Title Skeleton */}
            <div className="h-8 md:h-10 w-3/4 bg-surface-variant/50 animate-pulse rounded-md"></div>
            {/* Author Skeleton */}
            <div className="h-4 w-1/2 bg-surface-variant/50 animate-pulse rounded-md mt-2"></div>
          </div>
          {/* Story Type Skeleton */}
          <div className="h-6 w-20 bg-surface-variant/50 animate-pulse rounded-md"></div>
        </div>
      </section>

      {/* Book Content skeleton */}
      <section className="space-y-lg flex flex-col items-center py-10 w-full relative z-10">
        {/* Book Area */}
        <div className="w-[315px] md:w-[450px] lg:w-[900px] h-[400px] md:h-[600px] bg-surface-container/40 border border-outline-variant/30 animate-pulse rounded-r-xl rounded-l-md shadow-xl flex items-center justify-center">
          <div className="w-[1px] h-full bg-outline-variant/30 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
        </div>

        {/* Controller Buttons skeleton */}
        <div className="flex items-center justify-between gap-6 mt-12 bg-white/5 border border-white/10 px-6 py-3 rounded-full w-[300px] h-12 animate-pulse backdrop-blur-md">
           <div className="w-16 h-4 bg-white/10 rounded"></div>
           <div className="w-12 h-4 bg-white/10 rounded"></div>
           <div className="w-16 h-4 bg-white/10 rounded"></div>
        </div>
      </section>
    </main>
  );
}
