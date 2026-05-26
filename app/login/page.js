const LoginPage = () => {
  return (
    <div className="bg-[#0b1121] text-slate-200 font-sans min-h-screen flex flex-col relative z-0 w-full overflow-hidden">
      {/* */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-cyan-500/5 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <main className="grow flex flex-col lg:flex-row w-full h-full relative z-10">
        {/* */}
        {/* min-w-0 যোগ করা হয়েছে যেন এটি তার নির্দিষ্ট জায়গার বাইরে না যায় */}
        <section className="hidden lg:flex flex-1 flex-col justify-center items-center px-12 relative min-w-0">
          <div className="rounded-xl overflow-hidden flex flex-col h-[600px] w-full max-w-2xl transform -rotate-1 shadow-2xl shadow-cyan-900/10 bg-[#111827] border border-slate-800 shrink-0">
            {/* */}
            <div className="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                NARRATIVE_STREAM_V4.LOG
              </div>
            </div>

            {/* */}
            <div className="p-6 font-mono text-sm overflow-hidden flex-grow space-y-3 relative">
              <p className="text-slate-500">
                [08:42:11] Initializing neural bridge protocol...
              </p>
              <p className="text-cyan-500/80">
                [08:42:12] AUTH_REQ: Architect validation required.
              </p>
              <p className="text-slate-500">
                [08:42:13] Loading workspace state: "Cyber-Voxel-Project"
              </p>
              <p className="text-slate-500">
                [08:42:14] 3,412 files analyzed. Code quality index: 0.98
              </p>
              <p className="text-emerald-400 font-semibold">
                [08:42:15] Narrative Intelligence standby...
              </p>
              <p className="text-slate-500">
                [08:42:16] Awaiting input link...
              </p>

              <div className="pt-4 space-y-2">
                <p className="text-slate-300">
                  <span className="text-cyan-400 mr-2">&gt;</span>fetch --origin
                  git@github.com:devtoon/narrative-engine.git
                </p>
                <p className="text-slate-500">
                  Fetching objects: 100% (142/142), done.
                </p>
                <p className="text-slate-300">
                  <span className="text-cyan-400 mr-2">&gt;</span>analyze-impact
                  --scope global
                </p>
                <p className="text-slate-400">
                  Analyzing structural dependencies...{" "}
                  <span className="text-cyan-400 ml-2">89%</span>
                </p>
              </div>

              <div className="pt-10">
                <p className="text-cyan-600/70 italic text-xs">
                  "The code is but the skeleton; Narrative is the soul."
                </p>
              </div>
              <p className="pt-4 text-slate-400 animate-pulse">_</p>

              {/* */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* */}
          <div className="absolute -z-10 top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px]"></div>
        </section>

        {/* */}
        {/* shrink-0 যোগ করা হয়েছে যেন এই সেকশনটি কোনোভাবেই ৪৮০ পিক্সেলের চেয়ে ছোট না হয় */}
        <section className="w-full lg:w-[480px] shrink-0 flex flex-col justify-center p-8 md:p-12 bg-[#0b1121]/80 backdrop-blur-md lg:border-l border-slate-800/50 relative z-10 overflow-y-auto">
          {/* max-w-[360px] এবং mx-auto দিয়ে ফর্মটিকে মাঝখানে সুন্দরভাবে রাখা হয়েছে */}
          <div className="w-full max-w-[360px] mx-auto flex flex-col justify-center min-h-full py-10">
            {/* */}
            <div className="space-y-4 mb-10 shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 rounded text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                AUTHENTICATION_GATEWAY_V2
              </div>
              <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tight">
                Welcome back,
                <br />
                <span className="text-cyan-400">Architect.</span>
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your workspace is synchronized and awaiting your command.
              </p>
            </div>

            {/* */}
            <div className="space-y-6 shrink-0">
              {/* */}
              <button className="w-full group relative flex items-center justify-center gap-3 bg-cyan-200 text-slate-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:bg-cyan-300 overflow-hidden shrink-0">
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base tracking-tight shrink-0">
                  Connect via GitHub
                </span>
              </button>

              {/* */}
              <div className="relative flex items-center py-2 shrink-0">
                <div className="flex-grow border-t border-slate-800"></div>
                <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                  LEGACY PROTOCOL
                </span>
                <div className="flex-grow border-t border-slate-800"></div>
              </div>

              {/* */}
              <form className="space-y-5 shrink-0 flex flex-col">
                <div className="space-y-2 shrink-0 flex flex-col">
                  <label className="text-[11px] font-bold text-slate-400 tracking-widest uppercase px-1 shrink-0">
                    IDENTIFIER
                  </label>
                  <input
                    className="w-full h-12 bg-[#1e293b]/50 border border-slate-700/50 rounded-lg px-4 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono text-sm placeholder:text-slate-600 shrink-0"
                    placeholder="architect@devtoon.ai"
                    type="email"
                  />
                </div>
                <div className="space-y-2 shrink-0 flex flex-col">
                  <div className="flex justify-between items-center px-1 shrink-0">
                    <label className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                      ACCESS_KEY
                    </label>
                    <a
                      className="text-[10px] font-bold text-cyan-600 hover:text-cyan-400 transition-colors uppercase tracking-widest shrink-0"
                      href="#"
                    >
                      RECOVER_KEY
                    </a>
                  </div>
                  <input
                    className="w-full h-12 bg-[#1e293b]/50 border border-slate-700/50 rounded-lg px-4 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono text-sm placeholder:text-slate-600 shrink-0"
                    placeholder="••••••••••••"
                    type="password"
                  />
                </div>
                <button
                  className="w-full h-12 border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 font-bold rounded-lg transition-all duration-300 uppercase tracking-widest text-xs mt-4 active:scale-[0.98] shrink-0"
                  type="button"
                >
                  Initialize Access
                </button>
              </form>
            </div>

            {/* */}
            <div className="pt-8 flex flex-col gap-4 mt-auto shrink-0">
              <p className="text-slate-400 text-sm">
                New instance?
                <a
                  className="text-cyan-400 hover:underline decoration-cyan-400/50 underline-offset-4 ml-2 font-semibold"
                  href="#"
                >
                  Register Identity
                </a>
              </p>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity flex-wrap">
                <span className="font-mono text-[10px] text-slate-500 bg-slate-800/80 px-2 py-1 rounded border border-slate-700/50 shrink-0">
                  0x8aebff_SECURED
                </span>
                <span className="font-mono text-[10px] text-slate-500 bg-slate-800/80 px-2 py-1 rounded border border-slate-700/50 shrink-0">
                  AES-256
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
