"use client";

import { forwardRef } from "react";

export const Pages = forwardRef((props, ref) => {
  // Determine if the page is a left or right page based on the page number
  const isLeftPage = props.number % 2 === 0;

  return (
    <div className="page shadow-lg" ref={ref}>
      {/* book background (light cream/white) */}
      <div className="h-full w-full bg-[#FDFBF7] text-slate-900 flex flex-col relative overflow-hidden">
        {/* book spine shadow */}
        <div
          className={`absolute top-0 bottom-0 w-12 pointer-events-none ${
            isLeftPage
              ? "right-0 bg-linear-to-l from-black/20 to-transparent"
              : "left-0 bg-linear-to-r from-black/20 to-transparent"
          }`}
        ></div>

        {/* Content Container */}
        <div className="h-full w-full p-8 md:p-10 flex flex-col z-10">
          {/* Header */}
          <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-300 pb-3 font-serif tracking-wide uppercase">
            {props.header || `Page header - ${props.number}`}
          </h2>

          {/* Body */}
          <div className="grow text-lg md:text-xl leading-relaxed flex items-center justify-center font-serif text-slate-800 text-center px-4">
            {props.children}
          </div>

          {/* Footer (Page Number) */}
          <div className="text-center text-sm font-bold text-slate-500 font-serif border-t border-slate-300 pt-3">
            - {props.number} -
          </div>
        </div>
      </div>
    </div>
  );
});

Pages.displayName = "Pages";
export default Pages;
