"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { MdGroup, MdTerminal, MdVerifiedUser } from "react-icons/md";
import UserInfoSketon from "../slelitons/UserInfoSketon";

const Profile = () => {
  const {
    data: userInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await fetch("/api/getuserinfo", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }
      return response.json();
    },

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
  });

  if (isLoading) return <UserInfoSketon />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section className="mt-lg">
      <div className="glass-pane p-lg rounded-xl grid grid-cols-1 md:grid-cols-12 gap-lg items-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
        <div className="md:col-span-3 flex flex-col items-center gap-base">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary p-1 glow-cyan">
              <Image
                alt="User profile"
                className="w-full h-full rounded-full object-cover"
                data-alt="A cinematic, high-detail portrait of a young tech-savvy developer with short dark hair, wearing sleek cyberpunk-style glasses that catch blue and neon violet light reflections. The background is a dimly lit, high-tech workstation with glowing computer screens displaying lines of code. The lighting is dramatic, using a cool cyan and deep magenta color palette to create a professional but futuristic recruitment-focused atmosphere."
                src={
                  userInfo?.avatar_url || (
                    <MdVerifiedUser className="text-primary text-6xl" />
                  )
                }
                width={160}
                height={160}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-6 space-y-base text-center md:text-left">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            {`@${userInfo?.login || "dev_neuro"}`}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {userInfo?.bio ||
              "Fullstack Developer building the future. Architecting neon-infused experiences with TypeScript, Go, and AI orchestration."}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-sm pt-base">
            {/* <div className="flex items-center gap-xs px-sm py-xs bg-white/5 border border-white/10 rounded-full font-label-caps text-label-caps">
              <MdTerminal className="text-secondary text-lg" />
              450 Commits
            </div> */}
            <div className="flex items-center gap-xs px-sm py-xs bg-white/5 border border-white/10 rounded-full font-label-caps text-label-caps">
              <MdGroup className="text-tertiary text-lg" />
              {userInfo?.public_repos || 0} Repos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
