
import { useState, useEffect } from 'react';

export function GovernanceSecurity() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/system/governance')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Governance & Security...</div>;

  return (
    <div className="p-6 min-h-screen space-y-6 bg-surface">
      {/* Header & Breadcrumbs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">
            <span className="hover:text-primary cursor-pointer transition-colors">Security Center</span>
            <span className="mx-2">/</span>
            <span className="text-primary-container">Governance Panel</span>
          </nav>
          <h2 className="text-2xl font-black tracking-tighter text-sky-900">Governance & Security Control</h2>
        </div>
        <div className="flex gap-2">
          <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-sm">security_update_good</span>
            VERIFY ALL NODE INTEGRITY
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Left Column: Circuit Breaker & Anomaly Detection */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 space-y-6">
          {/* API Circuit Breaker Panel */}
          <section className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border-t border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">electric_bolt</span>
                API Circuit Breaker
              </h3>
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-[9px] font-bold shadow-sm">OPERATIONAL</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/10">
                <p className="text-[9px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Gateway A</p>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-black text-sky-900 tracking-tighter">0.02ms</span>
                  <button className="text-[10px] font-bold text-error border border-error/20 px-2 py-1 rounded hover:bg-error hover:text-white transition-all bg-error/5">TRIP</button>
                </div>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/10">
                <p className="text-[9px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Gateway B</p>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-black text-sky-900 tracking-tighter">0.05ms</span>
                  <button className="text-[10px] font-bold text-primary border border-primary/20 px-2 py-1 rounded bg-primary-fixed/30 opacity-50 cursor-not-allowed">RESET</button>
                </div>
              </div>
            </div>
          </section>

          {/* Anomaly Detection Settings */}
          <section className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border-t border-primary/20">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-sm text-primary">visibility</span>
              Anomaly Detection
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] mb-2">
                  <span className="font-bold tracking-widest opacity-70">SENSITIVITY THRESHOLD</span>
                  <span className="font-black text-primary text-xs">84%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[84%] rounded-full shadow-sm"></div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                <label className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg cursor-pointer hover:bg-primary/5 transition-colors border border-outline-variant/5">
                  <span className="text-[11px] font-medium text-on-surface">Automatic Quarantining</span>
                  <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary w-4 h-4" />
                </label>
                <label className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg cursor-pointer hover:bg-primary/5 transition-colors border border-outline-variant/5">
                  <span className="text-[11px] font-medium text-on-surface">Strict Payload Validation</span>
                  <input type="checkbox" className="rounded text-primary focus:ring-primary w-4 h-4" />
                </label>
              </div>
            </div>
          </section>

          {/* Database Self-Heal Dashboard */}
          <section className="bg-primary-container p-5 rounded-xl text-white relative overflow-hidden group shadow-lg">
            <div className="relative z-10">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary-fixed mb-4 opacity-80">DB Self-Heal Status</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border-4 border-secondary flex items-center justify-center bg-secondary/10 shadow-inner">
                  <span className="text-xs font-black text-secondary-fixed">99.8%</span>
                </div>
                <div>
                  <p className="text-xl font-bold leading-tight tracking-tight">Health Cluster</p>
                  <p className="text-[10px] opacity-70 font-medium tracking-wide">Last heal sequence: 4m ago</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/5">
                <div className="flex justify-between text-[10px] font-bold mb-2">
                  <span className="tracking-widest opacity-80">REPLICATION DELAY</span>
                  <span className="text-secondary-fixed">0.1s</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold">
                  <span className="tracking-widest opacity-80">INDEX FRAGMENTATION</span>
                  <span className="text-secondary-fixed">2.4%</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          </section>
        </div>

        {/* Right Column: Feature Toggle Board */}
        <div className="col-span-1 md:col-span-12 lg:col-span-8 space-y-6">
          {/* Feature Toggle & Permission Grid */}
          <section className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col h-[640px] border border-outline-variant/10 overflow-hidden">

            <div className="p-5 border-b border-surface-container-high flex flex-col sm:flex-row justify-between sm:items-center bg-white gap-4">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Feature Activation Matrix</h3>
                <p className="text-[10px] text-slate-400 mt-0.5">Toggling modules IDs 181-240 and 316-350</p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-low rounded-full text-[10px] font-bold text-slate-600 border border-outline-variant/5">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> ADMIN
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-low rounded-full text-[10px] font-bold text-slate-600 border border-outline-variant/5">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span> MOD
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-low rounded-full text-[10px] font-bold text-slate-600 border border-outline-variant/5">
                  <span className="w-2 h-2 bg-slate-300 rounded-full"></span> VIEW
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead className="bg-slate-50 sticky top-0 z-10 shadow-sm border-b border-outline-variant/10">
                  <tr>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">ID</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Feature Module Name</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">State</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Admin</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Staff</th>
                    <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Audit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">

                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-6 py-3 text-[11px] font-bold text-primary tracking-widest">#181</td>
                    <td className="px-6 py-3 text-xs font-semibold text-sky-900 tracking-tight">X-Region Proxy Handler</td>
                    <td className="px-6 py-3">
                      <div className="w-8 h-4 bg-primary/20 rounded-full relative cursor-pointer border border-primary/10">
                        <div className="absolute right-1 top-1 w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-6 py-3 text-[11px] font-bold text-primary tracking-widest">#182</td>
                    <td className="px-6 py-3 text-xs font-semibold text-sky-900 tracking-tight">Quantum Encrypt Node</td>
                    <td className="px-6 py-3">
                      <div className="w-8 h-4 bg-slate-200 rounded-full relative cursor-pointer border border-outline-variant/10">
                        <div className="absolute left-1 top-1 w-2 h-2 bg-slate-400 rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-6 py-3 text-[11px] font-bold text-primary tracking-widest">#183</td>
                    <td className="px-6 py-3 text-xs font-semibold text-sky-900 tracking-tight">Bilateral Ledger Sync</td>
                    <td className="px-6 py-3">
                      <div className="w-8 h-4 bg-primary/20 rounded-full relative cursor-pointer border border-primary/10">
                        <div className="absolute right-1 top-1 w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                  </tr>

                  {/* Section Divider */}
                  <tr className="bg-surface-container-low/40">
                    <td colSpan={6} className="px-6 py-2 text-[9px] font-bold text-slate-400 text-center tracking-[0.4em] uppercase border-y border-outline-variant/10">
                      SEC-IDS RANGE 316 - 350
                    </td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-6 py-3 text-[11px] font-bold text-primary tracking-widest">#316</td>
                    <td className="px-6 py-3 text-xs font-semibold text-sky-900 tracking-tight">Neural Traffic Filter</td>
                    <td className="px-6 py-3">
                      <div className="w-8 h-4 bg-primary/20 rounded-full relative cursor-pointer border border-primary/10">
                        <div className="absolute right-1 top-1 w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-6 py-3 text-[11px] font-bold text-primary tracking-widest">#318</td>
                    <td className="px-6 py-3 text-xs font-semibold text-sky-900 tracking-tight">Ghost-Route Mitigation</td>
                    <td className="px-6 py-3">
                       <div className="w-8 h-4 bg-slate-200 rounded-full relative cursor-pointer border border-outline-variant/10">
                        <div className="absolute left-1 top-1 w-2 h-2 bg-slate-400 rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                  </tr>

                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-6 py-3 text-[11px] font-bold text-primary tracking-widest">#319</td>
                    <td className="px-6 py-3 text-xs font-semibold text-sky-900 tracking-tight">API Throttler (Global)</td>
                    <td className="px-6 py-3">
                       <div className="w-8 h-4 bg-primary/20 rounded-full relative cursor-pointer border border-primary/10">
                        <div className="absolute right-1 top-1 w-2 h-2 bg-primary rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                    <td className="px-6 py-3 text-center"><input type="checkbox" defaultChecked className="rounded-sm border-slate-300 text-primary focus:ring-primary w-4 h-4" /></td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Matrix Footer */}
            <div className="p-4 bg-slate-50 flex flex-col sm:flex-row justify-between sm:items-center text-[10px] font-bold text-slate-500 border-t border-outline-variant/10 gap-4">
              <span className="tracking-widest uppercase">SHOWING 367 ACTIVE FEATURE IDS</span>
              <div className="flex gap-6">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-primary/40 rounded-full border border-primary/20"></span> 248 ENABLED</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-slate-300 rounded-full border border-slate-400/20"></span> 119 DISABLED</span>
              </div>
            </div>
          </section>

          {/* Master Audit Trail Viewer */}
          <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="p-5 border-b border-surface-container-high flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Master Audit Trail</h3>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-error-container text-on-error-container rounded text-[9px] font-black tracking-tight shadow-sm">3 CRITICAL ALERTS</span>
                  <span className="px-2 py-0.5 bg-surface-container-high text-slate-600 rounded text-[9px] font-black tracking-tight shadow-sm border border-outline-variant/10">124 LOGS/SEC</span>
                </div>
              </div>
              <div className="flex gap-2">
                <select className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg text-[10px] font-bold py-1.5 px-3 focus:ring-2 focus:ring-primary/20 outline-none text-slate-600 cursor-pointer shadow-sm">
                  <option>ALL EVENTS</option>
                  <option>AUTH FAILURE</option>
                  <option>DATA MUTATION</option>
                  <option>CIRCUIT TRIP</option>
                </select>
                <button className="bg-white text-sky-900 border border-outline-variant/20 text-[10px] font-black px-4 py-1.5 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">EXPORT CSV</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-6 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-wider">Actor ID</th>
                    <th className="px-6 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-wider">Operation</th>
                    <th className="px-6 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-wider">Target Object</th>
                    <th className="px-6 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-wider">IP Hash</th>
                    <th className="px-6 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-wider">Integrity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high/50">
                {data.auditLogs.map((log: any, i: number) => (
                  <tr key={i} className={`transition-colors ${log.status === 'warning' ? 'bg-error-container/10 hover:bg-error-container/20' : 'hover:bg-slate-50'}`}>
                    <td className={`px-6 py-3 font-mono text-[10px] ${log.status === 'warning' ? 'text-error' : 'text-slate-500'} tracking-tight`}>{log.time}</td>
                    <td className={`px-6 py-3 text-xs font-bold ${log.status === 'warning' ? 'text-error' : 'text-sky-900'}`}>{log.actor}</td>
                    <td className="px-6 py-3"><span className={`text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest shadow-sm border border-outline-variant/10 ${log.status === 'warning' ? 'bg-error text-white' : 'bg-surface-container-high text-slate-600'}`}>{log.op}</span></td>
                    <td className={`px-6 py-3 text-[11px] font-medium ${log.status === 'warning' ? 'text-error font-bold' : 'text-slate-600'}`}>{log.target}</td>
                    <td className="px-6 py-3 font-mono text-[10px] text-slate-400 tracking-tight">{Math.random().toString(36).substring(2,10)}</td>
                    <td className="px-6 py-3"><span className={`material-symbols-outlined text-sm ${log.status === 'warning' ? 'text-error' : 'text-secondary'}`} style={{ fontVariationSettings: "'FILL' 1" }}>{log.status === 'warning' ? 'report' : 'verified'}</span></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 flex justify-center border-t border-surface-container-high bg-slate-50/50">
              <button className="text-[10px] font-black text-primary hover:text-sky-700 hover:underline transition-colors tracking-widest uppercase">
                LOAD PREVIOUS RECENT HISTORY (500 ENTRIES)
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
