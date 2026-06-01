"use client";

import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import PageCover from "./PageCover";
import Pages from "./Pages";

const BookFlip = () => {
  const bookRef = useRef(null);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const nextButtonClick = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onPage = (e) => setPage(e.data);

  const onInit = () => {
    if (bookRef.current) {
      setTotalPage(bookRef.current.pageFlip().getPageCount());
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 w-full relative z-10">
      <HTMLFlipBook
        width={450}
        height={600}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        onInit={onInit}
        className="demo-book drop-shadow-2xl"
        ref={bookRef}
      >
        {/* কভার পেজ */}
        <PageCover>
          DEVTOON
          <span className="text-sm text-slate-400 font-normal mt-4 block">
            The AI Commit Story
          </span>
        </PageCover>

        {/* ভেতরের পাতাগুলো (এখন <Pages> ট্যাগ ব্যবহার করা হয়েছে) */}
        <Pages number={1}>
          "The mainframe gates were breached! Our hero quickly patched the
          firewall, locking the intruders out."
        </Pages>
        <Pages number={2}>
          "Memory fragments unified. The global state matrix is now perfectly
          balanced and stable."
        </Pages>
        <Pages number={3}>
          "A new UI element emerged from the void, glowing with neon cyan
          aesthetics."
        </Pages>
        <Pages number={4}>
          "The database schema was rewritten, optimizing queries at lightspeed."
        </Pages>
        <Pages number={5}>
          "The database schema was rewritten, optimizing queries at lightspeed."
        </Pages>
        <Pages number={6}>
          "The database schema was rewritten, optimizing queries at lightspeed."
        </Pages>

        {/* শেষের কভার */}
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>

      {/* Controller Buttons */}
      <div className="flex items-center justify-between gap-6 mt-12 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
        <button
          onClick={prevButtonClick}
          className="text-primary hover:text-cyan-300 font-label-caps px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
        >
          ← Previous
        </button>
        <div className="text-on-surface-variant font-code-sm font-semibold tracking-wider">
          <span className="text-primary">{page}</span> /{" "}
          <span>{totalPage}</span>
        </div>
        <button
          onClick={nextButtonClick}
          className="text-primary hover:text-cyan-300 font-label-caps px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default BookFlip;
