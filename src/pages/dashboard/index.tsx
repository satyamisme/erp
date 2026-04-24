import { fetchWithAuth } from "../../lib/api";
import { useState, useEffect } from 'react';

export function Dashboard() {
  const [data, setData] = useState<any>(null); // eslint-disable-line

  useEffect(() => {
    fetchWithAuth('http://localhost:5000/api/dashboard/executive')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Executive Cockpit...</div>;

  return (
    <div className="p-8 space-y-8">
      {/* Header & Direct Command Triggers */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-on-surface">Executive Cockpit</h2>
          <p className="text-on-surface-variant text-sm">System Health: <span className="text-secondary font-semibold">{data.systemHealth}</span> • {data.activeNodes} active nodes</p>
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
                <span className="text-4xl font-black text-primary">{data.monthlyTarget.percentage}%</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">${data.monthlyTarget.current}M / ${data.monthlyTarget.target}M</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-secondary font-bold flex items-center justify-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> +12.4% vs Previous Period</p>
            </div>
          </div>

          {/* Global Revenue Gauges */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-4">Revenue Distribution</h3>
            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">store</span>
                  </div>
                  <span className="text-sm font-semibold">Retail</span>
                </div>
                <span className="text-sm font-bold">{data.revenueDistribution.retail.amount}</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: data.revenueDistribution.retail.percentage }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 text-secondary rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">build</span>
                  </div>
                  <span className="text-sm font-semibold">Repair</span>
                </div>
                <span className="text-sm font-bold">{data.revenueDistribution.repair.amount}</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary h-full" style={{ width: data.revenueDistribution.repair.percentage }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-tertiary-container/20 text-tertiary rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">hub</span>
                  </div>
                  <span className="text-sm font-semibold">Wholesale</span>
                </div>
                <span className="text-sm font-bold">{data.revenueDistribution.wholesale.amount}</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full" style={{ width: data.revenueDistribution.wholesale.percentage }}></div>
              </div>

            </div>
          </div>
        </div>

        {/* Center Column: Critical Matrix & SLA */}
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
                  {data.inventoryMatrix.map((item: any /* eslint-disable-line */ , i: number) => (
                    <tr key={i} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold">{item.model}</span>
                          <span className="text-[10px] text-slate-500">{item.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-[10px] font-black uppercase rounded-sm ${item.status === 'Critical' ? 'bg-error-container text-on-error-container' : item.status === 'Low Stock' ? 'bg-tertiary-container/30 text-on-tertiary-fixed-variant' : 'bg-secondary-container text-on-secondary-container'}`}>{item.status}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-sm font-mono font-bold">{item.total}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1">
                          <div className={`h-2 ${item.status === 'Critical' ? 'w-2 bg-error' : item.status === 'Low Stock' ? 'w-4 bg-tertiary' : 'w-8 bg-primary'} rounded-full`}></div>
                          <div className={`h-2 ${item.status === 'Critical' ? 'w-1 bg-surface-container-high' : item.status === 'Low Stock' ? 'w-4 bg-tertiary/40' : 'w-4 bg-primary/40'} rounded-full`}></div>
                          <div className={`h-2 ${item.status === 'Critical' ? 'w-1 bg-surface-container-high' : item.status === 'Low Stock' ? 'w-2 bg-tertiary/60' : 'w-6 bg-primary/60'} rounded-full`}></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lower Section: SLA Risk & Security Watchtower */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* SLA Risk Cards */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant px-1">Repair SLA Risk Alerts</h3>

              {data.slaAlerts.map((alert: any /* eslint-disable-line */, i: number) => (
                <div key={i} className={`${alert.type === 'CRITICAL BREACH' ? 'bg-error/5 border-error' : 'bg-tertiary/5 border-tertiary'} border-l-4 p-4 rounded-r-xl shadow-sm`}>
                  <div className="flex justify-between mb-2">
                    <span className={`text-xs font-black ${alert.type === 'CRITICAL BREACH' ? 'text-error' : 'text-tertiary'}`}>{alert.type}</span>
                    <span className="text-[10px] font-bold text-on-surface-variant">Ticket #{alert.id}</span>
                  </div>
                  <p className="text-sm font-bold">{alert.title}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className={`flex items-center gap-1 text-[10px] font-bold ${alert.type === 'CRITICAL BREACH' ? 'text-error' : 'text-tertiary'}`}>
                      <span className="material-symbols-outlined text-[14px]">{alert.type === 'CRITICAL BREACH' ? 'alarm' : 'warning'}</span>
                      {alert.time}
                    </div>
                    <button className="text-[10px] font-black uppercase text-primary hover:underline">{alert.type === 'CRITICAL BREACH' ? 'Reassign' : 'Escalate'}</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Watchtower */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface-variant px-1">Security Watchtower</h3>
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 divide-y divide-surface-container-high">
                {data.securityAlerts.map((alert: any /* eslint-disable-line */, i: number) => (
                  <div key={i} className={`py-3 ${i === 0 ? 'first:pt-0' : ''} ${i === data.securityAlerts.length - 1 ? 'last:pb-0' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${alert.type === 'Unauthorized Drawer Access' ? 'bg-error/10 text-error' : alert.type === 'Unusual Volume Spikes' ? 'bg-tertiary/10 text-tertiary' : 'bg-secondary/10 text-secondary'}`}>
                        <span className="material-symbols-outlined text-[18px]">{alert.type === 'Unauthorized Drawer Access' ? 'no_encryption' : alert.type === 'Unusual Volume Spikes' ? 'emergency_home' : 'admin_panel_settings'}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface">{alert.type}</p>
                        <p className="text-[10px] text-on-surface-variant">{alert.terminal}</p>
                        <p className={`text-[10px] font-bold mt-1 ${alert.type === 'Unauthorized Drawer Access' ? 'text-error' : 'text-on-surface-variant'}`}>{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
