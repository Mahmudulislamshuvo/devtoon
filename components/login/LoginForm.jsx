"use client";

import { signIn } from "next-auth/react";

const LoginForm = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(response);
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
          name="password"
          className="w-full h-12 bg-[#1e293b]/50 border border-slate-700/50 rounded-lg px-4 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all font-mono text-sm placeholder:text-slate-600 shrink-0"
          placeholder="••••••••••••"
          type="password"
        />
      </div>
      <button
        className="w-full h-12 border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 font-bold rounded-lg transition-all duration-300 uppercase tracking-widest text-xs mt-4 active:scale-[0.98] shrink-0"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
