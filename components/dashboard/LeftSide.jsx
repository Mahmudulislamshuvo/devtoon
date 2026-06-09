"use client";

import { useQuery } from "@tanstack/react-query";
import { MdAutoAwesome, MdStar, MdSync } from "react-icons/md";
import ReposCardSkeliton from "../slelitons/ReposCardSkeliton";

const LeftSide = () => {
  const {
    data: repositories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["repositories"],
    queryFn: async () => {
      const response = await fetch("/api/get-repos", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const result = await response.json();

      return result.data || result.repositories;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
  });

  console.log("Fetched repositories:", repositories);

  return (
    <div className="lg:col-span-8 space-y-md">
      <div className="flex items-center justify-between mb-sm">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Your Repositories
        </h2>
        <div className="flex items-center gap-xs text-primary font-code-sm cursor-pointer hover:opacity-80">
          <MdSync className="text-[18px]" />
          <span className="font-label-caps text-label-caps">Refresh Index</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <ReposCardSkeliton key={n} />
            ))}
          </>
        ) : isError ? (
          <div className="text-red-500 col-span-1 md:col-span-2">
            Error: {error.message}
          </div>
        ) : repositories?.length > 0 ? (
          repositories.map((repo) => (
            <div
              key={repo.id}
              className="glass-card p-md rounded-xl group transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-md">
                <div>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-1 truncate w-40 md:w-48">
                    {repo.repoName}
                  </h3>
                  <p className="text-on-surface-variant font-code-sm text-code-sm line-clamp-1">
                    {repo.description || "No description available"}
                  </p>
                </div>
                <div className="flex items-center gap-xs px-2 py-1 bg-white/5 rounded">
                  <MdStar className="text-tertiary" />
                  <span className="font-label-caps text-label-caps text-tertiary">
                    {repo.totalCommitsFetched} Commits
                  </span>
                </div>
              </div>
              <div className="h-1 bg-white/10 rounded-full mb-md overflow-hidden">
                <div className="h-full bg-primary-container w-3/4 shadow-[0_0_10px_#22d3ee]"></div>
              </div>
              <button className="w-full py-sm bg-white/5 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 text-primary font-label-caps text-label-caps rounded flex items-center justify-center gap-xs transition-all active:scale-95">
                <MdAutoAwesome />
                Generate Story
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 text-center text-on-surface-variant py-8 border border-white/10 rounded-xl bg-white/5">
            No repositories found on your GitHub account.
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
