
import { useState, useEffect } from 'react';

export function BatchJobManager() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/dashboard/jobs')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Batch Jobs...</div>;

  return (
    <div className="p-6 flex-1 bg-surface-container-low h-full">
      {/* Page Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-primary tracking-tight">Active Operations <span className="text-slate-400 font-normal">/ Batch ID 326</span></h2>
          <p className="text-sm text-on-surface-variant">Monitoring asynchronous enterprise tasks for Lakki Quantum System.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest text-on-surface-variant border border-outline-variant/20 rounded-lg text-sm font-medium hover:bg-surface-container-high transition-colors shadow-sm">
            <span className="material-symbols-outlined text-sm">pause_circle</span>
            Pause Queue
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest text-on-surface-variant border border-outline-variant/20 rounded-lg text-sm font-medium hover:bg-surface-container-high transition-colors shadow-sm">
            <span className="material-symbols-outlined text-sm">delete_sweep</span>
            Clear Completed
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-error-container text-on-error-container rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-sm">
            <span className="material-symbols-outlined text-sm">cancel</span>
            Cancel All
          </button>
        </div>
      </div>

      {/* Bento Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Throughput</span>
            <span className="material-symbols-outlined text-secondary text-lg">speed</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-primary">{data.throughput}</span>
            <span className="text-xs font-bold text-secondary">rows/sec</span>
          </div>
          <div className="mt-2 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-4/5"></div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Error Rate</span>
            <span className="material-symbols-outlined text-error text-lg">error</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-on-surface">{data.errorRate}</span>
            <span className="text-xs font-bold text-slate-400">%</span>
          </div>
          <p className="text-[10px] text-secondary mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">trending_down</span>
            0.01% from last hour
          </p>
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Spooler Latency</span>
            <span className="material-symbols-outlined text-primary text-lg">timer</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-on-surface">{data.latency}</span>
            <span className="text-xs font-bold text-slate-400">ms</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">Optimal system response</p>
        </div>

        <div className="bg-primary text-on-primary p-4 rounded-xl shadow-lg relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">System Status</span>
              <span className="material-symbols-outlined text-blue-300 animate-pulse">sensors</span>
            </div>
            <div className="text-3xl font-black">{data.status}</div>
            <p className="text-[10px] text-blue-200 mt-2">Node 01-A Active</p>
          </div>
          <div className="absolute right-[-10%] bottom-[-20%] text-blue-800 opacity-20 transform group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-8xl">deployed_code</span>
          </div>
        </div>
      </div>

      {/* Active Processing Cards */}
      <h3 className="text-[11px] uppercase font-bold text-slate-500 tracking-widest mb-4">Active Processing Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {data.activeJobs.map((job: any, i: number) => (
          <div key={i} className="bg-white/60 backdrop-blur-md p-5 rounded-xl border border-outline-variant/20 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${i === 0 ? 'bg-primary/10' : i === 1 ? 'bg-secondary/10' : 'bg-tertiary/10'}`}>
                <span className={`material-symbols-outlined ${i === 0 ? 'text-primary' : i === 1 ? 'text-secondary' : 'text-tertiary'}`}>{i === 0 ? 'barcode_reader' : i === 1 ? 'print' : 'account_balance'}</span>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${i === 2 ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant' : 'bg-secondary-container text-on-secondary-container'}`}>{i === 0 ? 'Processing' : i === 1 ? 'Spooling' : 'Parsing'}</span>
            </div>
            <h4 className="font-bold text-primary text-lg mb-1">{job.title}</h4>
            <p className="text-xs text-on-surface-variant mb-6">{job.desc}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-bold text-primary">
                <span>{job.progress} Complete</span>
                <span>{job.text}</span>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-secondary' : 'bg-tertiary'}`} style={{ width: job.progress }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Job Queue Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-surface-container-high flex flex-col sm:flex-row justify-between items-center bg-white/50 gap-4">
          <h3 className="text-sm font-bold text-primary">Job Queue History</h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tasks..."
                className="bg-surface-container-low border-none rounded-lg text-xs py-1.5 pl-8 pr-4 w-64 focus:ring-1 focus:ring-primary"
              />
              <span className="material-symbols-outlined absolute left-2 top-1.5 text-slate-400 text-sm">search</span>
            </div>
            <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Job Type</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Operator</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Start Time</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {data.history.map((job: any, i: number) => (
                <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-3 text-xs font-mono font-bold text-primary">{job.id}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-slate-400">{job.status === 'SUCCESS' ? 'table_chart' : job.status === 'RUNNING' ? 'cloud_download' : job.status === 'QUEUED' ? 'description' : 'database'}</span>
                      <span className="text-xs font-medium text-on-surface">{job.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${job.status === 'SUCCESS' ? 'bg-secondary-container text-on-secondary-container' : job.status === 'RUNNING' ? 'bg-blue-100 text-blue-700' : job.status === 'FAILED' ? 'bg-error-container text-on-error-container' : 'bg-surface-container-high text-slate-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${job.status === 'SUCCESS' ? 'bg-secondary' : job.status === 'RUNNING' ? 'bg-blue-700 animate-pulse' : job.status === 'FAILED' ? 'bg-error' : 'bg-slate-400'}`}></span> {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-xs text-on-surface-variant">{job.operator}</td>
                  <td className="px-6 py-3 text-xs text-on-surface-variant">{job.time}</td>
                  <td className="px-6 py-3 text-xs text-on-surface-variant">{job.duration}</td>
                  <td className="px-6 py-3 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors text-lg">more_vert</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 bg-surface-container-lowest border-t border-surface-container-high flex justify-between items-center">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Showing 1-2 of 1,200 records</span>
          <div className="flex gap-1">
            <button className="p-1 rounded bg-surface-container-low text-slate-400"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
            <button className="px-2 py-1 rounded bg-primary text-on-primary text-[10px] font-bold">1</button>
            <button className="px-2 py-1 rounded hover:bg-surface-container-low text-[10px] font-bold">2</button>
            <button className="px-2 py-1 rounded hover:bg-surface-container-low text-[10px] font-bold">3</button>
            <button className="p-1 rounded bg-surface-container-low text-slate-400"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
