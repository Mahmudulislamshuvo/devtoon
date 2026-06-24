"use client";

import { FaGithub } from "react-icons/fa";
import {
  MdLock,
  MdRocketLaunch,
  MdCode,
  MdAutoAwesome,
  MdArrowForward,
} from "react-icons/md";
import GithubButton from "@/components/registration/GithubButton";

const features = [
  {
    icon: <MdCode className="text-primary text-xl" />,
    label: "Sync Repositories",
    desc: "Auto-import all your GitHub repos",
  },
  {
    icon: <MdAutoAwesome className="text-tertiary text-xl" />,
    label: "AI Story Generator",
    desc: "Turn commits into dev stories",
  },
  {
    icon: <MdRocketLaunch className="text-secondary text-xl" />,
    label: "Commit Analytics",
    desc: "Track your contribution graph",
  },
];

const GithubConnectBanner = ({ userName }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-surface-container-low">
      {/* Animated scan line */}
      <div className="scan-line" />

      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />

      {/* Glow blob */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-16 py-xl gap-lg">
        {/* Lock badge */}
        <div className="flex items-center gap-xs px-sm py-xs rounded-full border border-primary/20 bg-primary/5 text-primary font-label-caps text-label-caps">
          <MdLock className="text-sm" />
          <span>GITHUB ACCESS REQUIRED</span>
        </div>

        {/* GitHub icon */}
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full border border-white/10 bg-surface-container-highest avatar-glitch">
          <FaGithub className="text-5xl text-on-surface-variant" />
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-30" />
        </div>

        {/* Heading */}
        <div className="space-y-sm max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Connect Your{" "}
            <span className="text-primary text-glow">GitHub Account</span>
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Hey{userName ? ` ${userName}` : ""}! You&apos;re logged in with
            email & password. To access your repositories, generate AI stories,
            and track your commits — link your GitHub account below.
          </p>
        </div>

        {/* Feature chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm w-full max-w-3xl">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-xs p-md rounded-xl border border-white/5 bg-surface-container/50 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-xs rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                {f.icon}
              </div>
              <span className="font-label-caps text-label-caps text-on-surface">
                {f.label}
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant text-center">
                {f.desc}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-2xl">
          <GithubButton buttonText="CONNECT GITHUB ACCOUNT" />
          <p className="mt-sm font-code-sm text-code-sm text-on-surface-variant flex items-center justify-center gap-xs">
            <MdArrowForward className="text-sm" />
            You&apos;ll stay on this account, GitHub just syncs your repos
          </p>
        </div>
      </div>
    </div>
  );
};

export default GithubConnectBanner;
