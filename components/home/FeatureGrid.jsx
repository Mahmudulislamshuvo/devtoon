import {
  MdAutoStories,
  MdIntegrationInstructions,
  MdPersonSearch,
  MdQueryStats,
} from "react-icons/md";

const FeatureGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-margin-desktop py-xl">
      <div className="mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Engineered for Humans.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Beyond code, your journey matters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md h-auto md:h-150">
        {/* <!-- AI Storyboard Card --> */}
        <div className="md:col-span-8 glass-surface rounded-xl p-lg flex flex-col justify-end group overflow-hidden relative">
          <div className="absolute top-0 right-0 p-lg opacity-20 group-hover:opacity-100 transition-opacity">
            <MdAutoStories className="text-primary text-[120px]! leading-none" />
          </div>
          <div className="relative z-10">
            <span className="font-label-caps text-label-caps text-primary block mb-xs uppercase">
              Narrative Engine
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
              AI Storyboard Generation
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our proprietary LLM analyzes your git diffs to generate immersive
              visual stories. It identifies the &quot;climax&quot; of your
              sprints and the &quot;villains&quot; of your bug hunts.
            </p>
          </div>
        </div>
        {/* <!-- Recruiter Mode --> */}
        <div className="md:col-span-4 glass-surface rounded-xl p-lg flex flex-col justify-between border-secondary/20">
          <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/30">
            <MdPersonSearch />
          </div>
          <div>
            <h3 className="font-headline-lg text-[24px] text-on-surface mb-xs">
              Recruiter Focus
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Interactive portfolios that show your problem-solving journey, not
              just lines of code.
            </p>
          </div>
        </div>
        {/* <!-- Code Insights --> */}
        <div className="md:col-span-4 glass-surface rounded-xl p-lg flex flex-col justify-between border-tertiary/20">
          <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary border border-tertiary/30">
            <MdQueryStats />
          </div>
          <div>
            <h3 className="font-headline-lg text-[24px] text-on-surface mb-xs">
              Visual Insights
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Heatmaps and growth charts reimagined as cyberpunk cityscapes and
              star systems.
            </p>
          </div>
        </div>
        {/* <!-- Terminal Integration --> */}
        <div className="md:col-span-8 glass-surface rounded-xl p-lg bg-surface-container-lowest border-white/5 relative overflow-hidden group">
          <div className="flex items-center gap-base mb-md">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_#2fd9f4]"></div>
            <span className="font-code-sm text-code-sm text-primary">
              system_check: active
            </span>
          </div>
          <div className="space-y-xs font-code-sm text-code-sm text-on-surface-variant">
            <p className="text-secondary">&gt; Connecting to GitHub API...</p>
            <p className="text-on-surface">
              &gt; Analyzing repo: devtoon/core-engine
            </p>
            <p className="text-tertiary">
              &gt; Logic detected: Critical Bug Fix [Scene: Heroic Save]
            </p>
            <p className="text-on-surface">
              &gt; Rendering storyboard... [####################] 100%
            </p>
          </div>
          <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 group-hover:translate-y-0 group-hover:translate-x-0 duration-500 transition-all">
            <MdIntegrationInstructions className="text-[200px]! leading-none text-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
