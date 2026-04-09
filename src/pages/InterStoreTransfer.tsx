
export function InterStoreTransfer() {
  return (
    <div className="p-8 min-h-full bg-surface">
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Inventory Management / Transfer Ops</span>
          <h2 className="text-2xl font-bold text-primary mt-1 tracking-tight">Inter-Store Transfer: <span className="font-mono text-xl">#TX-99042-LAKKI</span></h2>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 hover:bg-primary/5 transition-all rounded shadow-sm flex items-center">
            <span className="material-symbols-outlined text-sm mr-2">print</span>
            Export Manifest
          </button>
          <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-secondary bg-secondary hover:bg-secondary/90 transition-all rounded shadow-lg shadow-secondary/20">
            Confirm Receipt
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Tracking Timeline (Full Width top section) */}
        <section className="col-span-1 lg:col-span-12 bg-surface-container-low p-6 rounded-xl relative overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">local_shipping</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary mb-6">Real-Time Transfer Status</h3>
            <div className="flex items-center justify-between">
              {/* Requested */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white ring-4 ring-secondary/20 mb-2">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <span className="text-xs font-bold text-on-surface">Requested</span>
                <span className="text-[10px] text-slate-500 text-center hidden sm:block">Oct 24, 08:30 AM</span>
              </div>
              <div className="h-[2px] flex-1 bg-secondary mx-2"></div>

              {/* Shipped */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white ring-4 ring-secondary/20 mb-2">
                  <span className="material-symbols-outlined">check</span>
                </div>
                <span className="text-xs font-bold text-on-surface">Shipped</span>
                <span className="text-[10px] text-slate-500 text-center hidden sm:block">Oct 25, 02:15 PM</span>
              </div>
              <div className="h-[2px] flex-1 bg-secondary mx-2"></div>

              {/* In-Transit */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white animate-pulse mb-2 shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined">conveyor_belt</span>
                </div>
                <span className="text-xs font-bold text-primary">In-Transit</span>
                <span className="text-[10px] text-slate-500 text-center hidden sm:block">Active Stage</span>
              </div>
              <div className="h-[2px] flex-1 bg-surface-container-high mx-2"></div>

              {/* Received */}
              <div className="flex flex-col items-center flex-1 opacity-50">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-slate-400 mb-2">
                  <span className="material-symbols-outlined">download_done</span>
                </div>
                <span className="text-xs font-bold text-slate-400">Received</span>
                <span className="text-[10px] text-slate-500 text-center hidden sm:block">Pending arrival</span>
              </div>
            </div>
          </div>
        </section>

        {/* Routing & Logistics Info */}
        <section className="col-span-1 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Routing Information</h3>
            <div className="space-y-4 relative">
              <div className="flex items-start z-10 relative">
                <span className="material-symbols-outlined text-primary-container mr-3 mt-1">location_on</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Source Terminal</p>
                  <p className="text-sm font-bold text-primary">Downtown Terminal - T01</p>
                  <p className="text-xs text-slate-500">450 Commerce Way, District 4</p>
                </div>
              </div>

              <div className="absolute left-[11px] top-6 bottom-8 border-l-2 border-dashed border-outline-variant/50 z-0"></div>

              <div className="flex items-start z-10 relative pt-4">
                <span className="material-symbols-outlined text-secondary mr-3 mt-1">farsight_digital</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Destination</p>
                  <p className="text-sm font-bold text-primary">North Plaza Station - T09</p>
                  <p className="text-xs text-slate-500">92 Skyline Drive, North Sector</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Logistics Handler</h3>
            <div className="flex items-center p-3 bg-surface-container-low rounded-lg">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaDiLyCa0NFYWKPnWwwvkRRGX8XuSKWS3I39TLds9mLPdsuU0do6lgA79WVfPVHrclHhrH_FADL9XDxKZH_HzvHiy9mKyWerS7qDN39avLKmbkMfOZgFBDWkct9x1vf5r-Hc-9_FVyzU_FyUoYO_ZXAxMjccqXTJYmuzyj_MurW_5vQqIaG4RgFr2yuWxYJASTb_zWYaObXD3JyMh8qOypYqxvTbZrpucreABGqG9y9s_i1E1aD1idbQqkzWy4WUJWwySKdDekUEQ"
                alt="Courier Profile"
                className="w-12 h-12 rounded-lg object-cover mr-4"
              />
              <div>
                <p className="text-sm font-bold text-on-surface">Marcus Thorne</p>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Courier ID: #8829-X</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/5">
                <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Vehicle</p>
                <p className="text-xs font-bold text-primary">EV-Van #44</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/5">
                <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">ETA</p>
                <p className="text-xs font-bold text-secondary">Today, 4:30 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-6 rounded-xl shadow-xl overflow-hidden relative group">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 opacity-80">Transfer Manifest QR</h3>
              <div className="w-40 h-40 bg-white p-3 rounded-lg mb-4 shadow-lg shadow-black/20">
                <div className="w-full h-full bg-slate-100 flex items-center justify-center border-4 border-slate-50 relative overflow-hidden">
                  <span className="material-symbols-outlined absolute text-primary opacity-60 scale-[3]">qr_code_2</span>
                </div>
              </div>
              <p className="text-[10px] font-medium leading-relaxed opacity-80 uppercase tracking-widest">Scan at terminal gate for automated entry clearance</p>
            </div>
          </div>
        </section>

        {/* Itemized Table Section */}
        <section className="col-span-1 lg:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden flex-1 flex flex-col">
            <div className="px-6 py-4 border-b border-surface-container-high flex flex-col sm:flex-row sm:justify-between sm:items-center bg-surface-container-low/50 gap-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">Itemized Inventory Manifest (14 Items)</h3>
              <div className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded-full border border-secondary-container/50">
                VALUED: $12,450.00
              </div>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 border-b border-surface-container-high">SKU / Serial</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 border-b border-surface-container-high">Item Description</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 text-center border-b border-surface-container-high">Qty</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 text-right border-b border-surface-container-high">Unit Value</th>
                    <th className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 text-right border-b border-surface-container-high">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-high">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-primary">ELC-29938</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">SN: 8A2-004-991</p>
                    </td>
                    <td className="px-6 py-4 min-w-[200px]">
                      <p className="text-xs font-semibold text-on-surface">Integrated Relay Hub V2</p>
                      <p className="text-[10px] text-slate-500 mt-1">Industrial Automation Series</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xs font-bold px-2 py-1 bg-surface-container-high rounded">04</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-xs font-bold text-on-surface">$1,200.00</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase tracking-tighter border border-secondary-container/50">Verified</span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-primary">SRV-00122</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">SN: 1K9-112-X88</p>
                    </td>
                    <td className="px-6 py-4 min-w-[200px]">
                      <p className="text-xs font-semibold text-on-surface">Optical Sensor Array</p>
                      <p className="text-[10px] text-slate-500 mt-1">Precision Field Monitoring</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xs font-bold px-2 py-1 bg-surface-container-high rounded">10</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-xs font-bold text-on-surface">$765.00</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase tracking-tighter border border-secondary-container/50">Verified</span>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-primary">CAB-LT-94</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">SN: N/A (Bulk)</p>
                    </td>
                    <td className="px-6 py-4 min-w-[200px]">
                      <p className="text-xs font-semibold text-on-surface">Fiber Link 100m Spool</p>
                      <p className="text-[10px] text-slate-500 mt-1">High-Speed Terminal Backbone</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xs font-bold px-2 py-1 bg-surface-container-high rounded">02</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-xs font-bold text-on-surface">$45.00</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase tracking-tighter border border-secondary-container/50">Verified</span>
                    </td>
                  </tr>

                  {/* Row 4 (Damaged) */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4">
                      <p className="text-xs font-bold text-error">TR-CORE-V</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">SN: CORE-9921-X</p>
                    </td>
                    <td className="px-6 py-4 min-w-[200px]">
                      <p className="text-xs font-semibold text-on-surface">Terminal Processor Unit</p>
                      <p className="text-[10px] text-slate-500 mt-1">Central Operating Hardware</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xs font-bold px-2 py-1 bg-surface-container-high rounded">01</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-xs font-bold text-on-surface">$5,400.00</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-error-container text-on-error-container uppercase tracking-tighter border border-error-container/50">Damaged Check</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-surface-container-lowest flex flex-col sm:flex-row justify-between items-center border-t border-surface-container-high gap-4">
              <button className="text-xs font-bold text-primary flex items-center hover:underline transition-all">
                <span className="material-symbols-outlined text-sm mr-1">add</span> Add Missing Item Note
              </button>
              <div className="flex space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-high text-slate-500 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs shadow-sm hover:opacity-90 transition-opacity">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-high text-slate-600 font-bold text-xs hover:bg-slate-200 transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-high text-slate-500 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
              </div>
            </div>
          </div>

          {/* Async Log / Communication */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-6 shadow-sm">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Transfer Activity Log</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-1 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-container-high before:to-transparent">

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-white shadow-sm ring-4 ring-surface-container-lowest shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <span className="material-symbols-outlined text-[12px]">check</span>
                </div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-lg bg-surface-container-low/50 border border-outline-variant/5 shadow-sm">
                  <p className="text-xs font-bold text-on-surface">Vehicle departed source gate T01</p>
                  <p className="text-[10px] text-slate-500 mt-1">Oct 25, 02:40 PM • System Auto-Logged</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white shadow-sm ring-4 ring-surface-container-lowest shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <span className="material-symbols-outlined text-[12px]">edit_note</span>
                </div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-lg bg-surface-container-low/50 border border-outline-variant/5 shadow-sm">
                  <p className="text-xs font-bold text-on-surface mb-2">Note added by Downtown Terminal (Sarah J.)</p>
                  <div className="bg-white p-3 rounded border border-outline-variant/10 text-xs text-slate-600 italic">
                    "All items checked for serial consistency. Spool SN was missing, marked as bulk."
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2">Oct 25, 01:15 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
