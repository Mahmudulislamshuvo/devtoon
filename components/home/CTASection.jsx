const CTASection = () => {
  return (
    <div className="max-w-7xl mx-auto px-margin-desktop py-xl">
      <div className="glass-surface rounded-xl p-lg md:p-[80px] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
        <div className="relative z-10 space-y-md">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            Ready to tell your story?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Join 5,000+ developers who have already turned their GitHub profiles
            into legendary portfolios.
          </p>
          <div className="pt-sm">
            <button className="bg-primary-container text-on-primary-container px-xl py-md font-label-caps text-label-caps rounded-xl hover:shadow-[0_0_30px_#22d3ee] active:scale-95 duration-200 transition-all inline-flex items-center gap-sm">
              <span className="material-symbols-outlined" data-icon="login">
                login
              </span>
              Connect GitHub Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
