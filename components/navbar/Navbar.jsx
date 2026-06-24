"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { BiUser } from "react-icons/bi";
import Image from "next/image";

const Navbar = () => {
  const { data: session, status } = useSession();

  const name = session?.user?.name || "User";

  return (
    <header className="bg-surface/30 backdrop-blur-xl border-b border-white/10 docked full-width fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-sm h-20">
      <div className="flex items-center gap-md">
        <Link
          href="/"
          className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter"
        >
          DevToon
        </Link>
        <nav className="hidden md:flex gap-md ml-lg"></nav>
      </div>

      <div className="flex items-center gap-sm md:gap-md">
        {status === "authenticated" ? (
          <>
            <Link
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="/dev"
            >
              Dashboard
            </Link>
            {/* 🔴 এখানে ইউজারের নাম এবং ছবি/আইকন যুক্ত করা হয়েছে 🔴 */}
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
              <span className="hidden md:block text-sm font-medium text-slate-200">
                {name}
              </span>
            </div>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="hidden md:block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 hover:bg-primary/10 px-md py-xs rounded-lg active:scale-95"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="hidden md:block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 hover:bg-primary/10 px-md py-xs rounded-lg active:scale-95"
            href="/login"
          >
            Login
          </Link>
        )}

        {status !== "authenticated" && (
          <Link
            className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-lg py-xs rounded-lg font-bold hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 active:scale-95 text-[12px] tracking-[0.1em]"
            href="/register"
          >
            Sign Up
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
