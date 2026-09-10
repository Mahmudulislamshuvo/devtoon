"use client";

import { useEffect } from "react";
import { MdClose, MdHistory } from "react-icons/md";

/**
 * StoriesDrawer — Left-side slide-in drawer for Recent Stories
 * শুধু mobile/tablet-এ দেখাবে (lg: screen-এ RightSide সরাসরি দেখায়)
 *
 * Props:
 *  - isOpen: boolean
 *  - onClose: () => void
 *  - children: RightSide content
 */
const StoriesDrawer = ({ isOpen, onClose, children }) => {
  // Drawer খোলা থাকলে body scroll বন্ধ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel — বাম থেকে আসবে */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-[85vw] max-w-sm z-[70] bg-surface border-r border-white/10 overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Recent Stories"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 sticky top-0 bg-surface z-10">
          <div className="flex items-center gap-2">
            <MdHistory className="text-primary text-xl" />
            <h2 className="font-headline-lg text-on-surface text-lg font-semibold">
              Recent Stories
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Recent Stories"
            className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
          >
            <MdClose className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">{children}</div>
      </aside>
    </>
  );
};

export default StoriesDrawer;
