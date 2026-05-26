const Navbar = () => {
  return (
    <header className="bg-surface/30 backdrop-blur-xl border-b border-white/10 docked full-width fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-sm h-20">
      <div className="flex items-center gap-md">
        <span className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">
          DevToon
        </span>
        <nav className="hidden md:flex gap-md ml-lg">
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Gallery
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Storyline
          </a>
          <a
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            Roadmap
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-sm">
        <button className="hidden md:block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 hover:bg-primary/10 px-md py-xs rounded-lg active:scale-95">
          Login
        </button>
        <button className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-lg py-xs rounded-lg font-bold hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 active:scale-95 text-[12px] tracking-[0.1em]">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
