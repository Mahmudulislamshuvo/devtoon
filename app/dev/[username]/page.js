const DevUsernamePage = () => {
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
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="verified"
                  data-weight="fill"
                >
                  verified
                </span>
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
                <span
                  className="material-symbols-outlined text-primary text-lg"
                  data-icon="hub"
                >
                  hub
                </span>
                1.2k Stars
              </div>
              <div className="flex items-center gap-xs px-sm py-xs bg-white/5 border border-white/10 rounded-full font-label-caps text-label-caps">
                <span
                  className="material-symbols-outlined text-secondary text-lg"
                  data-icon="terminal"
                >
                  terminal
                </span>
                450 Commits
              </div>
              <div className="flex items-center gap-xs px-sm py-xs bg-white/5 border border-white/10 rounded-full font-label-caps text-label-caps">
                <span
                  className="material-symbols-outlined text-tertiary text-lg"
                  data-icon="group"
                >
                  group
                </span>
                28 Repos
              </div>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-sm">
            <button className="w-full py-sm bg-primary-container text-on-primary-container rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-sm glow-cyan hover:scale-[1.02] transition-transform">
              <span
                className="material-symbols-outlined"
                data-icon="person_add"
              >
                person_add
              </span>
              Follow
            </button>
            <div className="flex gap-sm">
              <button className="flex-1 py-sm glass-pane rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-xs hover:bg-white/10 transition-colors">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="link"
                >
                  link
                </span>
                Copy
              </button>
              <button className="flex-1 py-sm glass-pane rounded-lg font-label-caps text-label-caps flex items-center justify-center gap-xs hover:bg-white/10 transition-colors">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="share"
                >
                  share
                </span>
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
              <span
                className="material-symbols-outlined text-3xl"
                data-icon="auto_awesome"
              >
                auto_awesome
              </span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* <!-- Card 1 --> */}
          <div className="perspective-1000 h-[450px] group">
            <div className="flip-card-inner w-full h-full relative">
              {/* <!-- Front --> */}
              <div className="flip-card-front glass-pane rounded-xl overflow-hidden flex flex-col shadow-xl">
                <div className="h-1/2 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                    data-alt="A hyper-realistic digital illustration of a glowing, neon-blue mainframe server room in a high-tech facility. Intricate data cables and fiber optic lines pulse with cyan light as they connect to massive towers. The floor is polished dark obsidian, reflecting the server lights. Volumetric lighting and floating data particles create an intense atmosphere of a high-security facility being breached. Cyberpunk aesthetic, 8k resolution, cinematic composition."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKDuMR6L8Ulxb8IHK6lEoC2U-XRg22GED9IJmPsKTn22bl272Z5Sl08l7JFXr7T_y0AwCig-XbW9lksD8QSzSveTjVWNYwbpTP44V8wRWCW4J9E5I05KYzywVwdhusu2t3161d60hmRszYXHijTGzxGgZXU7tn33x0V7-qBV5oCGol3nL0wQTb-BFj7ry4v9Bo_bvFsO4qvBxNvhAWp0PwtEBWet_vav6QEf3-IaBOMdVsZtJ2jVu9HR7AcECS0pYRczoq5V9mBT4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md px-sm py-xs rounded border border-primary/40">
                    <span className="font-label-caps text-label-caps text-primary">
                      SCENE 01
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-lg flex flex-col justify-between">
                  <p className="text-on-surface font-body-md italic leading-relaxed">
                    "The mainframe was breached... I saw the logic gates
                    screaming in the void. It wasn't a bug; it was an invitation
                    to something deeper."
                  </p>
                  <div className="flex justify-between items-center mt-lg border-t border-white/10 pt-sm">
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      View Commit
                    </span>
                    <span
                      className="material-symbols-outlined text-primary"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Back --> */}
              <div className="flip-card-back glass-pane rounded-xl overflow-hidden flex flex-col bg-surface-container-lowest border-primary/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                <div className="p-lg h-full flex flex-col justify-between scanline">
                  <div className="space-y-md">
                    <div className="flex items-center gap-sm border-b border-primary/20 pb-sm">
                      <span
                        className="material-symbols-outlined text-primary"
                        data-icon="history"
                      >
                        history
                      </span>
                      <h3 className="font-label-caps text-label-caps text-primary">
                        COMMIT METADATA
                      </h3>
                    </div>
                    <div className="space-y-sm">
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Hash
                        </span>
                        <p className="font-code-sm text-code-sm text-primary">
                          7f9a2c3b81e05d...
                        </p>
                      </div>
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Message
                        </span>
                        <p className="font-code-sm text-code-sm text-on-surface">
                          feat: integrate core neural bridge middleware
                        </p>
                      </div>
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Date
                        </span>
                        <p className="font-code-sm text-code-sm text-on-surface">
                          Oct 12, 2024 · 03:42 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 p-sm rounded text-[12px] font-code-sm text-primary/80">
                    +1,244 lines changed | -302 lines removed
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="perspective-1000 h-[450px] group">
            <div className="flip-card-inner w-full h-full relative">
              {/* <!-- Front --> */}
              <div className="flip-card-front glass-pane rounded-xl overflow-hidden flex flex-col shadow-xl">
                <div className="h-1/2 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                    data-alt="A macro digital artwork of a neural network being constructed by robotic nano-tendrils. The tendrils emit a soft violet glow as they weave together bright emerald light-nodes. The background is a dark, atmospheric laboratory space with translucent holographic UI elements floating in the air. The mood is precise, technical, and full of creative energy. Deep violet and emerald green palette."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKdJqwK2zr2AfEfYfKbU4PmEHKCKrv0lVK4AXKsrte93tYtc-xia-MdDy506pZZwxtfNR7lPm2fXkEoBBPNdZj5aVXz7QeYvIpOXRunZL1Vm1_ejSsOkL5P7fNRC0ijUqmDDpEIyR4ll_gxMS0sObzxw3ft5XUT5mVKx5Qn76qYz5ubmDj3JYyU4x1Vv79xp99nP_J4Xw8tQmLF8l2tI9w5ghOqp1BjjOI_Pya_XY_Rt7ncMqdK_esiycAROV95A42_njPY9HJyQE"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-secondary/20 backdrop-blur-md px-sm py-xs rounded border border-secondary/40">
                    <span className="font-label-caps text-label-caps text-secondary">
                      SCENE 02
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-lg flex flex-col justify-between">
                  <p className="text-on-surface font-body-md italic leading-relaxed">
                    "I refactored the neural pathways. The data finally began to
                    flow like liquid mercury, silent and unstoppable through the
                    architecture."
                  </p>
                  <div className="flex justify-between items-center mt-lg border-t border-white/10 pt-sm">
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      View Commit
                    </span>
                    <span
                      className="material-symbols-outlined text-secondary"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Back --> */}
              <div className="flip-card-back glass-pane rounded-xl overflow-hidden flex flex-col bg-surface-container-lowest border-secondary/50 shadow-[0_0_20px_rgba(138,43,226,0.15)]">
                <div className="p-lg h-full flex flex-col justify-between scanline">
                  <div className="space-y-md">
                    <div className="flex items-center gap-sm border-b border-secondary/20 pb-sm">
                      <span
                        className="material-symbols-outlined text-secondary"
                        data-icon="database"
                      >
                        database
                      </span>
                      <h3 className="font-label-caps text-label-caps text-secondary">
                        COMMIT METADATA
                      </h3>
                    </div>
                    <div className="space-y-sm">
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Hash
                        </span>
                        <p className="font-code-sm text-code-sm text-secondary">
                          4d5e6f7a1b2c3d...
                        </p>
                      </div>
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Message
                        </span>
                        <p className="font-code-sm text-code-sm text-on-surface">
                          refactor: optimize data flow in hydration engine
                        </p>
                      </div>
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Date
                        </span>
                        <p className="font-code-sm text-code-sm text-on-surface">
                          Oct 14, 2024 · 11:15 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-secondary/5 border border-secondary/20 p-sm rounded text-[12px] font-code-sm text-secondary/80">
                    +85 lines changed | -450 lines removed
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="perspective-1000 h-[450px] group">
            <div className="flip-card-inner w-full h-full relative">
              {/* <!-- Front --> */}
              <div className="flip-card-front glass-pane rounded-xl overflow-hidden flex flex-col shadow-xl">
                <div className="h-1/2 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                    data-alt="A sprawling, futuristic city skyline viewed from high above at night. The city is a dense grid of glowing blue and gold circuits, with massive skyscraper-sized processors rising into a starry sky. Beams of light shoot vertically into space. The image is atmospheric, conveying a sense of global scale and immense digital power. Cinematic lighting, deep indigo and golden-amber color scheme."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcZtxNTXc70pG5teSAa6KlWbOGM0VSB3EbpHdKtwr2Utr3yEw02p6-wNQG1E2nkeKBIEk-ZNLuXhzjYy6lDaD5ewMsZvcMjAK2vX5hwVVZ8Ke7g6WddJmVVWcioYpJ-DnvslYiViNFNa9ECXjIDJVJtRk-g1rbEcZkMSVdeJOgFAHLsfxCmBTMgYXBvbNc2kcZvUIVErcxs11dIPqP3ueJP-SZvFm8YAkqP08OFDtK1cymS3Yuk7DJX9i39jsWG55PPS9l-AWmpcI"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-tertiary/20 backdrop-blur-md px-sm py-xs rounded border border-tertiary/40">
                    <span className="font-label-caps text-label-caps text-tertiary">
                      SCENE 03
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-lg flex flex-col justify-between">
                  <p className="text-on-surface font-body-md italic leading-relaxed">
                    "The deployment was global. The signals reached the farthest
                    nodes of the network. The system wasn't just online; it was
                    alive."
                  </p>
                  <div className="flex justify-between items-center mt-lg border-t border-white/10 pt-sm">
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      View Commit
                    </span>
                    <span
                      className="material-symbols-outlined text-tertiary"
                      data-icon="arrow_forward"
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Back --> */}
              <div className="flip-card-back glass-pane rounded-xl overflow-hidden flex flex-col bg-surface-container-lowest border-tertiary/50 shadow-[0_0_20px_rgba(110,251,190,0.15)]">
                <div className="p-lg h-full flex flex-col justify-between scanline">
                  <div className="space-y-md">
                    <div className="flex items-center gap-sm border-b border-tertiary/20 pb-sm">
                      <span
                        className="material-symbols-outlined text-tertiary"
                        data-icon="rocket_launch"
                      >
                        rocket_launch
                      </span>
                      <h3 className="font-label-caps text-label-caps text-tertiary">
                        COMMIT METADATA
                      </h3>
                    </div>
                    <div className="space-y-sm">
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Hash
                        </span>
                        <p className="font-code-sm text-code-sm text-tertiary">
                          1a2b3c4d5e6f7g...
                        </p>
                      </div>
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Message
                        </span>
                        <p className="font-code-sm text-code-sm text-on-surface">
                          deploy: V1.0 global rollout successful
                        </p>
                      </div>
                      <div className="space-y-xs">
                        <span className="text-on-surface-variant font-label-caps text-[10px] uppercase">
                          Date
                        </span>
                        <p className="font-code-sm text-code-sm text-on-surface">
                          Oct 16, 2024 · 08:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-tertiary/5 border border-tertiary/20 p-sm rounded text-[12px] font-code-sm text-tertiary/80">
                    +5,000 lines changed | PRODUCTION RELEASE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
