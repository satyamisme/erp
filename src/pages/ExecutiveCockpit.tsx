
export function ExecutiveCockpit() {
  return (
    <div className="p-8 space-y-8">
      {/* Header & Direct Command Triggers */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-on-surface">Executive Cockpit</h2>
          <p className="text-on-surface-variant text-sm">System Health: <span className="text-secondary font-semibold">OPTIMAL</span> • 12 active nodes</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:bg-primary hover:text-on-primary transition-all duration-200 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">shopping_cart_checkout</span>
            Bulk Reorder
          </button>
          <button className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:bg-primary hover:text-on-primary transition-all duration-200 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
            Cash Sweep
          </button>
          <button className="bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-primary flex items-center gap-2 hover:bg-primary-container transition-all duration-200 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">query_stats</span>
            Run Forecast
          </button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Column: Gauges & Revenue */}
        <div className="col-span-1 lg:col-span-4 space-y-6">
          {/* Monthly Target Gauge */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">track_changes</span>
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-6 w-full text-left">Monthly Revenue Target</h3>

            <div className="relative h-48 w-48 mb-4">
              <svg className="h-full w-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-surface-container-high"></circle>
                <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="502.4" strokeDashoffset="71.3" strokeLinecap="round" className="text-primary"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-primary">85.8%</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">$1.2M / $1.4M</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-secondary font-bold flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +2.4% vs Previous Period
              </p>
            </div>
          </div>

          {/* Global Revenue Gauges */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-4">Revenue Distribution</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">store</span>
                  </div>
                  <span className="text-sm font-semibold">Retail</span>
                </div>
                <span className="text-sm font-bold">$428.5k</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: '65%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">build</span>
                  </div>
                  <span className="text-sm font-semibold">Repair</span>
                </div>
                <span className="text-sm font-bold">$212.1k</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary h-full" style={{ width: '40%' }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-tertiary-container/20 text-tertiary rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">hub</span>
                  </div>
                  <span className="text-sm font-semibold">Wholesale</span>
                </div>
                <span className="text-sm font-bold">$582.4k</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Center/Right Column: Critical Matrix & SLA */}
        <div className="col-span-1 lg:col-span-8 space-y-6">

          {/* Inventory Critical Matrix Table */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
            <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low/50">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">Inventory Critical Matrix</h3>
              <button className="text-xs font-bold text-primary hover:underline">View All Units</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/20 border-y border-outline-variant/10">
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">SKU Model</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Status</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant text-right">Global Total</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Hub Distribution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">LX-9000 Terminal</span>
                        <span className="text-[10px] text-slate-500">Hardware / POS</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase rounded-sm">Optimal</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-mono font-bold">1,420</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        <div className="h-2 w-8 bg-primary rounded-full"></div>
                        <div className="h-2 w-4 bg-primary/40 rounded-full"></div>
                        <div className="h-2 w-6 bg-primary/60 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">RTX-3080 Core</span>
                        <span className="text-[10px] text-slate-500">Processing / Module</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-error-container text-on-error-container text-[10px] font-black uppercase rounded-sm">Critical</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-mono font-bold">14</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 bg-error rounded-full"></div>
                        <div className="h-2 w-1 bg-surface-container-high rounded-full"></div>
                        <div className="h-2 w-1 bg-surface-container-high rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">Bio-Scanner v2</span>
                        <span className="text-[10px] text-slate-500">Security / Peripheral</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-tertiary-container/30 text-on-tertiary-fixed-variant text-[10px] font-black uppercase rounded-sm">Low Stock</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-mono font-bold">182</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        <div className="h-2 w-4 bg-tertiary rounded-full"></div>
                        <div className="h-2 w-4 bg-tertiary/40 rounded-full"></div>
                        <div className="h-2 w-2 bg-tertiary/60 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Lower Section: SLA Risk & Security Watchtower */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* SLA Risk Cards */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant px-1">Repair SLA Risk Alerts</h3>

              <div className="bg-error/5 border-l-4 border-error p-4 rounded-r-xl shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-black text-error">CRITICAL BREACH</span>
                  <span className="text-[10px] font-bold text-on-surface-variant">Ticket #REP-902</span>
                </div>
                <p className="text-sm font-bold">Mainframe Cooling Unit Repair</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-error">
                    <span className="material-symbols-outlined text-[14px]">alarm</span>
                    OVERDUE BY 4H 12M
                  </div>
                  <button className="text-[10px] font-black uppercase text-primary hover:underline">Reassign</button>
                </div>
              </div>

              <div className="bg-tertiary/5 border-l-4 border-tertiary p-4 rounded-r-xl shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-black text-tertiary">IMMINENT RISK</span>
                  <span className="text-[10px] font-bold text-on-surface-variant">Ticket #REP-110</span>
                </div>
                <p className="text-sm font-bold">Branch 04 POS Diagnostic</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-tertiary">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    ENDS IN 18M
                  </div>
                  <button className="text-[10px] font-black uppercase text-primary hover:underline">Escalate</button>
                </div>
              </div>
            </div>

            {/* Security Watchtower */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant px-1">Security Watchtower</h3>
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 divide-y divide-surface-container-high">

                <div className="py-3 first:pt-0">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-error/10 text-error rounded-full">
                      <span className="material-symbols-outlined text-[18px]">no_encryption</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Unauthorized Drawer Access</p>
                      <p className="text-[10px] text-on-surface-variant">Terminal 092 • Admin Override Bypassed</p>
                      <p className="text-[10px] text-error font-bold mt-1">2m ago</p>
                    </div>
                  </div>
                </div>

                <div className="py-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-tertiary/10 text-tertiary rounded-full">
                      <span className="material-symbols-outlined text-[18px]">emergency_home</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Unusual Volume Spikes</p>
                      <p className="text-[10px] text-on-surface-variant">Branch 14 • 400% above 7-day mean</p>
                      <p className="text-[10px] text-on-surface-variant font-bold mt-1">15m ago</p>
                    </div>
                  </div>
                </div>

                <div className="py-3 last:pb-0">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-secondary/10 text-secondary rounded-full">
                      <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">New Admin Credentials</p>
                      <p className="text-[10px] text-on-surface-variant">Generated for 'Tech_Lead_North'</p>
                      <p className="text-[10px] text-on-surface-variant font-bold mt-1">1h ago</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
