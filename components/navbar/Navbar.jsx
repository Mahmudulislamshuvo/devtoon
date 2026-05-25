const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/5 dark:bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(47,217,244,0.1)]">
      <nav className="flex justify-between items-center h-16 px-gutter max-w-7xl mx-auto">
        <div className="flex items-center gap-base">
          <span className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">
            DevToon
          </span>
        </div>
        <div className="hidden md:flex gap-lg items-center">
          <a
            className="font-body-md text-body-md text-primary border-b-2 border-primary pb-1"
            href="#"
          >
            Explore
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Dashboard
          </a>
        </div>
        <button className="bg-primary-container text-on-primary-container px-sm py-xs font-label-caps text-label-caps rounded-lg hover:bg-white/10 hover:shadow-[0_0_10px_#22d3ee] active:scale-95 duration-200 transition-all uppercase tracking-widest hover:text-primary cursor-pointer">
          GitHub Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
