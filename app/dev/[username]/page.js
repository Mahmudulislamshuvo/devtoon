"use client";

import BookFlip from "@/components/bookDesign/BookFlip";
import { useState } from "react";
import {
  MdAutoAwesome,
  MdCheck,
  MdGroup,
  MdHub,
  MdLink,
  MdPersonAdd,
  MdShare,
  MdTerminal,
  MdVerified,
} from "react-icons/md";

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
      <section className="mt-lg">
        <div className="glass-pane p-lg rounded-xl grid grid-cols-1 md:grid-cols-12 gap-lg items-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
          <div className="md:col-span-3 flex flex-col items-center gap-base">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary p-1 glow-cyan">
                <img
                  alt="User profile"
                  className="w-full h-full rounded-full object-cover"
                  data-alt="A cinematic, high-detail portrait of a young tech-savvy developer with short dark hair, wearing sleek cyberpunk-style glasses that catch blue and neon violet light reflections. The background is a dimly lit, high-tech workstation with glowing computer screens displaying lines of code. The lighting is dramatic, using a cool cyan and deep magenta color palette to create a professional but futuristic recruitment-focused atmosphere."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMKJ0nIIPcLS0P5EjAPzxP4eCiSRMEUxmBmuPhgOMQ4MW6Sn1UcSWmSZT3bVDh9-pZ26CyIaMgApSiz6eKhI2TFW4Zif8K0x2oYF9Harnu1A6UUfpwdPx6a72CO_4CLwa8cJF5_UVhCb_ReT9WaC9YBGlg-Zgscr9sxKnL2dkRm_lTZ1JhGZ81Aj0GDI_slq1d6rfjRI4R6oRK-sHgPNbWzMmQX9gNLAxggzOCYka74WQ_GYTcNDmRO3m8n3uetu5FAbuSZkBSSA0"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-primary w-8 h-8 rounded-full flex items-center justify-center text-on-primary glow-cyan">
                <MdVerified className="text-sm" />
              </div>
            </div>
          </div>
          <div className="md:col-span-6 space-y-base text-center md:text-left">
            <h1 className="font-headline-xl text-headline-xl text-primary">
              @dev_neuro
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Fullstack Developer building the future. Architecting neon-infused
              experiences with TypeScript, Go, and AI orchestration.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-sm pt-base">
              <div className="flex items-center gap-xs px-sm py-xs bg-white/5 border border-white/10 rounded-full font-label-caps text-label-caps">
                <MdHub className="text-primary text-lg" />
                1.2k Stars
              </div>
              <div className="flex items-center gap-xs px-sm py-xs bg-white/5 border border-white/10 rounded-full font-label-caps text-label-caps">
                <MdTerminal className="text-secondary text-lg" />
                450 Commits
              </div>
              <div className="flex items-center gap-xs px-sm py-xs bg-white/5 border border-white/10 rounded-full font-label-caps text-label-caps">
                <MdGroup className="text-tertiary text-lg" />
                28 Repos
              </div>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-sm">
            <button className="w-full py-sm bg-primary-container text-on-primary-container rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-sm glow-cyan hover:scale-[1.02] transition-transform">
              <MdPersonAdd />
              Follow
            </button>
            <div className="flex gap-sm">
              <button
                className="flex-1 py-sm glass-pane rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-xs hover:bg-white/10 transition-colors"
                onClick={copyLink}
              >
                {copyFeedback ? (
                  <MdCheck className="text-sm" />
                ) : (
                  <MdLink className="text-sm" />
                )}
                {copyFeedback ? "Copied!" : "Copy"}
              </button>
              <button className="flex-1 py-sm glass-pane rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-xs hover:bg-white/10 transition-colors">
                <MdShare className="text-sm" />
                Tweet
              </button>
            </div>
          </div>
        </div>
      </section>
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
