"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { BiUser } from "react-icons/bi";
import { MdMenu, MdClose, MdDashboard, MdLogout, MdLogin, MdPersonAdd, MdArchive } from "react-icons/md";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const name = session?.user?.name || "User";

  // Sheet খোলা থাকলে body scroll বন্ধ করব
  useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSheetOpen]);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <>
      <header className="bg-surface/30 backdrop-blur-xl border-b border-white/10 docked full-width fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-sm h-20">
        {/* Logo */}
        <div className="flex items-center gap-md">
          <Link
            href="/"
            className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter"
          >
            DevToon
          </Link>
          <nav className="hidden md:flex gap-md ml-lg"></nav>
        </div>

        {/* ── Desktop Right Side ── */}
        <div className="hidden md:flex items-center gap-md">
          {status === "authenticated" ? (
            <>
              <Link
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="/dev"
              >
                Dashboard
              </Link>

              <Link
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="/dev/archive"
              >
                Archive
              </Link>

              <div className="flex items-center gap-2 mr-2">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-surface/50 border border-white/20 flex items-center justify-center shrink-0">
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      width={32}
                      height={32}
                    />
                  ) : (
                    <BiUser className="text-lg text-on-surface-variant" />
                  )}
                </div>
                <span className="text-sm font-medium text-slate-200">{name}</span>
              </div>

              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 hover:bg-primary/10 px-md py-xs rounded-lg active:scale-95"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 hover:bg-primary/10 px-md py-xs rounded-lg active:scale-95"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-lg py-xs rounded-lg font-bold transition-all duration-300 active:scale-95 text-[12px] tracking-widest"
                href="/register"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* ── Mobile Right Side ── Avatar + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {status === "authenticated" && (
            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface/50 border border-white/20 flex items-center justify-center shrink-0">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  width={32}
                  height={32}
                />
              ) : (
                <BiUser className="text-lg text-on-surface-variant" />
              )}
            </div>
          )}

          <button
            onClick={() => setIsSheetOpen(true)}
            aria-label="Open menu"
            className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
          >
            <MdMenu className="text-2xl" />
          </button>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          MOBILE FULL-WIDTH BOTTOM SHEET
      ════════════════════════════════════════════ */}

      {/* Backdrop */}
      <div
        onClick={closeSheet}
        className={`md:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isSheetOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sheet Panel */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[70] bg-surface border-t border-white/10 rounded-t-2xl transition-transform duration-300 ease-out ${
          isSheetOpen ? "translate-y-0" : "translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Close button */}
        <button
          onClick={closeSheet}
          aria-label="Close menu"
          className="absolute top-3 right-4 p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors"
        >
          <MdClose className="text-xl" />
        </button>

        {/* User info strip (only when authenticated) */}
        {status === "authenticated" && (
          <div className="flex items-center gap-3 px-6 pt-3 pb-5 border-b border-white/10">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface/50 border border-white/20 flex items-center justify-center shrink-0">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  width={48}
                  height={48}
                />
              ) : (
                <BiUser className="text-2xl text-on-surface-variant" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-on-surface font-semibold text-sm truncate">{name}</p>
              {session?.user?.email && (
                <p className="text-on-surface-variant text-xs truncate font-code-sm">
                  {session.user.email}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Menu Items */}
        <nav className="px-4 py-4 space-y-2">
          {status === "authenticated" ? (
            <>
              <Link
                href="/dev"
                onClick={closeSheet}
                className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-200 font-label-caps text-label-caps"
              >
                <MdDashboard className="text-xl shrink-0" />
                Dashboard
              </Link>

              <Link
                href="/dev/archive"
                onClick={closeSheet}
                className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-200 font-label-caps text-label-caps"
              >
                <MdArchive className="text-xl shrink-0" />
                Story Archive
              </Link>

              <button
                onClick={() => {
                  closeSheet();
                  signOut({ callbackUrl: "/login" });
                }}
                className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-on-surface-variant hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 font-label-caps text-label-caps"
              >
                <MdLogout className="text-xl shrink-0" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={closeSheet}
                className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-200 font-label-caps text-label-caps"
              >
                <MdLogin className="text-xl shrink-0" />
                Login
              </Link>

              <Link
                href="/register"
                onClick={closeSheet}
                className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-label-caps text-label-caps transition-all duration-200 active:scale-95"
              >
                <MdPersonAdd className="text-xl shrink-0" />
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Safe area for phones with home indicator */}
        <div className="h-6" />
      </div>
    </>
  );
};

export default Navbar;

