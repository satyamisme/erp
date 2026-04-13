import { useState, useEffect } from 'react';
import { fetchWithAuth } from '../../lib/api';

export function FinanceZReport() {
  const [data, setData] = useState<any>(null); // eslint-disable-line

  useEffect(() => {
    fetchWithAuth('http://localhost:5000/api/finance/z-report')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading Z-Report...</div>;

  return (
    <div className="p-8 min-h-screen bg-surface-container-low">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Financial Operations / End of Day</span>
          <h2 className="text-2xl font-bold text-primary mt-1 tracking-tight">Z-Report: {data.stationId}</h2>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 hover:bg-primary/5 transition-all rounded shadow-sm">
            <span className="material-symbols-outlined text-sm align-middle mr-1">print</span> Print Receipt
          </button>
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-secondary bg-secondary hover:bg-secondary/90 transition-all rounded shadow-lg shadow-secondary/20">
            Submit to Ledger
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-surface-container-high flex justify-between items-center bg-surface-container-low/50">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">Transaction Ledger</h3>
              <div className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded shadow-sm">RECONCILED</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low">
                  <tr>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">Date</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">Invoice</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500">Item</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high">
                  {data.transactionLog.map((tx: any, i: number) => /* eslint-disable-line */ (
                    <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-6 py-4 text-xs font-medium text-slate-500">{tx.date}</td>
                      <td className="px-6 py-4 text-xs font-bold text-primary">{tx.invoice}</td>
                      <td className="px-6 py-4">
                        <p className="text-xs font-bold text-on-surface">{tx.item}</p>
                      </td>
                      <td className="px-6 py-4 text-right text-xs font-black text-sky-900">{tx.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Revenue Breakdown</h3>
            <div className="space-y-4">
              {Object.entries(data.revenueBreakdown).map(([key, val]: any) => /* eslint-disable-line */ (
                <div key={key}>
                  <div className="flex justify-between items-center mb-1 text-sm font-bold text-on-surface">
                    <span className="capitalize">{key}</span>
                    <span>{val.amount}</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: val.percentage }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-container text-white p-6 rounded-xl shadow-sm">
            <h3 className="text-[11px] font-bold uppercase tracking-widest opacity-80 mb-4">Financial Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="opacity-80">Tax Collected</span>
                <span>{data.financialSummary.taxCollected}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium border-b border-white/20 pb-3">
                <span className="opacity-80">Discounts</span>
                <span className="text-error-container">{data.financialSummary.discounts}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-black pt-2">
                <span>Net Liquidable</span>
                <span>{data.financialSummary.netLiquidable}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
