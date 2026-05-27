"use client";

import { useEffect, useRef, useState } from "react";

const RegLeftside = () => {
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
            <div className="font-code-sm text-xs text-primary">72 BPM</div>
          </div>
          <div className="bg-surface-container-lowest/50 p-xs border border-outline-variant/20 rounded">
            <div className="font-label-caps text-[8px] text-on-surface-variant">
              SYNAPSE_CAP
            </div>
            <div className="font-code-sm text-xs text-secondary">94.2%</div>
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
        <div
          ref={logContainerRef}
          className="space-y-1 font-code-sm text-[11px] text-on-surface-variant/70 max-h-30 overflow-hidden"
        >
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
  );
};

export default RegLeftside;
