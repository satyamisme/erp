
export function RepairHub() {
  return (
    <div className="p-6 min-h-full">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-black text-primary tracking-tight">Repair Dashboard</h2>
          <p className="text-sm text-slate-500">Managing <span className="font-bold text-secondary">42 active bench items</span> across 12 technicians</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-high text-primary px-4 py-2 rounded font-bold text-sm hover:bg-surface-container-highest transition-colors shadow-sm">Export Logs</button>
          <button className="bg-primary text-white px-6 py-2 rounded font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-sm">add</span>
            New Intake
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Visual Damage Mapper */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Intake Mapper</h3>
            <span className="text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded font-bold">ID: 61-802</span>
          </div>

          <div className="relative flex justify-center py-8 bg-surface-container-low rounded-lg mb-4">
            {/* SVG Phone Schematic Mockup */}
            <svg width="120" height="240" viewBox="0 0 120 240" className="text-slate-300">
              <rect x="5" y="5" width="110" height="230" rx="15" fill="none" stroke="currentColor" strokeWidth="3"></rect>
              <rect x="10" y="10" width="100" height="220" rx="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4"></rect>
              <circle cx="60" cy="20" r="3" fill="currentColor"></circle>
              {/* Damage Markers */}
              <circle cx="30" cy="80" r="6" fill="#ba1a1a" className="animate-pulse"></circle>
              <circle cx="90" cy="180" r="6" fill="#ba1a1a" className="animate-pulse"></circle>
            </svg>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs border-b border-surface-container-high pb-2">
              <span className="text-slate-500">Device</span>
              <span className="font-bold">iPhone 15 Pro Max</span>
            </div>
            <div className="flex justify-between text-xs border-b border-surface-container-high pb-2">
              <span className="text-slate-500">Symptom</span>
              <span className="font-bold">Cracked OLED / Touch Failure</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Assigned To</span>
              <span className="font-bold text-primary">Tech. Miller</span>
            </div>
          </div>
        </div>

        {/* Bench Queue Status */}
        <div className="col-span-1 md:col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            <div className="p-4 rounded-lg bg-surface-container-low border-l-4 border-secondary flex flex-col justify-center">
              <p className="text-[10px] font-bold text-secondary uppercase mb-1">Bench 01</p>
              <h4 className="text-sm font-bold truncate">MacBook M3 Logic</h4>
              <p className="text-[10px] text-slate-500 mt-2">Time: 02:14:00</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low border-l-4 border-error flex flex-col justify-center">
              <p className="text-[10px] font-bold text-error uppercase mb-1">Bench 02</p>
              <h4 className="text-sm font-bold truncate">iPad Pro Battery</h4>
              <p className="text-[10px] text-slate-500 mt-2">Part Pending</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low border-l-4 border-primary flex flex-col justify-center">
              <p className="text-[10px] font-bold text-primary uppercase mb-1">Bench 03</p>
              <h4 className="text-sm font-bold truncate">PS5 HDMI Port</h4>
              <p className="text-[10px] text-slate-500 mt-2">Time: 00:45:12</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low border-l-4 border-secondary flex flex-col justify-center">
              <p className="text-[10px] font-bold text-secondary uppercase mb-1">Bench 04</p>
              <h4 className="text-sm font-bold truncate">Fold 5 Hinge</h4>
              <p className="text-[10px] text-slate-500 mt-2">Time: 01:10:45</p>
            </div>
          </div>
        </div>

        {/* QC Checklist */}
        <div className="col-span-1 md:col-span-6 lg:col-span-7 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">20-Point QC Checklist</h3>
            <p className="text-xs font-bold text-primary">14 / 20 Validated</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            <div className="flex items-center gap-3 py-2 border-b border-surface-container-high">
              <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-xs font-medium">FaceID Biometrics</span>
            </div>
            <div className="flex items-center gap-3 py-2 border-b border-surface-container-high">
              <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-xs font-medium">Touch Sensitivity</span>
            </div>
            <div className="flex items-center gap-3 py-2 border-b border-surface-container-high">
              <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-xs font-medium">Camera Alignment</span>
            </div>
            <div className="flex items-center gap-3 py-2 border-b border-surface-container-high">
              <span className="material-symbols-outlined text-slate-300 text-lg">radio_button_unchecked</span>
              <span className="text-xs font-medium">NFC / Wallet Pay</span>
            </div>
            <div className="flex items-center gap-3 py-2 border-b border-surface-container-high">
              <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-xs font-medium">Wireless Charging</span>
            </div>
            <div className="flex items-center gap-3 py-2 border-b border-surface-container-high">
              <span className="material-symbols-outlined text-slate-300 text-lg">radio_button_unchecked</span>
              <span className="text-xs font-medium">OLED Color Calib.</span>
            </div>
          </div>
        </div>

        {/* Part Replacement Log */}
        <div className="col-span-1 md:col-span-6 lg:col-span-5 bg-primary-container p-6 rounded-xl shadow-sm text-white">
          <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6">Part Replacement Log</h3>
          <div className="space-y-4">
            <div className="bg-white/10 p-3 rounded border border-white/5">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-bold uppercase opacity-80">LCD Assembly (Genuine)</span>
                <span className="text-[10px] font-bold">SN: GX-294-82</span>
              </div>
              <p className="text-xs">Paired to Logic Board ID 8274</p>
            </div>
            <div className="bg-white/10 p-3 rounded border border-white/5">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-bold uppercase opacity-80">Battery Pack 4500mAh</span>
                <span className="text-[10px] font-bold">SN: BT-992-01</span>
              </div>
              <p className="text-xs">Cycles: 0 (New Original)</p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
              <div>
                <p className="text-[10px] opacity-60 uppercase">IMEI Tracking</p>
                <p className="text-xs font-mono">354829 10 284756 2</p>
              </div>
              <span className="material-symbols-outlined text-secondary-container">verified</span>
            </div>
          </div>
        </div>

        {/* High-Density Data Grid */}
        <div className="col-span-1 md:col-span-12 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
          <div className="p-6 flex justify-between items-center border-b border-surface-container-high">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Repair Inventory</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-surface-container-low rounded transition-colors"><span className="material-symbols-outlined text-sm">filter_list</span></button>
              <button className="p-2 hover:bg-surface-container-low rounded transition-colors"><span className="material-symbols-outlined text-sm">download</span></button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-6 py-3 text-[11px] text-slate-500 font-bold uppercase tracking-wider">Repair ID</th>
                  <th className="px-6 py-3 text-[11px] text-slate-500 font-bold uppercase tracking-wider">Device Model</th>
                  <th className="px-6 py-3 text-[11px] text-slate-500 font-bold uppercase tracking-wider">Technician</th>
                  <th className="px-6 py-3 text-[11px] text-slate-500 font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-[11px] text-slate-500 font-bold uppercase tracking-wider">SLA Timer</th>
                  <th className="px-6 py-3 text-[11px] text-slate-500 font-bold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 text-xs font-mono font-bold text-primary">REP-061</td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-bold">Surface Laptop Studio 2</div>
                    <div className="text-[10px] text-slate-400">SN: 4920485721</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-[10px] text-white">AM</div>
                      <span className="text-xs font-medium">A. Miller</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase">Bench_Active</span>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-600">01:42:00</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-sky-700 font-bold text-xs">Manage</button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 text-xs font-mono font-bold text-primary">REP-075</td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-bold">ROG Ally X</div>
                    <div className="text-[10px] text-slate-400">SN: 992038175</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-[10px] text-white">SK</div>
                      <span className="text-xs font-medium">S. Khan</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-error-container text-on-error-container uppercase">Part_Hold</span>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-error">Delayed</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-sky-700 font-bold text-xs">Manage</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
