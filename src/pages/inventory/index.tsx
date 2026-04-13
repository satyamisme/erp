import { fetchWithAuth } from "../../lib/api";
import { useState, useEffect } from 'react';

export function InventoryMatrix() {
  const [data, setData] = useState<any>(null); // eslint-disable-line

  useEffect(() => {
    fetchWithAuth('http://localhost:5000/api/dashboard/inventory')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, [setData]);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Inventory Matrix...</div>;

  return (
    <div className="p-8 flex-1 bg-surface-container-low space-y-8">
      {/* Executive Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t border-primary/5 flex flex-col justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-1">Transit Assets (Global)</p>
            <h2 className="text-3xl font-black text-primary tracking-tight">{data.transitAssets}</h2>
          </div>
          <div className="mt-4 flex items-center text-secondary text-xs font-bold">
            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
            <span>+12.4% from last cycle</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t border-error/5 flex flex-col justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-1">Predictive Re-orders</p>
            <h2 className="text-3xl font-black text-error tracking-tight">{data.reorderTriggers} Triggers</h2>
          </div>
          <div className="mt-4 flex items-center text-slate-400 text-xs">
            <span className="material-symbols-outlined text-sm mr-1">schedule</span>
            <span>Next evaluation in 42m</span>
          </div>
        </div>

        <div className="col-span-2 bg-primary-container p-6 rounded-xl shadow-sm relative overflow-hidden text-white">
          <div className="relative z-10">
            <p className="text-[11px] uppercase tracking-wider text-on-primary-container font-bold mb-1">Global Stock Distribution</p>
            <div className="flex items-end gap-6 mt-2">
              <div>
                <h3 className="text-4xl font-black tracking-tighter">{data.optimizationScore}</h3>
                <p className="text-[10px] text-on-primary-container/80 uppercase">Optimization Score</p>
              </div>
              <div className="flex-1 flex items-center gap-2 pb-2">
                <div className="h-1 bg-white/20 flex-1 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-fixed w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-48 h-48 bg-primary-fixed-dim/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-headline text-xl font-bold text-primary">Inventory Matrix</h3>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-surface-container-high text-[10px] font-bold text-slate-600 rounded">HUB_WEST: ACTIVE</span>
            <span className="px-2 py-1 bg-surface-container-high text-[10px] font-bold text-slate-600 rounded">HUB_EAST: ACTIVE</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-lowest hover:bg-white text-slate-700 px-4 py-2 rounded text-xs font-bold transition-all flex items-center gap-2 border border-slate-200/50">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            FILTER REGIONS
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm">input</span>
            BATCH INTAKE BUFFER (ID 316)
          </button>
        </div>
      </div>

      {/* Main Data Matrix */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">SKU / IDENTIFIER</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">NORTH AMERICA TOTAL</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">NY HUB</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">SF HUB</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">STATUS</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">OPERATIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-high">
            {data.items.map((item: any /* eslint-disable-line */, i: number) => (
              <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">{item.sku}</span>
                    <span className="text-[10px] text-slate-400">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-700">{item.total}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full w-24">
                      <div className={`h-full ${item.status.includes('Low') ? 'bg-error' : 'bg-secondary'} rounded-full`} style={{ width: item.fill }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-medium text-slate-600">{item.ny}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`text-sm font-medium ${item.status.includes('Low') ? 'text-error font-bold' : 'text-slate-600'}`}>{item.sf}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase ${item.status.includes('Low') ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'}`}>{item.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded">
                      <span className="material-symbols-outlined text-lg">swap_horiz</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bento Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t border-primary/5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-black text-slate-700 uppercase tracking-widest">Re-order Intelligence</h4>
            <span className="material-symbols-outlined text-primary text-lg">psychology</span>
          </div>
          <div className="space-y-4">
            {data.reorderIntel.map((intel: any /* eslint-disable-line */, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-error' : 'bg-tertiary-fixed-dim'}`}></div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-700">{intel.sku} Priority Trigger</p>
                  <p className="text-[10px] text-slate-400">{intel.issue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-t border-primary/5 relative overflow-hidden h-40">
          <h4 className="text-xs font-black text-slate-700 uppercase tracking-widest mb-4">Active Transfer Map</h4>
          <div className="absolute inset-0 top-12 px-6">
            <div className="flex items-center justify-between relative">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white text-[10px] font-bold">NY</div>
                <span className="text-[9px] mt-1 font-bold">EAST</span>
              </div>
              <div className="flex-1 h-0.5 bg-dashed bg-slate-200 mx-2 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="material-symbols-outlined text-primary text-base">local_shipping</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-[10px] font-bold">SF</div>
                <span className="text-[9px] mt-1 font-bold">WEST</span>
              </div>
            </div>
            <p className="text-center text-[10px] mt-4 text-slate-400">3 Shipments in transit (Feature ID 318)</p>
          </div>
        </div>

        <div className="bg-primary-container p-6 rounded-xl shadow-sm border-t border-white/10 text-white">
          <h4 className="text-xs font-black text-on-primary-container uppercase tracking-widest mb-4">Intake Health</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-on-primary-container">Buffer Capacity</span>
              <span className="font-black">68%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full">
              <div className="w-[68%] h-full bg-secondary-fixed rounded-full"></div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded text-[10px] font-bold uppercase transition-colors">Audit 336</button>
              <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded text-[10px] font-bold uppercase transition-colors">Clear 337</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
