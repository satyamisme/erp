
export function SystemHealth() {
  return (
    <div className="p-8 min-h-full bg-surface-container-low">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-primary">System Health Dashboard</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(27,109,36,0.8)] animate-pulse"></span>
            <p className="text-[11px] uppercase tracking-wider font-bold text-secondary">Audit Integrity: Synchronized</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-surface-container-lowest px-4 py-2 rounded-xl shadow-sm border border-outline-variant/10 hidden sm:flex">
            <span className="material-symbols-outlined text-outline mr-2 text-sm">terminal</span>
            <span className="text-xs font-mono text-on-surface-variant uppercase tracking-tighter font-semibold">OS_RUNTIME: 1422:12:04</span>
          </div>
          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-95 tracking-wide">
            New Transaction
          </button>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Cluster Health Matrix & Read Replica Status */}
        <section className="col-span-1 lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">hub</span>
                Cluster Health Matrix
              </h3>
              {/* ID 342: Read-Replica Routing */}
              <div className="flex items-center gap-2 bg-secondary/5 px-3 py-1.5 rounded-full border border-secondary/20 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-[14px]">alt_route</span>
                <span className="text-[9px] font-bold uppercase text-secondary tracking-wider">Read-Replica Routing: Active (R1, R2)</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-outline font-semibold">AUTO_REFRESH: 5s</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Node Alpha */}
            <div className="p-5 rounded-xl bg-surface-container-low border-l-4 border-secondary shadow-sm">
              <div className="flex justify-between items-start mb-5">
                <span className="text-sm font-bold text-primary">Node-Alpha</span>
                <span className="text-[9px] px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded font-bold uppercase tracking-widest">Optimal</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant mb-1.5 tracking-wider">
                    <span>CPU Load</span>
                    <span className="text-sky-900 font-black">24%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: '24%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant mb-1.5 tracking-wider">
                    <span>Memory</span>
                    <span className="text-sky-900 font-black">5.2GB</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="pt-3 border-t border-outline-variant/10 flex justify-between items-center mt-2">
                  <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Latency</span>
                  <span className="text-xs font-mono font-bold text-on-surface">12ms</span>
                </div>
              </div>
            </div>

            {/* Node Beta */}
            <div className="p-5 rounded-xl bg-surface-container-low border-l-4 border-secondary shadow-sm">
              <div className="flex justify-between items-start mb-5">
                <span className="text-sm font-bold text-primary">Node-Beta</span>
                <span className="text-[9px] px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded font-bold uppercase tracking-widest">Optimal</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant mb-1.5 tracking-wider">
                    <span>CPU Load</span>
                    <span className="text-sky-900 font-black">31%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: '31%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant mb-1.5 tracking-wider">
                    <span>Memory</span>
                    <span className="text-sky-900 font-black">4.8GB</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="pt-3 border-t border-outline-variant/10 flex justify-between items-center mt-2">
                  <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Latency</span>
                  <span className="text-xs font-mono font-bold text-on-surface">14ms</span>
                </div>
              </div>
            </div>

            {/* Node Gamma */}
            <div className="p-5 rounded-xl bg-surface-container-low border-l-4 border-tertiary shadow-sm">
              <div className="flex justify-between items-start mb-5">
                <span className="text-sm font-bold text-primary">Node-Gamma</span>
                <span className="text-[9px] px-2 py-0.5 bg-tertiary-container text-on-tertiary-container rounded font-bold uppercase tracking-widest">Elevated</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant mb-1.5 tracking-wider">
                    <span>CPU Load</span>
                    <span className="text-sky-900 font-black">72%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full rounded-full transition-all duration-500" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant mb-1.5 tracking-wider">
                    <span>Memory</span>
                    <span className="text-sky-900 font-black">7.1GB</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="pt-3 border-t border-outline-variant/10 flex justify-between items-center mt-2">
                  <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Latency</span>
                  <span className="text-xs font-mono font-bold text-on-surface">45ms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ID 340: Database Self-Heal Engine */}
        <section className="col-span-1 lg:col-span-4 bg-[#001e2e] text-white rounded-xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#002b41] to-primary opacity-50 z-0"></div>

          <div className="relative z-10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest opacity-80 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary-fixed">healing</span>
              DB Self-Heal Engine
            </h3>

            <div className="flex flex-col items-center justify-center mb-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10"></circle>
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364.4" strokeDashoffset="0.7" className="text-secondary-fixed transition-all duration-1000"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-black text-white">99.8%</span>
                  <span className="text-[9px] uppercase font-bold tracking-widest opacity-70 mt-0.5">Integrity</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4 mb-6 border border-white/10 backdrop-blur-sm">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold mb-2">
                <span className="tracking-widest">Orphaned Records</span>
                <span className="text-tertiary-fixed font-black bg-tertiary-fixed/10 px-2 py-0.5 rounded">42 Detected</span>
              </div>
              <p className="text-[10px] opacity-70 leading-relaxed font-medium">System flagged non-indexed pointers in 'Sales_Archive_2023'. Automatic fix available.</p>
            </div>
          </div>

          <button className="relative z-10 w-full py-3.5 bg-secondary hover:bg-green-700 transition-colors rounded-lg font-black text-xs uppercase tracking-widest shadow-[0_4px_14px_rgba(27,109,36,0.4)] flex items-center justify-center gap-2 active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            Execute Repair
          </button>
        </section>

        {/* ID 317: PITR Restore Slider */}
        <section className="col-span-1 lg:col-span-12 bg-primary text-white rounded-xl p-6 lg:p-8 shadow-xl relative overflow-hidden border border-primary/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-fixed/10 blur-[80px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">history</span>
                Point-in-Time Recovery
              </h3>
              <p className="text-xs opacity-80 leading-relaxed font-medium">Scrub back through database state history for granular data restoration.</p>
            </div>

            <div className="flex-1 w-full space-y-5 bg-black/10 p-5 rounded-xl border border-white/5">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-mono font-bold opacity-60">T - 24 HOURS</span>
                <div className="text-center bg-black/20 px-6 py-2 rounded-lg border border-white/5">
                  <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-secondary-fixed mb-1">Target Timestamp</p>
                  <p className="text-xl font-black font-mono tracking-tighter">2023-10-24 08:14:22</p>
                </div>
                <span className="text-[10px] font-mono font-bold opacity-60">NOW (LIVE)</span>
              </div>
              <div className="px-2">
                <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="85"
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-secondary-fixed focus:outline-none"
                />
              </div>
              <div className="flex justify-between text-[9px] font-bold uppercase tracking-wider opacity-70 px-1">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">dns</span> Backup Node 3</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">fact_check</span> Snapshot Validated</span>
                <span className="flex items-center gap-1 text-secondary-fixed"><span className="material-symbols-outlined text-[10px]">verified</span> Integrity: 100%</span>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <button className="w-full md:w-48 py-4 border-2 border-secondary-fixed text-secondary-fixed hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(163,246,156,0.15)] hover:shadow-[0_0_20px_rgba(163,246,156,0.3)]">
                Initialize Restore
              </button>
            </div>
          </div>
        </section>

        {/* API Circuit Breakers */}
        <section className="col-span-1 lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">power</span>
            API Circuit Breakers
          </h3>

          <div className="space-y-4">
            {/* WhatsApp API */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/5 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">WhatsApp API</h4>
                  <p className="text-[10px] uppercase text-outline font-bold tracking-wider mt-0.5">Active Connection</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 w-full sm:w-auto">
                <div className="text-right">
                  <p className="text-sm font-mono font-black text-sky-900 tracking-tighter">88ms</p>
                  <p className="text-[9px] uppercase font-bold text-secondary tracking-widest mt-0.5">Healthy</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            </div>

            {/* KNET Gateway */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/5 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">KNET Gateway</h4>
                  <p className="text-[10px] uppercase text-outline font-bold tracking-wider mt-0.5">Regional Payment Hub</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 w-full sm:w-auto">
                <div className="text-right">
                  <p className="text-sm font-mono font-black text-sky-900 tracking-tighter">210ms</p>
                  <p className="text-[9px] uppercase font-bold text-primary tracking-widest mt-0.5">Stable</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* ID 341: Backup Status Tiering */}
        <section className="col-span-1 lg:col-span-5 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10 flex-1">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">cloud_done</span>
              Three-Tier Backup Strategy
            </h3>

            <div className="space-y-4">
              {/* Hot Storage */}
              <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-xl border border-secondary/10 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-10 rounded-full bg-secondary shadow-[0_0_8px_rgba(27,109,36,0.6)]"></div>
                  <div>
                    <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-0.5">Hot Storage</p>
                    <p className="text-xs font-bold text-on-surface">Local NVMe Cluster</p>
                    <p className="text-[9px] text-outline font-bold tracking-wider mt-0.5">Real-time sync | RPO: 0s</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono font-black text-sky-900">ACTIVE</p>
                  <p className="text-[9px] uppercase font-black text-secondary mt-0.5">Verified</p>
                </div>
              </div>

              {/* Warm Storage */}
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-10 rounded-full bg-primary shadow-[0_0_8px_rgba(0,68,97,0.4)]"></div>
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-0.5">Warm Storage</p>
                    <p className="text-xs font-bold text-on-surface">AWS S3 (Standard)</p>
                    <p className="text-[9px] text-outline font-bold tracking-wider mt-0.5">Daily diff | 04:00 AM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono font-black text-sky-900">SYNCED</p>
                  <p className="text-[9px] uppercase font-black text-secondary mt-0.5">Verified</p>
                </div>
              </div>

              {/* Cold Storage */}
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-10 rounded-full bg-slate-400"></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-0.5">Cold Storage</p>
                    <p className="text-xs font-bold text-on-surface">Glacier Deep Archive</p>
                    <p className="text-[9px] text-outline font-bold tracking-wider mt-0.5">Monthly full | Oct 01</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono font-black text-slate-500">ARCHIVED</p>
                  <p className="text-[9px] uppercase font-black text-secondary mt-0.5">Encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
