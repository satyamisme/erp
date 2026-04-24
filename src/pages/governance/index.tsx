import { useState, useEffect } from 'react';
import { fetchWithAuth } from '../../lib/api';

export function FeatureGovernance() {
  const [data, setData] = useState<any>(null); // eslint-disable-line

  useEffect(() => {
    fetchWithAuth('http://localhost:5000/api/system/governance')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  const toggleFeature = async (id: number, enabled: boolean) => {
    try {
      const res = await fetchWithAuth(`http://localhost:5000/api/system/feature/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled })
      });
      if (res.ok) {
        setData((prev: any) => ({ /* eslint-disable-line */
          ...prev,
          featureMatrix: prev.featureMatrix.map((f: any) => f.featureId === id ? { ...f, enabled } : f) /* eslint-disable-line */
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Governance Matrix...</div>;

  const enabledCount = data.featureMatrix.filter((f: any) => f.enabled).length; /* eslint-disable-line */
  const disabledCount = data.featureMatrix.length - enabledCount;

  return (
    <div className="p-6 min-h-screen bg-surface-container-low space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <nav className="flex text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">
            <span className="hover:text-primary cursor-pointer">Security Center</span>
            <span className="mx-2">/</span>
            <span className="text-primary-container">Governance Panel</span>
          </nav>
          <h2 className="text-2xl font-black tracking-tighter text-sky-900">Governance & Security Control</h2>
        </div>
        <div className="flex gap-2">
          <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-2 shadow-lg hover:scale-105 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-sm">security_update_good</span>
            VERIFY ALL NODE INTEGRITY
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <section className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">electric_bolt</span> API Circuit Breaker
              </h3>
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-[9px] font-bold">OPERATIONAL</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-container-low p-3 rounded">
                <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Gateway A</p>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-black text-sky-900">0.02ms</span>
                  <button className="text-[10px] font-bold text-error border border-error/20 px-2 py-1 rounded hover:bg-error hover:text-white transition-all">TRIP</button>
                </div>
              </div>
              <div className="bg-surface-container-low p-3 rounded">
                <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">Gateway B</p>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-black text-sky-900">0.05ms</span>
                  <button className="text-[10px] font-bold text-primary border border-primary/20 px-2 py-1 rounded bg-primary-fixed/30 cursor-not-allowed">RESET</button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-sm text-primary">visibility</span> Anomaly Detection
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] mb-2">
                  <span className="font-bold">SENSITIVITY THRESHOLD</span>
                  <span className="font-black text-primary">84%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[84%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-2 bg-surface-container-low rounded cursor-pointer hover:bg-primary/5 transition-colors">
                  <span className="text-[11px] font-medium">Automatic Quarantining</span>
                  <input defaultChecked className="rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                </label>
                <label className="flex items-center justify-between p-2 bg-surface-container-low rounded cursor-pointer hover:bg-primary/5 transition-colors">
                  <span className="text-[11px] font-medium">Strict Payload Validation</span>
                  <input className="rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                </label>
              </div>
            </div>
          </section>
        </div>

        <div className="col-span-12 lg:col-span-8 space-y-6">
          <section className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col h-[640px] border border-outline-variant/10">
            <div className="p-5 border-b border-surface-container-high flex justify-between items-center bg-white rounded-t-xl">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Feature Activation Matrix</h3>
                <p className="text-[10px] text-slate-400">Toggling modules IDs 1-367</p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 px-3 py-1 bg-surface-container-low rounded text-[10px] font-bold text-slate-600">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> ADMIN
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-auto custom-scrollbar">
              <table className="w-full text-left border-collapse relative">
                <thead className="sticky top-0 bg-white shadow-sm z-10">
                  <tr>
                    <th className="px-6 py-3 text-[11px] font-black text-slate-400 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-[11px] font-black text-slate-400 uppercase tracking-wider">Feature Module Name</th>
                    <th className="px-6 py-3 text-[11px] font-black text-slate-400 uppercase tracking-wider">State</th>
                    <th className="px-6 py-3 text-[11px] font-black text-slate-400 uppercase tracking-wider text-center">SA</th>
                    <th className="px-6 py-3 text-[11px] font-black text-slate-400 uppercase tracking-wider text-center">MGR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  {data.featureMatrix.slice(0, 100).map((feat: any) => /* eslint-disable-line */ (
                    <tr key={feat.featureId} className="hover:bg-surface-container-low/50 transition-colors group">
                      <td className="px-6 py-2 text-[11px] font-bold text-primary">#{feat.featureId}</td>
                      <td className="px-6 py-2 text-xs font-semibold text-sky-900">{feat.name}</td>
                      <td className="px-6 py-2">
                        <div
                          onClick={() => toggleFeature(feat.featureId, !feat.enabled)}
                          className={`w-8 h-4 rounded-full relative cursor-pointer ${feat.enabled ? 'bg-primary/20' : 'bg-slate-200'}`}>
                          <div className={`absolute top-1 w-2 h-2 rounded-full transition-all ${feat.enabled ? 'right-1 bg-primary' : 'left-1 bg-slate-400'}`}></div>
                        </div>
                      </td>
                      <td className="px-6 py-2 text-center"><input checked={feat.roles?.SA} readOnly className="rounded-sm border-slate-300 text-primary" type="checkbox" /></td>
                      <td className="px-6 py-2 text-center"><input checked={feat.roles?.MGR} readOnly className="rounded-sm border-slate-300 text-primary" type="checkbox" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-surface-container-low/50 flex justify-between items-center text-[10px] font-bold text-slate-500 rounded-b-xl border-t border-surface-container-high">
              <span>SHOWING {data.featureMatrix.length} ACTIVE FEATURE IDS (top 100 shown)</span>
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-primary/40 rounded-full"></span> {enabledCount} ENABLED</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-slate-300 rounded-full"></span> {disabledCount} DISABLED</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-200/20">
        <div className="p-5 border-b border-surface-container-high flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Master Audit Trail</h3>
            <div className="flex gap-1">
              <span className="px-2 py-0.5 bg-error-container text-on-error-container rounded text-[9px] font-black tracking-tight">3 CRITICAL ALERTS</span>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-2 text-[10px] font-black text-slate-400 uppercase">Timestamp</th>
                <th className="px-6 py-2 text-[10px] font-black text-slate-400 uppercase">Actor ID</th>
                <th className="px-6 py-2 text-[10px] font-black text-slate-400 uppercase">Operation</th>
                <th className="px-6 py-2 text-[10px] font-black text-slate-400 uppercase">Target Object</th>
                <th className="px-6 py-2 text-[10px] font-black text-slate-400 uppercase">Integrity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {data.auditLogs.map((log: any, i: number) => /* eslint-disable-line */ (
                <tr key={i} className={log.status === 'warning' ? 'bg-error-container/5' : ''}>
                  <td className={`px-6 py-3 font-mono text-[10px] ${log.status === 'warning' ? 'text-error' : 'text-slate-500'}`}>{log.time}</td>
                  <td className={`px-6 py-3 text-xs font-bold ${log.status === 'warning' ? 'text-error' : 'text-sky-900'}`}>{log.actor}</td>
                  <td className="px-6 py-3"><span className={`text-[10px] font-black px-2 py-0.5 rounded ${log.status === 'warning' ? 'bg-error text-white' : 'bg-surface-container text-on-surface'}`}>{log.op}</span></td>
                  <td className="px-6 py-3 text-[11px] font-medium text-slate-600">{log.target}</td>
                  <td className="px-6 py-3">
                    <span className={`material-symbols-outlined text-sm ${log.status === 'warning' ? 'text-error' : 'text-secondary'}`}>{log.status === 'warning' ? 'report' : 'verified'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
