import { useState, useEffect } from 'react';
import { fetchWithAuth } from '../../lib/api';

export function InterStoreTransfers() {
  const [data, setData] = useState<any>(null); // eslint-disable-line

  useEffect(() => {
    fetchWithAuth('http://localhost:5000/api/finance/transfer')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Transfers...</div>;

  return (
    <div className="p-8 min-h-screen bg-surface-container-low">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Inventory Management / Transfer Ops</span>
          <h2 className="text-2xl font-bold text-primary mt-1 tracking-tight">Inter-Store Transfer: {data.transferId}</h2>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 hover:bg-primary/5 transition-all rounded shadow-sm">
            <span className="material-symbols-outlined text-sm align-middle mr-1">print</span> Export Manifest
          </button>
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-secondary bg-secondary hover:bg-secondary/90 transition-all rounded shadow-lg shadow-secondary/20">
            Confirm Receipt
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-12 bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">local_shipping</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary mb-6">Real-Time Transfer Status</h3>
            <div className="flex items-center justify-between">
              {['Requested', 'Shipped', 'In-Transit', 'Received'].map((step, i) => (
                <div key={i} className="flex flex-col items-center flex-1 relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 z-10 ${
                    i < 2 ? 'bg-secondary text-white ring-4 ring-secondary/20' :
                    i === 2 ? 'bg-primary text-white animate-pulse ring-4 ring-primary/20' :
                    'bg-surface-container-high text-slate-400'
                  }`}>
                    <span className="material-symbols-outlined">{i < 2 ? 'check' : i === 2 ? 'conveyor_belt' : 'download_done'}</span>
                  </div>
                  <span className={`text-xs font-bold ${i === 2 ? 'text-primary' : i < 2 ? 'text-on-surface' : 'text-slate-400'}`}>{step}</span>
                  <span className="text-[10px] text-slate-500 mt-1">{i === 0 ? 'Oct 24, 08:30 AM' : i === 1 ? 'Oct 25, 02:15 PM' : i === 2 ? 'Active Stage' : 'Pending arrival'}</span>

                  {i < 3 && (
                    <div className="absolute top-5 left-1/2 w-full h-[2px] -z-10 bg-surface-container-high">
                      <div className={`h-full ${i < 2 ? 'bg-secondary' : 'bg-primary/20'}`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Routing Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="material-symbols-outlined text-primary-container mr-3 mt-1">location_on</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Source Terminal</p>
                  <p className="text-sm font-bold text-primary">{data.source.terminal}</p>
                  <p className="text-xs text-slate-500">{data.source.address}</p>
                </div>
              </div>
              <div className="ml-[11px] h-8 border-l-2 border-dashed border-outline-variant/30"></div>
              <div className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1">farsight_digital</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Destination</p>
                  <p className="text-sm font-bold text-primary">{data.destination.terminal}</p>
                  <p className="text-xs text-slate-500">{data.destination.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Logistics Handler</h3>
            <div className="flex items-center p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high mr-4 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-slate-400">person</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">{data.courier.name}</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{data.courier.id}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Vehicle</p>
                <p className="text-xs font-bold text-primary">{data.vehicle}</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">ETA</p>
                <p className="text-xs font-bold text-secondary">{data.eta}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-8">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
            <div className="px-6 py-4 border-b border-surface-container-high flex justify-between items-center bg-surface-container-low/50">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">Itemized Inventory Manifest</h3>
              <div className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded shadow-sm">VALUED: $12,450.00</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low">
                  <tr>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">SKU / Serial</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">Item Description</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 text-center">Qty</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 text-right">Unit Value</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high">
                  {data.manifest.map((item: any, i: number) => /* eslint-disable-line */ (
                    <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-6 py-4">
                        <p className="text-xs font-bold text-primary">{item.sku}</p>
                        <p className="text-[10px] text-slate-400 font-mono">SN: {Math.floor(0.5 * 1000000)}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-xs font-semibold text-on-surface">{item.name}</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xs font-bold">{item.qty}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-xs font-bold text-on-surface">{item.value}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${item.status === 'Verified' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-on-error-container'}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-surface-container-lowest flex justify-between items-center border-t border-outline-variant/10">
              <button className="text-xs font-bold text-primary flex items-center hover:underline">
                <span className="material-symbols-outlined text-sm mr-1">add</span> Add Missing Item Note
              </button>
            </div>
          </div>

          <div className="mt-6 bg-surface-container-lowest border border-outline-variant/10 shadow-sm rounded-xl p-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Transfer Activity Log</h3>
            <div className="space-y-4">
              {data.activityLog.map((log: any, i: number) => /* eslint-disable-line */ (
                <div key={i} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 ${i === 0 ? 'bg-secondary' : 'bg-primary'}`}></div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface">{log.event}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
