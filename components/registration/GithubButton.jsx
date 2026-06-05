"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const GithubButton = ({ buttonText }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGithubLogin = async () => {
    setLoading(true);

    try {
      const response = await signIn("github", {
        redirect: false,
        callbackUrl: "/dev",
      });
      if (response?.error) {
        console.error("GitHub login failed:", response.error);
      } else {
        router.push(response?.url || "/dev");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGithubLogin}
      disabled={loading}
      className={`w-full relative overflow-hidden h-14 rounded-lg transition-all duration-300 ${
        loading
          ? "cursor-not-allowed"
          : "group bg-surface-container-highest border border-outline-variant/40 hover:border-[#6e5494]/70"
      }`}
    >
      {loading ? (
        <>
          <div className="absolute left-1/2 top-1/2 aspect-square w-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#c9b6e4_100%)]" />

          <div className="absolute inset-[1.5px] rounded-lg bg-surface-container-highest flex items-center justify-center gap-sm z-10">
            <FaGithub className="text-[20px] text-[#c9b6e4] animate-pulse" />
            <span className="font-label-caps text-[11px] tracking-[0.25em] text-[#c9b6e4]">
              AUTHENTICATING...
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[#6e5494]/0 group-hover:bg-[#6e5494]/10 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(110,84,148,0.15),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

          <div className="relative z-10 flex items-center justify-center gap-sm">
            <FaGithub className="text-[20px] text-on-surface-variant group-hover:text-[#c9b6e4] transition-colors duration-300" />
            <span className="font-label-caps text-[11px] tracking-[0.25em] text-on-surface-variant group-hover:text-[#c9b6e4] transition-colors duration-300">
              {buttonText}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#6e5494]/60 group-hover:bg-[#c9b6e4] animate-pulse transition-colors duration-300"></div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#6e5494]/0 group-hover:border-[#6e5494]/60 transition-all duration-300"></div>
          <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#6e5494]/0 group-hover:border-[#6e5494]/60 transition-all duration-300"></div>
        </>
      )}
    </button>
  );
};

export default GithubButton;
