"use client";

import { forwardRef } from "react";

export const PageCover = forwardRef((props, ref) => {
  return (
    <div className="page shadow-2xl" ref={ref} data-density="hard">
      {/* book background (dark blue/navy) */}
      <div className="h-full w-full bg-slate-900 border-2 border-slate-800 flex flex-col justify-center items-center relative overflow-hidden">
        {/* book binding line */}
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-black/40 border-r border-white/10"></div>

        <div className="z-10 p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 drop-shadow-md tracking-wider">
            {props.children}
          </h2>
        </div>
      </div>
    </div>
  );
});

PageCover.displayName = "PageCover";
export default PageCover;
