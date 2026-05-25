const LeftSide = () => {
  return (
    <div className="lg:col-span-8 space-y-md">
      <div className="flex items-center justify-between mb-sm">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Your Repositories
        </h2>
        <div className="flex items-center gap-xs text-primary font-code-sm">
          <span className="material-symbols-outlined text-[18px]">sync</span>
          <span className="font-label-caps text-label-caps">Refresh Index</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
        {/* Repo Card 1 */}
        <div className="glass-card p-md rounded-xl group transition-all duration-300">
          <div className="flex justify-between items-start mb-md">
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-1">
                quantum-engine
              </h3>
              <p className="text-on-surface-variant font-code-sm text-code-sm">
                Rust // MIT License
              </p>
            </div>
            <div className="flex items-center gap-xs px-2 py-1 bg-white/5 rounded">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>
              <span className="font-label-caps text-label-caps text-tertiary">
                1.2k
              </span>
            </div>
          </div>
          <div className="h-1 bg-white/10 rounded-full mb-md overflow-hidden">
            <div className="h-full bg-primary-container w-3/4 shadow-[0_0_10px_#22d3ee]"></div>
          </div>
          <button className="w-full py-sm bg-white/5 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 text-primary font-label-caps text-label-caps rounded flex items-center justify-center gap-xs transition-all active:scale-95">
            <span className="material-symbols-outlined">auto_awesome</span>
            Generate Story
          </button>
        </div>
        {/* Repo Card 2 */}
        <div className="glass-card p-md rounded-xl group transition-all duration-300">
          <div className="flex justify-between items-start mb-md">
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-1">
                nebula-ui-kit
              </h3>
              <p className="text-on-surface-variant font-code-sm text-code-sm">
                TypeScript // Tailwind
              </p>
            </div>
            <div className="flex items-center gap-xs px-2 py-1 bg-white/5 rounded">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>
              <span className="font-label-caps text-label-caps text-tertiary">
                842
              </span>
            </div>
          </div>
          <div className="h-1 bg-white/10 rounded-full mb-md overflow-hidden">
            <div className="h-full bg-primary-container w-1/2 shadow-[0_0_10px_#22d3ee]"></div>
          </div>
          <button className="w-full py-sm bg-white/5 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 text-primary font-label-caps text-label-caps rounded flex items-center justify-center gap-xs transition-all active:scale-95">
            <span className="material-symbols-outlined">auto_awesome</span>
            Generate Story
          </button>
        </div>
        {/* Repo Card 3 */}
        <div className="glass-card p-md rounded-xl group transition-all duration-300">
          <div className="flex justify-between items-start mb-md">
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-1">
                flux-capacitor-v2
              </h3>
              <p className="text-on-surface-variant font-code-sm text-code-sm">
                Go // Distributed
              </p>
            </div>
            <div className="flex items-center gap-xs px-2 py-1 bg-white/5 rounded">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>
              <span className="font-label-caps text-label-caps text-tertiary">
                2.4k
              </span>
            </div>
          </div>
          <div className="h-1 bg-white/10 rounded-full mb-md overflow-hidden">
            <div className="h-full bg-primary-container w-5/6 shadow-[0_0_10px_#22d3ee]"></div>
          </div>
          <button className="w-full py-sm bg-white/5 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 text-primary font-label-caps text-label-caps rounded flex items-center justify-center gap-xs transition-all active:scale-95">
            <span className="material-symbols-outlined">auto_awesome</span>
            Generate Story
          </button>
        </div>
        {/* Repo Card 4 */}
        <div className="glass-card p-md rounded-xl group transition-all duration-300">
          <div className="flex justify-between items-start mb-md">
            <div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-1">
                z-axis-router
              </h3>
              <p className="text-on-surface-variant font-code-sm text-code-sm">
                C++ // Low-Latency
              </p>
            </div>
            <div className="flex items-center gap-xs px-2 py-1 bg-white/5 rounded">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>
              <span className="font-label-caps text-label-caps text-tertiary">
                315
              </span>
            </div>
          </div>
          <div className="h-1 bg-white/10 rounded-full mb-md overflow-hidden">
            <div className="h-full bg-primary-container w-1/4 shadow-[0_0_10px_#22d3ee]"></div>
          </div>
          <button className="w-full py-sm bg-white/5 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 text-primary font-label-caps text-label-caps rounded flex items-center justify-center gap-xs transition-all active:scale-95">
            <span className="material-symbols-outlined">auto_awesome</span>
            Generate Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
