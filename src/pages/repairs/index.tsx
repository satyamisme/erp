import { fetchWithAuth } from "../../lib/api";
import { useState, useEffect } from 'react';

export function RepairsHub() {
  const [data, setData] = useState<any /* eslint-disable-line */>(null);

  useEffect(() => {
    fetchWithAuth('http://localhost:5000/api/repair/tickets')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Repair Hub...</div>;

  return (
    <div className="p-6 min-h-screen bg-surface-container-low">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="font-headline text-2xl font-black text-primary tracking-tight">Repair Dashboard</h2>
          <p className="text-sm text-slate-500">Managing <span className="font-bold text-secondary">{data.activeItems} active bench items</span> across 12 technicians</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-high text-primary px-4 py-2 rounded font-bold text-sm hover:bg-surface-container-highest transition-colors">Export Logs</button>
          <button className="bg-primary text-white px-6 py-2 rounded font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90">
            <span className="material-symbols-outlined text-sm">add</span> New Intake
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Intake Mapper</h3>
            <span className="text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded font-bold">ID: {data.intakeMapper.id}</span>
          </div>
          <div className="relative flex justify-center py-8 bg-surface-container-low rounded-lg mb-4">
            <svg className="text-slate-300" height="240" viewBox="0 0 120 240" width="120">
              <rect fill="none" height="230" rx="15" stroke="currentColor" strokeWidth="3" width="110" x="5" y="5"></rect>
              <rect fill="none" height="220" rx="10" stroke="currentColor" strokeDasharray="4" strokeWidth="1" width="100" x="10" y="10"></rect>
              <circle cx="60" cy="20" fill="currentColor" r="3"></circle>
              <circle className="animate-pulse" cx="30" cy="80" fill="#ba1a1a" r="6"></circle>
              <circle className="animate-pulse" cx="90" cy="180" fill="#ba1a1a" r="6"></circle>
            </svg>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-xs border-b border-surface-container-high pb-2">
              <span className="text-slate-500">Device</span>
              <span className="font-bold">{data.intakeMapper.device}</span>
            </div>
            <div className="flex justify-between text-xs border-b border-surface-container-high pb-2">
              <span className="text-slate-500">Symptom</span>
              <span className="font-bold">{data.intakeMapper.symptom}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Assigned To</span>
              <span className="font-bold text-primary">{data.intakeMapper.assignedTo}</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Bench Queue (Live)</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">On Track</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Delayed</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.benchQueue.map((item: any /* eslint-disable-line */, i: number) => (
              <div key={i} className={`p-4 rounded-lg bg-surface-container-low border-l-4 ${item.status === 'On Track' ? (i === 2 ? 'border-primary' : 'border-secondary') : 'border-error'}`}>
                <p className={`text-[10px] font-bold uppercase mb-1 ${item.status === 'On Track' ? (i === 2 ? 'text-primary' : 'text-secondary') : 'text-error'}`}>{item.bench}</p>
                <h4 className="text-sm font-bold truncate">{item.model}</h4>
                <p className="text-[10px] text-slate-500 mt-2">{item.time}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <img className="w-full h-32 object-cover rounded-lg opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1588508065123-287b28e0141c?auto=format&fit=crop&w=800&q=80" alt="Repair Lab" />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">20-Point QC Checklist</h3>
            <p className="text-xs font-bold text-primary">{data.checklistValid} / 20 Validated</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {['FaceID Biometrics', 'Touch Sensitivity', 'Camera Alignment', 'Wireless Charging', 'Proximity Sensor', 'Taptic Engine'].map((label, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-surface-container-high">
                <span className="material-symbols-outlined text-secondary text-lg icon-filled">check_circle</span>
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
            {['NFC / Wallet Pay', 'OLED Color Calib.'].map((label, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-surface-container-high">
                <span className="material-symbols-outlined text-slate-300 text-lg">radio_button_unchecked</span>
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 bg-primary-container p-6 rounded-xl shadow-sm text-white">
          <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6">Part Replacement Log</h3>
          <div className="space-y-4">
            {data.partLog.map((log: any /* eslint-disable-line */, i: number) => (
              <div key={i} className="bg-white/10 p-3 rounded border border-white/5">
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase opacity-80">{log.part}</span>
                  <span className="text-[10px] font-bold">SN: {log.sn}</span>
                </div>
                <p className="text-xs">{log.detail}</p>
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
              <div>
                <p className="text-[10px] opacity-60 uppercase">IMEI Tracking</p>
                <p className="text-xs font-mono">354829 10 284756 2</p>
              </div>
              <span className="material-symbols-outlined text-secondary-container">verified</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
          <div className="p-6 flex justify-between items-center border-b border-surface-container-high bg-white/50">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Repair Inventory</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-surface-container-low rounded"><span className="material-symbols-outlined text-sm">filter_list</span></button>
              <button className="p-2 hover:bg-surface-container-low rounded"><span className="material-symbols-outlined text-sm">download</span></button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-6 py-3 label-sm text-slate-500 font-bold uppercase tracking-wider">Repair ID</th>
                  <th className="px-6 py-3 label-sm text-slate-500 font-bold uppercase tracking-wider">Device Model</th>
                  <th className="px-6 py-3 label-sm text-slate-500 font-bold uppercase tracking-wider">Technician</th>
                  <th className="px-6 py-3 label-sm text-slate-500 font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 label-sm text-slate-500 font-bold uppercase tracking-wider">SLA Timer</th>
                  <th className="px-6 py-3 label-sm text-slate-500 font-bold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {data.inventory.map((item: any /* eslint-disable-line */, i: number) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 text-xs font-mono font-bold text-primary">{item.id}</td>
                    <td className="px-6 py-4">
                      <div className="text-xs font-bold">{item.model}</div>
                      <div className="text-[10px] text-slate-400">SN: {Math.floor(0.5 * 10000000000)}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-[10px] text-white">{item.tech.split(' ').map((n: string) => n[0]).join('')}</div>
                        <span className="text-xs font-medium">{item.tech}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        item.status.includes('Progress') ? 'bg-secondary-container text-on-secondary-container' :
                        item.status.includes('Pending') ? 'bg-error-container text-on-error-container' :
                        item.status.includes('QC') ? 'bg-primary-fixed text-on-primary-fixed' :
                        'bg-surface-container-high text-slate-600'
                      }`}>{item.status}</span>
                    </td>
                    <td className={`px-6 py-4 text-xs font-bold ${item.status.includes('Pending') ? 'text-error' : 'text-slate-600'}`}>{item.sla}</td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:underline font-bold text-xs">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
