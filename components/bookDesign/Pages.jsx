"use client";

import { forwardRef } from "react";

export const Pages = forwardRef((props, ref) => {
  const isBang = props.lang === "bang";

  return (
    <div className="page shadow-lg" ref={ref}>
      {/* book background */}
      <div
        className={`h-full w-full flex flex-col relative overflow-hidden ${
          isBang ? "bg-[#FDF6E3]" : "bg-[#FDFBF7]"
        } text-slate-900`}
      >
        {/* spine shadow — বাংলা পেজ বাম দিকে থাকে, shadow ডানে */}
        <div
          className={`absolute top-0 bottom-0 w-12 pointer-events-none ${
            isBang
              ? "right-0 bg-linear-to-l from-black/20 to-transparent"
              : "left-0 bg-linear-to-r from-black/20 to-transparent"
          }`}
        ></div>

        {/* Content Container */}
        <div className="h-full w-full p-8 md:p-10 flex flex-col z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3 mb-4">
            <h2
              className={`text-base font-bold text-slate-800 font-serif tracking-wide uppercase ${
                isBang ? "text-right w-full" : ""
              }`}
            >
              {props.header}
            </h2>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded ml-2 shrink-0 ${
                isBang
                  ? "bg-amber-100 text-amber-700 border border-amber-300"
                  : "bg-cyan-50 text-cyan-700 border border-cyan-200"
              }`}
            >
              {isBang ? "বাংলা" : "ENG"}
            </span>
          </div>

          {/* Body */}
          <div
            className={`grow text-base md:text-lg leading-relaxed flex items-center justify-center font-serif text-slate-800 text-center px-4 ${
              isBang ? "tracking-wide" : ""
            }`}
          >
            {props.children}
          </div>

          {/* Footer */}
          <div className="text-center text-sm font-bold text-slate-500 font-serif border-t border-slate-300 pt-3">
            {isBang ? "◄" : "►"}
          </div>
        </div>
      </div>
    </div>
  );
});

Pages.displayName = "Pages";
export default Pages;
