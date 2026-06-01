import RegLeftside from "@/components/registration/RegLeftside";
import RegRightSide from "@/components/registration/RegRightSide";

const RegistrationPage = () => {
  return (
    <>
      <main className="grow flex flex-col items-center py-xl px-margin-mobile relative pt-25">
        {/* <!-- Atmosphere Effects --> */}
        <div className="fixed top-[-20%] right-[-10%] w-200 h-200 bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-20%] left-[-10%] w-200 h-200 bg-secondary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        {/* <!-- Identity Progress Stepper --> */}
        <div className="w-full max-w-300 mb-6 glass-surface p-5 rounded-lg border border-primary/20 flex items-center gap-md overflow-hidden relative transition-transform duration-200 ease-out">
          <div className="flex flex-col shrink-0">
            <span className="font-label-caps text-[10px] text-primary/70">
              DEPLOYMENT_STAGE
            </span>
            <span className="font-code-sm text-xs text-primary font-bold">
              RECRUIT_SYNC: 62%
            </span>
          </div>
          <div className="grow h-2 bg-surface-container-highest rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
            <div
              className="h-full bg-linear-to-r from-primary/40 to-primary relative"
              style={{ width: "62%" }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/20 blur-sm"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center px-md border-l border-outline-variant/30">
            <div className="flex flex-col items-center opacity-100">
              <div className="w-2 h-2 rounded-full bg-primary mb-1"></div>
              <span className="font-label-caps text-[8px] text-primary">
                SCAN
              </span>
            </div>
            <div className="flex flex-col items-center opacity-100">
              <div className="w-2 h-2 rounded-full bg-primary mb-1"></div>
              <span className="font-label-caps text-[8px] text-primary">
                FORGE
              </span>
            </div>
            <div className="flex flex-col items-center opacity-40">
              <div className="w-2 h-2 rounded-full bg-outline mb-1"></div>
              <span className="font-label-caps text-[8px] text-outline">
                SYNC
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-300 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* <!-- Left Column: Neural Profile & Logs --> */}
          <RegLeftside />
          {/* <!-- Right Column: Forge Identity Interface --> */}
          <RegRightSide />
        </div>
      </main>
    </>
  );
};

export default RegistrationPage;
