const Footer = () => {
  return (
    <footer className="w-full py-lg mt-xl bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-7xl mx-auto gap-base">
        <div className="flex flex-col gap-xs text-center md:text-left">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
            DevToon AI
          </span>
          <p className="font-code-sm text-code-sm text-on-surface-variant/70">
            © 2024 DevToon AI. Built for the future of Git.
          </p>
        </div>
        <div className="flex gap-lg items-center">
          <a
            className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer"
            href="#"
          >
            Documentation
          </a>
          <a
            className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
