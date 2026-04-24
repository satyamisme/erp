import { useState, useEffect } from 'react';
import { fetchWithAuth } from '../../lib/api';

export function Customer360() {
  const [data, setData] = useState<any>(null); // eslint-disable-line

  useEffect(() => {
    fetchWithAuth('http://localhost:5000/api/crm/customer')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Customer 360...</div>;

  return (
    <div className="p-8 min-h-screen bg-surface-container-low">
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex text-[10px] font-bold text-slate-400 mb-2 tracking-widest uppercase">
            <span className="hover:text-primary cursor-pointer">Directory</span>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-primary-container">Customer Profile</span>
          </nav>
          <h2 className="text-3xl font-black text-sky-900 tracking-tight flex items-center">
            {data.name}
            <span className="ml-4 px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full flex items-center">
              <span className="material-symbols-outlined text-sm mr-1 icon-filled">verified</span>
              {data.tier}
            </span>
          </h2>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-surface-container-lowest text-sky-900 text-xs font-bold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center">
            <span className="material-symbols-outlined mr-2 text-sm">share</span> EXPORT DATA
          </button>
          <button className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center">
            <span className="material-symbols-outlined mr-2 text-sm">edit</span> MODIFY PROFILE
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-slate-200/40">
            <div className="h-24 bg-gradient-to-r from-primary to-primary-container"></div>
            <div className="px-6 pb-6 -mt-12">
              <div className="h-24 w-24 rounded-2xl border-4 border-white overflow-hidden shadow-md bg-white mb-4">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Customer" />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Omnichannel Sync</p>
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
                      <span className="material-symbols-outlined text-sm">chat</span>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                      <span className="material-symbols-outlined text-sm">mail</span>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-200">
                      <span className="material-symbols-outlined text-sm">sms</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Member Since</span>
                    <span className="text-xs font-bold text-sky-900">Oct 2021</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Contact Score</span>
                    <span className="text-xs font-bold text-secondary">{data.score}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-xl border border-slate-200/40">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest">Family Linking</h3>
              <span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer">add_circle</span>
            </div>
            <div className="space-y-4">
              {data.family.map((member: any, i: number) => /* eslint-disable-line */ (
                <div key={i} className="flex items-center group cursor-pointer">
                  <div className="h-8 w-8 rounded-full border border-slate-200 bg-surface-container-high mr-3 flex items-center justify-center text-xs font-bold">
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sky-900 group-hover:text-primary transition-colors">{member.name}</p>
                    <p className="text-[10px] text-slate-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-primary p-4 rounded-xl text-white flex flex-col justify-between shadow-sm">
              <p className="text-[10px] font-bold opacity-60 tracking-widest uppercase">LTV Summary</p>
              <h4 className="text-2xl font-black mt-2 tracking-tighter">{data.ltv}</h4>
              <div className="flex items-center mt-2 text-[10px] font-bold text-secondary-fixed">
                <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span> +12% vs LY
              </div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Loyalty Points</p>
              <h4 className="text-2xl font-black mt-2 text-sky-900 tracking-tighter">{data.points} <span className="text-sm font-medium text-slate-400">pts</span></h4>
              <div className="flex items-center mt-2 text-[10px] font-bold text-tertiary">Expires in 42 days</div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Total Repairs</p>
              <h4 className="text-2xl font-black mt-2 text-sky-900 tracking-tighter">{data.repairs}</h4>
              <div className="flex items-center mt-2 text-[10px] font-bold text-slate-500">Avg cycle: 3.2 days</div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-5 flex justify-between items-center bg-slate-50/50 border-b border-slate-100">
              <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest">Active Repair Pipeline</h3>
              <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">{data.activeRepairs.length} IN-PROGRESS</span>
            </div>
            <div className="divide-y divide-slate-100">
              {data.activeRepairs.map((repair: any, i: number) => /* eslint-disable-line */ (
                <div key={i} className="p-4 flex items-center hover:bg-slate-50 transition-colors">
                  <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="material-symbols-outlined text-slate-500">{i === 0 ? 'laptop_mac' : 'smartphone'}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-sky-900">{repair.model}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${i === 0 ? 'text-orange-600 bg-orange-50' : 'text-secondary bg-secondary/10'}`}>{repair.status}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className={`h-full ${i === 0 ? 'bg-orange-400' : 'bg-secondary'}`} style={{ width: repair.progress }}></div>
                    </div>
                  </div>
                  <div className="ml-6 text-right">
                    <p className="text-[10px] font-bold text-slate-400">EST. PICKUP</p>
                    <p className="text-xs font-black text-sky-900">{repair.pickup}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-5 flex justify-between items-center bg-white">
              <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest">Transaction Ledger</h3>
              <div className="flex space-x-2">
                <button className="material-symbols-outlined text-slate-400 text-lg">filter_list</button>
                <button className="material-symbols-outlined text-slate-400 text-lg">search</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-100">
                    <th className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice</th>
                    <th className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Product / Service</th>
                    <th className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.transactions.map((tx: any, i: number) => /* eslint-disable-line */ (
                    <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer">
                      <td className="px-5 py-3 text-xs font-medium text-slate-500">{tx.date}</td>
                      <td className="px-5 py-3 text-xs font-bold text-primary">{tx.invoice}</td>
                      <td className="px-5 py-3">
                        <p className="text-xs font-bold text-sky-900">{tx.item}</p>
                        <p className="text-[10px] text-slate-400">Completed Purchase</p>
                      </td>
                      <td className="px-5 py-3 text-xs font-black text-sky-900 text-right">{tx.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-50 flex justify-center border-t border-slate-100">
              <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">View 11 more entries</button>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest mb-4">Device Fleet</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="group relative rounded-lg overflow-hidden h-24 cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1592899677974-c46414c11fa0?auto=format&fit=crop&w=400&q=80" alt="iPhone" />
              </div>
              <div className="group relative rounded-lg overflow-hidden h-24 cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="MacBook" />
              </div>
              <div className="group relative rounded-lg overflow-hidden h-24 cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=400&q=80" alt="Watch" />
              </div>
              <div className="bg-slate-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">add_a_photo</span>
                <span className="text-[8px] font-bold uppercase mt-1">Add New</span>
              </div>
            </div>
          </div>

          <div className="bg-primary-container p-5 rounded-xl text-white shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[10px] font-black uppercase tracking-widest opacity-80">Tech Health Score</h3>
              <span className="text-xs font-bold">82%</span>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-4">
              <div className="bg-secondary h-full w-[82%] shadow-[0_0_8px_rgba(27,109,36,0.8)]"></div>
            </div>
            <p className="text-[10px] leading-relaxed opacity-80">
                Fleet contains 1 outdated OS and 2 devices with nearing battery cycles. Recommended upgrade pitch ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
