"use client";

import React, { useEffect, useState, useRef } from "react";

const RegistrationPage = () => {
  const [logs, setLogs] = useState([
    "> Establishing secure handshake...",
    "> Injecting aesthetic parameters...",
    "> Neural bridge: STABLE",
    "> Reading character seed...",
    "> Awaiting user input_",
  ]);
  const logContainerRef = useRef(null);

  useEffect(() => {
    const logPool = [
      "> Querying local datastore...",
      "> Handshake verified (0.4ms)",
      "> Character seed generated: AX-992",
      "> Optimization pass 04 starting...",
      "> Memory buffer at 92% capacity",
      "> CSS injection complete",
    ];

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLogs((prev) => {
          const newLog = logPool[Math.floor(Math.random() * logPool.length)];
          const updatedLogs = [newLog, ...prev];
          return updatedLogs.slice(0, 6);
        });
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            {/* <!-- Neural Profile Area --> */}
            <div className="glass-surface p-md rounded-xl border-l-4 border-l-primary relative overflow-hidden flex-1 neon-border flex flex-col transition-transform duration-200 ease-out">
              <div className="scan-line"></div>
              <div className="flex justify-between items-center mb-md">
                <h2 className="font-label-caps text-label-caps text-primary tracking-widest flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px] animate-pulse">
                    psychology
                  </span>
                  NEURAL_PROFILE_V2
                </h2>
                <span className="font-code-sm text-[10px] text-secondary">
                  ID: TMP-7221
                </span>
              </div>
              <div className="avatar-glitch flex-1 rounded-lg border border-outline-variant/30 flex flex-col items-center justify-center relative mb-md min-h-75">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/40 rounded-full animate-spin-slow"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-secondary/40 rounded-full animate-reverse-spin"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="material-symbols-outlined text-[100px] text-primary/60 drop-shadow-[0_0_15px_rgba(138,235,255,0.4)]">
                    account_circle
                  </span>
                  <div className="mt-md px-md py-xs bg-surface-container-highest/80 backdrop-blur border border-primary/30 rounded font-label-caps text-[10px] text-primary tracking-[0.2em] animate-blink">
                    SCANNING_FACIAL_METADATA...
                  </div>
                </div>
                {/* <!-- Technical Callouts --> */}
                <div className="absolute top-10 right-4 flex flex-col items-end gap-1 opacity-60">
                  <span className="font-code-sm text-[8px] text-primary">
                    LAT: 44.3N
                  </span>
                  <div className="w-12 h-px bg-primary/30"></div>
                </div>
                <div className="absolute bottom-10 left-4 flex flex-col items-start gap-1 opacity-60">
                  <span className="font-code-sm text-[8px] text-secondary">
                    FRM: 60FPS
                  </span>
                  <div className="w-12 h-px bg-secondary/30"></div>
                </div>
                {/* <!-- HUD Corners --> */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/50"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/50"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/50"></div>
              </div>
              <div className="grid grid-cols-2 gap-sm">
                <div className="bg-surface-container-lowest/50 p-xs border border-outline-variant/20 rounded">
                  <div className="font-label-caps text-[8px] text-on-surface-variant">
                    HEART_RATE
                  </div>
                  <div className="font-code-sm text-xs text-primary">
                    72 BPM
                  </div>
                </div>
                <div className="bg-surface-container-lowest/50 p-xs border border-outline-variant/20 rounded">
                  <div className="font-label-caps text-[8px] text-on-surface-variant">
                    SYNAPSE_CAP
                  </div>
                  <div className="font-code-sm text-xs text-secondary">
                    94.2%
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Terminal Logs --> */}
            <div className="glass-surface p-md rounded-xl border border-outline-variant/20 neon-border bg-surface-container-lowest/30 transition-transform duration-200 ease-out">
              <div className="flex items-center justify-between mb-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary animate-pulse text-[18px]">
                    terminal
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface">
                    SYSTEM_LOGS
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
              </div>
              <div className="space-y-1 font-code-sm text-[11px] text-on-surface-variant/70 max-h-30 overflow-hidden">
                {logs.map((log, index) => (
                  <p
                    key={index}
                    className={
                      log.includes("STABLE")
                        ? "text-primary"
                        : log.includes("handshake")
                          ? "text-tertiary"
                          : log.includes("input")
                            ? "animate-blink"
                            : index === 0 && logs.length > 5
                              ? "text-primary/60"
                              : ""
                    }
                  >
                    {log}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- Right Column: Forge Identity Interface --> */}
          <div className="lg:col-span-8">
            <div className="glass-surface rounded-xl shadow-2xl relative overflow-hidden border border-outline-variant/30 flex flex-col h-full neon-border transition-transform duration-200 ease-out">
              <div className="h-12 bg-surface-container-high flex items-center px-md border-b border-outline-variant/30 justify-between">
                <div className="flex items-center gap-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-error"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-tertiary"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  </div>
                  <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider ml-sm">
                    CHARACTER_FORGE.EXE
                  </span>
                </div>
                <span className="font-code-sm text-[10px] text-primary/60">
                  SESSION_ACTIVE: 00:04:12
                </span>
              </div>
              <div className="p-10 grow">
                {/* <!-- Header Section --> */}
                <div className="text-center md:text-left mb-10">
                  <h1 className="font-headline-xl text-headline-xl leading-tight tracking-tighter">
                    <span className="font-extrabold text-on-background">
                      FORGE
                    </span>
                    <span className="font-thin italic text-primary text-glow mx-2">
                      YOUR
                    </span>
                    <span className="font-extrabold text-on-background relative">
                      IDENTITY
                      <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary/30"></span>
                    </span>
                  </h1>
                </div>
                <form className="">
                  {/* <!-- Identity Inputs --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="space-y-xs">
                      <label className="font-label-caps text-[10px] text-on-surface-variant/80 ml-xs flex justify-between">
                        <span>SYSTEM_ID</span>
                        <span className="text-primary/40 animate-blink">
                          VALIDATING...
                        </span>
                      </label>
                      <div className="relative group">
                        <input
                          className="w-full bg-surface-container-lowest/30 border border-outline-variant/30 rounded-lg py-md pl-md pr-10 text-on-surface placeholder:text-on-surface-variant/20 focus:outline-none transition-all duration-300 font-code-sm focus:ring-0 focus:border-primary/50 focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                          placeholder="e.g. dev_maverick"
                          type="text"
                          onFocus={(e) =>
                            e.target.parentElement.classList.add(
                              "neon-glow-active",
                            )
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove(
                              "neon-glow-active",
                            )
                          }
                        />
                        <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-primary/30 text-[18px] group-focus-within:text-primary animate-pulse">
                          data_exploration
                        </span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                    <div className="space-y-xs">
                      <label className="font-label-caps text-[10px] text-on-surface-variant/80 ml-xs flex justify-between">
                        <span>COMM_UPLINK</span>
                        <span className="text-tertiary/40">STANDBY</span>
                      </label>
                      <div className="relative group">
                        <input
                          className="w-full bg-surface-container-lowest/30 border border-outline-variant/30 rounded-lg py-md pl-md pr-10 text-on-surface placeholder:text-on-surface-variant/20 focus:outline-none transition-all duration-300 font-code-sm focus:ring-0 focus:border-primary/50 focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                          placeholder="e.g. m@devtoon.ai"
                          type="email"
                          onFocus={(e) =>
                            e.target.parentElement.classList.add(
                              "neon-glow-active",
                            )
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove(
                              "neon-glow-active",
                            )
                          }
                        />
                        <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-primary/30 text-[18px] group-focus-within:text-primary">
                          alternate_email
                        </span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Password --> */}
                  <div className="space-y-xs">
                    <label className="font-label-caps text-[10px] text-on-surface-variant/80 ml-xs">
                      NEURAL_PASSKEY
                    </label>
                    <div className="relative group">
                      <input
                        className="w-full bg-surface-container-lowest/30 border border-outline-variant/30 rounded-lg py-md pl-md pr-12 text-on-surface placeholder:text-on-surface-variant/20 focus:outline-none transition-all duration-300 font-code-sm focus:ring-0 focus:border-secondary/50 focus:bg-secondary/5 focus:shadow-[0_0_15px_rgba(221,183,255,0.2)]"
                        placeholder="••••••••••••"
                        type="password"
                        onFocus={(e) =>
                          e.target.parentElement.classList.add(
                            "neon-glow-active",
                          )
                        }
                        onBlur={(e) =>
                          e.target.parentElement.classList.remove(
                            "neon-glow-active",
                          )
                        }
                      />
                      <button
                        className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-secondary transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          visibility
                        </span>
                      </button>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-focus-within:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                  {/* <!-- Policy --> */}
                  <div className="flex items-start gap-sm p-sm bg-surface-container/30 rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-colors duration-300">
                    <input
                      className="mt-1 rounded-sm bg-surface-container border-outline-variant text-primary focus:ring-primary focus:ring-offset-background"
                      id="terms"
                      type="checkbox"
                    />
                    <label
                      className="font-body-md text-code-sm text-on-surface-variant"
                      htmlFor="terms"
                    >
                      I confirm the
                      <a
                        className="text-primary hover:underline font-bold mx-1"
                        href="#"
                      >
                        Neural Processing Policy
                      </a>
                      and grant read-access to my public Git metadata for
                      character synthesis.
                    </label>
                  </div>
                  {/* <!-- HIGH STAKES CTA --> */}
                  <button className="w-full group relative overflow-hidden h-18 rounded-lg bg-surface-container-highest border-2 border-primary/40 hover:border-primary transition-all duration-500">
                    {/* <!-- Button Background Effects --> */}
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(138,235,255,0.1),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <div className="relative z-10 flex items-center justify-center gap-md">
                      <span className="font-label-caps text-label-caps font-black tracking-[0.4em] text-primary group-hover:text-glow transition-all">
                        INITIALIZE IDENTITY PROTOCOL
                      </span>
                      <div className="flex items-center gap-xs">
                        <span className="material-symbols-outlined text-primary text-[24px] group-hover:rotate-12 transition-transform">
                          bolt
                        </span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
                      </div>
                    </div>
                  </button>
                </form>
                <div className="text-center pt-md border-t border-outline-variant/20">
                  <p className="font-body-md text-code-sm text-on-surface-variant">
                    Identity already synthesized?
                    <a
                      className="text-secondary font-bold hover:text-glow hover:underline ml-xs transition-all"
                      href="#"
                    >
                      ACCESS PORTAL
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegistrationPage;
