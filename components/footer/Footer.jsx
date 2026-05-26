const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-lg mt-xl relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-md px-margin-mobile md:px-margin-desktop w-full">
        <div className="flex flex-col items-center md:items-start gap-xs">
          <span className="font-label-caps text-label-caps font-bold text-on-surface-variant">
            DevToon AI
          </span>
          <span className="font-code-sm text-[11px] text-on-surface-variant/40 uppercase tracking-widest">
            Protocol v4.0.1 // Node: Alpha-7
          </span>
        </div>
        <div className="flex gap-md">
          <a
            className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Security
          </a>
          <a
            className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            API Status
          </a>
          <a
            className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Privacy
          </a>
          <a
            className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
