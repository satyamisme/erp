
export function CommandPalette() {
  return (
    <div className="p-8 h-full bg-surface-container-low relative">
      {/* Background Content Mockup to show overlay context */}
      <header className="flex justify-between items-center mb-8 opacity-40">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Lakki Terminal Dashboard</h2>
          <p className="text-on-surface-variant text-sm">System Operational: Active Sync</p>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6 opacity-40">
        <div className="col-span-8 h-64 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="w-full h-full rounded bg-surface-container-low"></div>
        </div>
        <div className="col-span-4 h-64 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="w-full h-full rounded bg-surface-container-low"></div>
        </div>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-50 flex items-start justify-center pt-[102px] bg-[#181c1e]/60 backdrop-blur-md">
        {/* Modal Container */}
        <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_12px_32px_rgba(0,30,46,0.08)] border-t border-primary-fixed/30 flex flex-col border border-outline-variant/20">

          {/* Search Input Area */}
          <div className="p-4 flex items-center border-b border-surface-container-high">
            <span className="material-symbols-outlined text-primary mr-3">search</span>
            <input
              type="text"
              defaultValue="iPhone 15"
              placeholder="Search products, IMEIs, customers or commands..."
              className="w-full bg-transparent border-none focus:ring-0 text-lg placeholder:text-on-surface-variant/50 font-medium outline-none"
            />
            <div className="flex gap-1 ml-4">
              <kbd className="px-2 py-1 bg-surface-container-high rounded text-[10px] font-bold text-on-surface-variant border border-outline-variant/30">ESC</kbd>
            </div>
          </div>

          {/* Content Scroll Area */}
          <div className="max-h-[614px] overflow-y-auto p-2 space-y-4 custom-scrollbar">

            {/* Quick Navigation Section */}
            <div>
              <div className="px-3 py-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant/60">Quick Navigation</span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-2">
                <button className="flex items-center p-3 rounded-lg hover:bg-primary/5 group transition-colors border border-transparent hover:border-primary/10">
                  <span className="material-symbols-outlined text-primary-container mr-3">point_of_sale</span>
                  <span className="text-sm font-semibold">POS Terminal</span>
                </button>
                <button className="flex items-center p-3 rounded-lg hover:bg-primary/5 group transition-colors border border-transparent hover:border-primary/10">
                  <span className="material-symbols-outlined text-primary-container mr-3">construction</span>
                  <span className="text-sm font-semibold">Repair Bay</span>
                </button>
                <button className="flex items-center p-3 rounded-lg hover:bg-primary/5 group transition-colors border border-transparent hover:border-primary/10">
                  <span className="material-symbols-outlined text-primary-container mr-3">inventory_2</span>
                  <span className="text-sm font-semibold">Inventory</span>
                </button>
              </div>
            </div>

            {/* Products & Inventory Section */}
            <div>
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant/60">Products & Inventory</span>
                <span className="text-[10px] font-medium text-primary">2 Results</span>
              </div>
              <div className="space-y-1">
                {/* Result 1 */}
                <div className="group flex items-center justify-between p-3 rounded-lg bg-surface-container-low/40 hover:bg-primary-container hover:text-on-primary cursor-pointer transition-all mx-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden flex-shrink-0 flex items-center justify-center text-slate-400">
                      <span className="material-symbols-outlined">smartphone</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-tight">iPhone 15 Pro Max 256GB</h4>
                      <p className="text-[11px] opacity-70 font-mono tracking-tight">IMEI: 354928100293847</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-secondary-container text-on-secondary-container group-hover:bg-on-primary group-hover:text-primary transition-colors">In Stock</span>
                    <p className="text-xs font-bold mt-1">$1,199.00</p>
                  </div>
                </div>

                {/* Result 2 */}
                <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-primary-container hover:text-on-primary cursor-pointer transition-all mx-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden flex-shrink-0 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined">smartphone</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-tight">iPhone 15 Plus 128GB</h4>
                      <p className="text-[11px] opacity-70 font-mono tracking-tight">IMEI: 358273619283745</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-surface-container-high text-on-surface-variant group-hover:bg-on-primary group-hover:text-primary transition-colors">Low Stock (2)</span>
                    <p className="text-xs font-bold mt-1">$899.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customers & Leads Section */}
            <div>
              <div className="px-3 py-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant/60">Customers & Leads</span>
              </div>
              <div className="space-y-1">
                <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-primary-container hover:text-on-primary cursor-pointer transition-all mx-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-xs flex items-center justify-center">JD</div>
                    <div>
                      <h4 className="text-sm font-bold">Johnathan Doe</h4>
                      <p className="text-xs opacity-70">+1 (555) 012-3456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm opacity-50">history</span>
                    <span className="text-xs font-medium">Last: Repair #4492</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-3 bg-surface-container-low flex items-center justify-between border-t border-surface-container-high">
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-surface-container-lowest rounded text-[9px] font-bold text-on-surface-variant border border-outline-variant/30 shadow-sm">↑↓</kbd>
                <span className="text-[10px] font-medium text-on-surface-variant uppercase tracking-wider">Navigate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-surface-container-lowest rounded text-[9px] font-bold text-on-surface-variant border border-outline-variant/30 shadow-sm">ENTER</kbd>
                <span className="text-[10px] font-medium text-on-surface-variant uppercase tracking-wider">Select</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-primary tracking-tighter uppercase">Lakki OS</span>
              <span className="w-1 h-1 rounded-full bg-primary/30"></span>
              <span className="text-[10px] text-on-surface-variant font-medium">v4.2.0-STABLE</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
