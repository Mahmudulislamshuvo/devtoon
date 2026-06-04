"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.target);

      const email = formData.get("email");
      const password = formData.get("password");

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("Login response:", response);

      if (response?.error) {
        setErrorMessage("Invalid email or password");
        return;
      }

      if (response?.ok) {
        router.push("/dev");
      }
    } catch (error) {
      setErrorMessage(error.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5 shrink-0 flex flex-col">
      <div className="space-y-2 shrink-0 flex flex-col">
        <label className="text-[11px] font-bold text-slate-400 tracking-widest uppercase px-1 shrink-0">
          Email Address
        </label>
        <input
          className="w-full h-12 bg-[#1e293b]/50 border border-slate-700/50 rounded-lg px-4 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono text-sm placeholder:text-slate-600 shrink-0"
          placeholder="architect@devtoon.ai"
          type="email"
          name="email"
        />
      </div>
      <div className="space-y-2 shrink-0 flex flex-col">
        <div className="flex justify-between items-center px-1 shrink-0">
          <label className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            Password
          </label>
        </div>
        <input
          onChange={() => setErrorMessage("")}
          name="password"
          className="w-full h-12 bg-[#1e293b]/50 border border-slate-700/50 rounded-lg px-4 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono text-sm placeholder:text-slate-600 shrink-0"
          placeholder="••••••••••••"
          type="password"
        />
      </div>
      {errorMessage && (
        <div className="rounded-lg text-red-400 text-sm font-medium text-left">
          {errorMessage}
        </div>
      )}
      <button
        className={`relative w-full h-12 font-bold rounded-lg transition-all duration-300 uppercase tracking-widest text-xs mt-4 active:scale-[0.98] shrink-0 overflow-hidden ${
          loading
            ? "text-cyan-400 cursor-not-allowed"
            : "border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400"
        }`}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <>
            {/* ঘুরন্ত লাইটিং ইফেক্ট (Spinning Gradient) */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#06b6d4_100%)]" />

            {/* ভেতরের ডার্ক ব্যাকগ্রাউন্ড (যাতে মাঝখানের লাইট ঢেকে গিয়ে শুধু বর্ডার দেখা যায়) */}
            <div className="absolute inset-[1.5px] rounded-lg bg-[#0b1121] flex items-center justify-center">
              Authenticating...
            </div>
          </>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
