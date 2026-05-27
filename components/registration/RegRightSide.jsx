"use client";

import Link from "next/link";
import {
  MdAlternateEmail,
  MdBolt,
  MdDataExploration,
  MdVisibility,
} from "react-icons/md";

const RegRightSide = () => {
  return (
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
              Registration
            </span>
          </div>
          {/* <span className="font-code-sm text-[10px] text-primary/60">
            SESSION_ACTIVE: 00:04:12
          </span> */}
        </div>
        <div className="p-10 grow">
          {/* <!-- Header Section --> */}
          <div className="text-center md:text-left mb-10">
            <h1 className="font-headline-xl text-headline-xl leading-tight tracking-tighter">
              <span className="font-extrabold text-on-background">CREATE</span>
              <span className="font-thin italic text-primary text-glow mx-2">
                YOUR
              </span>
              <span className="font-extrabold text-on-background relative">
                ACCOUNT
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary/30"></span>
              </span>
            </h1>
          </div>
          <form className="space-y-sm">
            {/* <!-- Email Input (Full Width) --> */}
            <div className="space-y-xs">
              <label className="font-label-caps text-[10px] text-on-surface-variant/80 ml-xs flex justify-between">
                <span>EMAIL</span>
              </label>
              <div className="relative group">
                <input
                  className="w-full bg-surface-container-lowest/30 border border-on-surface rounded-lg py-md pl-md pr-10 text-on-surface placeholder:text-primary/50 focus:outline-none transition-all duration-300 font-code-sm focus:ring-0 focus:border-primary/50 focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  placeholder="e.g. m@devtoon.ai"
                  type="email"
                  onFocus={(e) =>
                    e.target.parentElement.classList.add("neon-glow-active")
                  }
                  onBlur={(e) =>
                    e.target.parentElement.classList.remove("neon-glow-active")
                  }
                />
                <MdAlternateEmail className="absolute right-md top-1/2 -translate-y-1/2 text-primary/30 text-[18px] group-focus-within:text-primary" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* <!-- Identity Inputs (Half Width) --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label className="font-label-caps text-[10px] text-on-surface-variant/80 ml-xs flex justify-between">
                  <span>PASSWORD</span>
                  <span className="text-primary/40 animate-blink">
                    VALIDATING...
                  </span>
                </label>
                <div className="relative group">
                  <input
                    className="w-full bg-surface-container-lowest/30 border border-on-surface rounded-lg py-md pl-md pr-10 text-on-surface placeholder:text-primary/50 focus:outline-none transition-all duration-300 font-code-sm focus:ring-0 focus:border-primary/50 focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    placeholder="12345678@Abc"
                    type="password"
                    onFocus={(e) =>
                      e.target.parentElement.classList.add("neon-glow-active")
                    }
                    onBlur={(e) =>
                      e.target.parentElement.classList.remove(
                        "neon-glow-active",
                      )
                    }
                  />
                  <MdDataExploration className="absolute right-md top-1/2 -translate-y-1/2 text-primary/30 text-[18px] group-focus-within:text-primary animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="space-y-xs">
                <label className="font-label-caps text-[10px] text-on-surface-variant/80 ml-xs">
                  CONFIRM PASSWORD
                </label>
                <div className="relative group">
                  <input
                    className="w-full bg-surface-container-lowest/30 border border-on-surface rounded-lg py-md pl-md pr-12 text-on-surface placeholder:text-primary/50 focus:outline-none transition-all duration-300 font-code-sm focus:ring-0 focus:border-secondary/50 focus:bg-secondary/5 focus:shadow-[0_0_15px_rgba(221,183,255,0.2)]"
                    placeholder="••••••••••••"
                    type="password"
                    onFocus={(e) =>
                      e.target.parentElement.classList.add("neon-glow-active")
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
                    <MdVisibility className="text-[18px]" />
                  </button>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-focus-within:w-full transition-all duration-500"></div>
                </div>
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
                and grant read-access to my public Git metadata for character
                synthesis.
              </label>
            </div>
            {/* <!-- HIGH STAKES CTA --> */}
            <button className="w-full group relative overflow-hidden h-18 rounded-lg bg-surface-container-highest border-2 border-primary/40 hover:border-primary transition-all duration-500">
              {/* <!-- Button Background Effects --> */}
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(138,235,255,0.1),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <div className="relative z-10 flex items-center justify-center gap-md">
                <span className="font-label-caps text-label-caps font-black tracking-[0.4em] text-primary group-hover:text-glow transition-all">
                  SUBMIT
                </span>
                <div className="flex items-center gap-xs">
                  <MdBolt className="text-primary text-[24px] group-hover:rotate-12 transition-transform" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
                </div>
              </div>
            </button>
          </form>
          <div className="text-center pt-md border-t border-outline-variant/20">
            <p className="font-body-md text-code-sm text-on-surface-variant">
              Already have an account?
              <Link
                className="text-secondary font-bold hover:text-glow hover:underline ml-xs transition-all"
                href="#"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegRightSide;
