
export function SecureLogin() {
  return (
    <div className="bg-surface min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden relative selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Background Decoration: Precision Asymmetry */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-fixed/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-fixed/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 flex items-center gap-4 opacity-20 pointer-events-none">
        <div className="w-px h-12 bg-outline"></div>
        <div className="text-[10px] font-mono text-outline tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Grid_Coord: 44.129.01</div>
      </div>

      {/* Main Content Canvas */}
      <main className="w-full max-w-[480px] z-10 flex flex-col gap-8 relative">

        {/* Branding Anchor */}
        <header className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center shadow-[0px_12px_32px_rgba(0,30,46,0.08)]">
            <span className="material-symbols-outlined text-on-primary-container text-4xl">terminal</span>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-black tracking-tighter text-primary uppercase">Lakki Terminal</h1>
            <p className="text-[11px] font-semibold tracking-[0.1em] text-outline uppercase mt-1">Precision Cockpit • Auth Layer</p>
          </div>
        </header>

        {/* Login Card */}
        <section className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl shadow-[0px_12px_32px_rgba(0,30,46,0.08)] border-t border-primary-fixed/30 flex flex-col gap-8 border border-outline-variant/20">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-on-surface tracking-tight">Operator Authentication</h2>
            <p className="text-sm text-on-surface-variant">Initialize secure session via Terminal OS protocol.</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

            {/* Input Group: Operator ID */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-outline uppercase tracking-wider pl-1">Operator ID / Email</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">person</span>
                <input
                  type="text"
                  placeholder="LKT-7728-EX"
                  className="w-full bg-surface-container-low hover:bg-surface-container-high focus:bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary/40 rounded-xl py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all outline-none text-sm"
                />
              </div>
            </div>

            {/* Input Group: Access Key */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] font-bold text-outline uppercase tracking-wider">Access Key</label>
                <a href="#" className="text-[10px] font-bold text-primary-container hover:text-primary transition-colors tracking-wider">LOST KEY?</a>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">key</span>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full bg-surface-container-low hover:bg-surface-container-high focus:bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary/40 rounded-xl py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all outline-none text-sm font-mono tracking-widest"
                />
              </div>
            </div>

            {/* 2FA Prompt */}
            <div className="bg-surface-container-low/50 p-4 rounded-lg flex items-start gap-4 border-l-2 border-primary-container mt-2">
              <span className="material-symbols-outlined text-primary-container mt-0.5">shield_person</span>
              <div>
                <p className="text-xs font-bold text-on-surface mb-0.5">MFA Required</p>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">System policy mandates hardware token or mobile authenticator for this clearance level.</p>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-b from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2 group mt-2 hover:opacity-90"
            >
              <span className="tracking-widest text-sm">INITIALIZE COCKPIT</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>
        </section>

        {/* Feature Compliance Bar */}
        <div className="flex items-center justify-between px-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="text-[9px] font-bold text-on-surface tracking-tighter uppercase">FEAT_188: BIO_PASS</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="text-[9px] font-bold text-on-surface tracking-tighter uppercase">FEAT_303: E2E_ENC</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-outline">settings_ethernet</span>
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">UP-LINK: OK</span>
          </div>
        </div>

      </main>

      {/* Footer: System Metadata */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end pointer-events-none z-0">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="text-[10px] font-mono text-outline/60 leading-none">
              BRANCH: <span className="text-primary-container font-bold">STABLE/04-VULCAN</span>
            </div>
            <div className="h-px w-8 bg-outline-variant/30"></div>
            <div className="text-[10px] font-mono text-outline/60 leading-none">
              REV: <span className="text-on-surface font-bold">882.04.11</span>
            </div>
          </div>
          <div className="text-[9px] text-outline/40 uppercase tracking-[0.2em] font-medium">Lakki Security Systems © 2024 Terminal OS</div>
        </div>
        <div className="flex flex-col items-end gap-2 hidden sm:flex">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full border border-outline-variant/10 shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-[10px] font-black text-on-surface tracking-tight">K8S CLUSTER SECURE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
