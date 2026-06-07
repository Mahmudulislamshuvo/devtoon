"use client";

import BookFlip from "@/components/bookDesign/BookFlip";
import Profile from "@/components/userName/Profile";
import { useState } from "react";
import { MdAutoAwesome } from "react-icons/md";

const DevUsernamePage = () => {
  const [copyFeedback, setCopyFeedback] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyFeedback(true);
      setTimeout(() => {
        setCopyFeedback(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <main className="pt-xl pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-xl">
      {/* <!-- Profile Header Section --> */}
      <Profile />
      {/* <!-- Main Content: Interactive Storyboard --> */}
      <section className="space-y-lg">
        <div className="flex items-center justify-between">
          <div className="space-y-base">
            <h2 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
              <MdAutoAwesome className="text-3xl" />
              Dev Storyboard
            </h2>
            <p className="font-code-sm text-code-sm text-on-surface-variant">
              Commit snapshots from the latest narrative arcs
            </p>
          </div>
          <div className="flex gap-sm">
            <span className="px-sm py-xs bg-secondary/10 text-secondary border border-secondary/30 rounded font-label-caps text-label-caps">
              AI Narrative
            </span>
          </div>
        </div>
        {/* <!-- Bento Grid of Flip Cards --> */}
        <BookFlip />
      </section>
      {/* <!-- Recruitment / CTA Section --> */}
      <section className="glass-pane rounded-xl p-lg md:p-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="space-y-sm text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Like what you see?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              I'm currently open to new opportunities in AI, High-Performance
              Systems, and Frontend Engineering. Let's build the future
              together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-sm w-full md:w-auto">
            <button className="bg-primary text-on-primary font-label-caps text-label-caps py-sm px-lg rounded-lg glow-cyan hover:scale-105 transition-transform whitespace-nowrap">
              Hire @dev_neuro
            </button>
            <button className="border border-outline text-on-surface font-label-caps text-label-caps py-sm px-lg rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap">
              View GitHub
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DevUsernamePage;
