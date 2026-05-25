import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-margin-desktop py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl items-center min-h-230.25">
      <div className="lg:col-span-6 space-y-md">
        <div className="inline-flex items-center gap-xs px-sm py-base rounded-full border border-primary/20 text-primary">
          <span className="material-symbols-outlined text-[18px]">
            auto_awesome
          </span>
          <span className="font-label-caps text-label-caps">
            AI-Powered Version Control Storytelling
          </span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface">
          Your Commits, <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Now a Story.
          </span>
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Transform boring GitHub commit messages into engaging AI-powered
          storyboards. Build a portfolio that recruiters actually want to read
          by turning technical changes into epic narratives.
        </p>
        <div className="flex flex-wrap gap-md pt-md">
          <button className="bg-primary-container text-on-primary-container px-lg py-sm font-label-caps text-label-caps rounded-xl hover:shadow-[0_0_20px_#22d3ee] active:scale-95 duration-200 transition-all flex items-center gap-sm">
            <span
              className="material-symbols-outlined"
              data-icon="rocket_launch"
            >
              rocket_launch
            </span>
            Get Started with GitHub
          </button>
          <button className="glass-surface px-lg py-sm font-label-caps text-label-caps text-on-surface rounded-xl hover:bg-white/10 active:scale-95 duration-200 transition-all flex items-center gap-sm">
            <span className="material-symbols-outlined" data-icon="play_circle">
              play_circle
            </span>
            Watch Demo
          </button>
        </div>
      </div>
      {/* <!-- 3D Flip Card Visual --> */}
      <div className="lg:col-span-6 flex justify-center perspective-1000">
        <div
          className="relative w-full max-w-112.5 aspect-4/5 preserve-3d duration-700 cursor-pointer animate-floating group"
          id="flip-card-inner"
        >
          {/* <!-- Front Card: The "Before" (Git) --> */}
          <div className="absolute inset-0 backface-hidden glass-surface rounded-xl p-lg flex flex-col justify-between border-t-white/20 shadow-2xl">
            <div className="space-y-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-xs">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    branch: main
                  </span>
                </div>
                <span
                  className="material-symbols-outlined text-primary/50"
                  data-icon="terminal"
                >
                  terminal
                </span>
              </div>
              <div className="bg-surface-container-lowest p-md rounded-lg border-l-2 border-primary">
                <p className="font-code-sm text-code-sm text-on-surface-variant">
                  $ git log --oneline
                </p>
                <p className="font-code-sm text-code-sm text-primary mt-xs">
                  f7a2c1b fix: resolve race condition in auth hook
                </p>
                <p className="font-code-sm text-code-sm text-on-surface-variant mt-xs">
                  3e9d8f2 chore: update dependencies
                </p>
                <p className="font-code-sm text-code-sm text-on-surface-variant mt-xs">
                  a1b2c3d feat: add dark mode support
                </p>
              </div>
            </div>
            <div className="mt-auto pt-lg">
              <div className="flex items-center gap-sm">
                <Image
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-outline-variant"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-pUSv-R2qvmBaZ5sRvHcDDnOcBABWZl3vL0pCrAPWnUGUVtidZsl2ejFZnAA4YRUfIZfgoHckxiUGUw3evJbHBOzbu9JlUzqJV3TJwhQl2oQuBXNaHonvrcukhtC8RXn7w9XWVqp0IDWkh6vRASL4ZUg8x83xlWM2dTl5NY6NDlG4ekjzjE25j_W29e8Va_BnvbxhI_EvcIti1-TqerKyLPlh1n_TQHzZbfjgs6dL4vqVIDyFuq_dgu_LBOii__QDBB2oEUMm9z8"
                  height={40}
                  width={40}
                />
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface">
                    Commit: f7a2c1b
                  </p>
                  <p className="font-code-sm text-code-sm text-on-surface-variant">
                    2 minutes ago
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none rounded-xl"></div>
          </div>
          {/* <!-- Back Card: The "After" (Story) --> */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 glass-surface rounded-xl overflow-hidden border-t-white/20 shadow-[0_0_50px_rgba(47,217,244,0.3)]">
            <div className="h-1/2 relative overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                alt="A highly detailed cinematic 3D illustration of a cyberpunk hacker character in a dark, neon-lit server room. The character is wearing glowing tech-wear and is surrounded by floating digital screens displaying code and complex data visualizations. The lighting is dominated by electric cyan and deep violet hues, creating a high-energy, futuristic atmosphere that feels like a scene from an epic graphic novel."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCA_dmouAheImrwVC_3Q0SJQUc1KbzZQtTKgyCR9kSFdhddQ7NkjEa-Mh_mrB6K2hlHa_d0MPLDDm-_RvzjcrZNmgtVUddMubgREkAZz8jF4a3gqytcuoq_PwMmH8CFXA50GR0ArVUy8MOuUJo3F0aI_SjKCsaz6TW-nLc2eRSA7oJWIpSkqqUEPWewSKGNtG-6Cxq6RVkCavTZA9U1j1s_fHTz-ATAEkgDPbpXTPaSw6Da7U6NusOZNW3ZzeOt7v1twE6hVnmbLw"
                height={40}
                width={40}
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest to-transparent"></div>
              <div className="absolute top-sm left-sm bg-primary/20 backdrop-blur-md px-sm py-base rounded-full border border-primary/40">
                <span className="font-label-caps text-label-caps text-primary">
                  SCENE 01: THE SILENT THREAT
                </span>
              </div>
            </div>
            <div className="p-lg space-y-md">
              <h3 className="font-headline-lg text-[24px] text-primary">
                The Race Against Time
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                As the auth servers hummed, a ghost in the machine threatened to
                lock every user out. Dev-01 deployed the &quot;Sync-Pulse&quot;
                fix, neutralizing the race condition just seconds before the
                system collapsed into chaos.
              </p>
              <div className="flex gap-sm pt-sm">
                <span className="px-sm py-base bg-secondary/10 border border-secondary/30 rounded font-code-sm text-code-sm text-secondary">
                  #Security
                </span>
                <span className="px-sm py-base bg-tertiary/10 border border-tertiary/30 rounded font-code-sm text-code-sm text-tertiary">
                  #Performance
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Interactive Tip --> */}
        <div className="absolute -bottom-xl left-1/2 -translate-x-1/2 text-center">
          <p className="font-label-caps text-label-caps text-on-surface-variant animate-pulse flex items-center gap-xs">
            <span className="material-symbols-outlined text-[16px]">
              touch_app
            </span>{" "}
            Hover or click to transform
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
