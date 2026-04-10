
export function ZReportFinanceDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-surface text-on-surface">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col h-full py-6 bg-surface-container-lowest border-r border-slate-200 z-50 shrink-0">
        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-white">
            <span className="material-symbols-outlined">security</span>
          </div>
          <div>
            <h1 className="text-sm font-black text-sky-900 tracking-widest uppercase">Root Admin</h1>
            <p className="text-[10px] text-slate-400 font-medium">Security Level 0</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2 px-4">
          <a href="#" className="flex items-center px-4 py-2.5 gap-3 text-slate-600 hover:bg-slate-50 rounded-lg font-bold text-xs tracking-wider uppercase transition-colors">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2.5 gap-3 text-slate-600 hover:bg-slate-50 rounded-lg font-bold text-xs tracking-wider uppercase transition-colors">
            <span className="material-symbols-outlined text-[20px]">group</span>
            Users
          </a>
          <a href="#" className="flex items-center px-4 py-2.5 gap-3 text-slate-600 hover:bg-slate-50 rounded-lg font-bold text-xs tracking-wider uppercase transition-colors">
            <span className="material-symbols-outlined text-[20px]">key</span>
            Permissions
          </a>
          <a href="#" className="flex items-center px-4 py-2.5 gap-3 text-blue-700 bg-blue-50 rounded-lg font-bold text-xs tracking-wider uppercase transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Compliance
          </a>
          <a href="#" className="flex items-center px-4 py-2.5 gap-3 text-slate-600 hover:bg-slate-50 rounded-lg font-bold text-xs tracking-wider uppercase transition-colors">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
            Terminal
          </a>
          <a href="#" className="flex items-center px-4 py-2.5 gap-3 text-slate-600 hover:bg-slate-50 rounded-lg font-bold text-xs tracking-wider uppercase transition-colors">
            <span className="material-symbols-outlined text-[20px]">inventory_2</span>
            Archives
          </a>
        </nav>

        <div className="px-4 mt-auto space-y-2">
          <a href="#" className="flex items-center px-4 py-2.5 gap-3 text-slate-600 hover:bg-slate-50 rounded-lg font-bold text-xs tracking-wider uppercase transition-colors">
            <span className="material-symbols-outlined text-[20px]">help</span>
            Support
          </a>
          <a href="#" className="flex items-center px-4 py-2.5 gap-3 text-slate-600 hover:bg-slate-50 rounded-lg font-bold text-xs tracking-wider uppercase transition-colors">
            <span className="material-symbols-outlined text-[20px]">history</span>
            Logs
          </a>
          <div className="pt-4">
            <button className="w-full bg-inverse-surface text-inverse-on-surface py-3 rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-slate-800 transition-colors shadow-md">
              Lock Terminal
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-white">
        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-8 bg-white border-b border-slate-200 z-40 shrink-0">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-black tracking-tight text-on-surface">Lakki Terminal OS</h2>
            <nav className="hidden lg:flex gap-8">
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-sky-900 transition-colors">Governance</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-sky-900 transition-colors">Security</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-sky-900 transition-colors">HR</a>
              <a href="#" className="text-sm font-bold text-blue-700 border-b-2 border-blue-700 pb-1">Audit Logs</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input
                type="text"
                placeholder="Search records..."
                className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 font-medium"
              />
            </div>
            <button className="text-slate-600 hover:text-sky-900 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0.5 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="text-slate-600 hover:text-sky-900 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">
              Create Audit
            </button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">Financial Domain</p>
              <h1 className="text-3xl font-black text-on-surface tracking-tight">Daily Z-Report &amp; Health</h1>
              <p className="text-sm font-medium text-slate-600 mt-2">Cycle End: October 24, 2023 &bull; 23:59:59 GST</p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-slate-200 text-slate-700 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-slate-50 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[18px]">print</span>
                Re-Print X-Report
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-white rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-secondary/90 transition-colors shadow-md">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Finalize Z-Report
              </button>
            </div>
          </div>

          {/* 3-Column Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

            {/* Column 1: Gross Sales */}
            <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500">Gross Terminal Sales</h3>
                <span className="material-symbols-outlined text-secondary font-bold text-[20px]">trending_up</span>
              </div>
              <div className="mb-4">
                <h2 className="text-5xl font-black text-primary tracking-tighter">AED 42,901.50</h2>
              </div>
              <div className="flex items-center gap-3 mb-10">
                <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[11px] font-bold">
                  +12.4% vs Prev Day
                </span>
                <span className="text-[11px] font-medium text-slate-500">214 Transactions</span>
              </div>

              <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
                <div className="flex justify-between items-center text-sm font-medium text-slate-600">
                  <span>Tax Collected (VAT 5%)</span>
                  <span className="font-bold text-on-surface">AED 2,145.08</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-600">
                  <span>Discounts &amp; Vouchers</span>
                  <span className="font-bold text-error">- AED 840.00</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-medium text-slate-600">Net Liquidable Revenue</span>
                  <span className="text-lg font-black text-primary">AED 39,916.42</span>
                </div>
              </div>
            </div>

            {/* Column 2: Payment Methods */}
            <div className="bg-primary-fixed/20 rounded-xl p-8 flex flex-col">
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-700 mb-8">Payment Methods</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <span className="material-symbols-outlined">credit_card</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-on-surface">Card / Digital</span>
                      <span className="text-xs font-bold text-on-surface">AED 28,450.00</span>
                    </div>
                    <div className="w-full bg-white/60 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-on-surface">Cash in Drawer</span>
                      <span className="text-xs font-bold text-on-surface">AED 12,110.50</span>
                    </div>
                    <div className="w-full bg-white/60 h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                    <span className="material-symbols-outlined">storefront</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-on-surface">Credit / AR</span>
                      <span className="text-xs font-bold text-on-surface">AED 2,341.00</span>
                    </div>
                    <div className="w-full bg-white/60 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full rounded-full" style={{ width: '6%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Final Report */}
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-slate-300/40 rounded-2xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>picture_as_pdf</span>
              </div>
              <h2 className="text-xl font-bold text-primary tracking-tight mb-3">Generate Final<br/>Report</h2>
              <p className="text-xs font-medium text-slate-500 mb-8 max-w-[200px] leading-relaxed">
                Archive daily compliance &amp; tax liability data
              </p>
              <button className="w-full py-3.5 bg-primary text-white rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors shadow-md mb-4">
                Download Z-PDF
              </button>
              <p className="text-[10px] italic text-slate-400 font-medium">
                Sent automatically to<br/>governance@lakki.os
              </p>
            </div>

          </div>

          {/* 2-Column Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Manual Expense Logging */}
            <div className="lg:col-span-2 bg-primary-fixed/10 rounded-xl p-8 relative">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-primary tracking-tight">Manual Expense Logging</h2>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-2">Expense Category</label>
                  <div className="relative">
                    <select className="w-full bg-white border-none rounded-lg py-3 px-4 text-sm font-medium text-on-surface shadow-sm focus:ring-2 focus:ring-primary/20 appearance-none">
                      <option>Supplier Payout</option>
                      <option>Office Supplies</option>
                      <option>Logistics / Transport</option>
                      <option>Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-2">Amount (AED)</label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="w-full bg-white border-none rounded-lg py-3 px-4 text-sm font-medium text-on-surface shadow-sm focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-2">Transaction Description</label>
                <textarea
                  placeholder="Describe the reason for this cash outflow..."
                  className="w-full bg-white border-none rounded-lg py-3 px-4 text-sm font-medium text-on-surface shadow-sm focus:ring-2 focus:ring-primary/20 min-h-[100px] resize-none"
                ></textarea>
              </div>
            </div>

            {/* Recent Evidence */}
            <div className="bg-surface-container-low rounded-xl p-8 relative">
              <h2 className="text-xl font-bold text-primary tracking-tight mb-8">Recent Evidence</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                  <div className="h-32 bg-slate-800 relative overflow-hidden">
                    {/* Placeholder for receipt image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white/20 text-4xl">receipt_long</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Office Supplies</p>
                    <p className="text-sm font-bold text-primary">AED 145.00</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                  <div className="h-32 bg-slate-800 relative overflow-hidden">
                    {/* Placeholder for invoice image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white/20 text-4xl">description</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Logistics Fee</p>
                    <p className="text-sm font-bold text-primary">AED 890.25</p>
                  </div>
                </div>
              </div>

              {/* Floating Add Button */}
              <button className="absolute -bottom-4 -right-4 w-14 h-14 bg-secondary text-white rounded-xl shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-2xl">add</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
