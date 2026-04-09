
export function POSCheckout() {
  return (
    <div className="p-4 flex gap-4 h-full">
      {/* Left Side: Product Grid */}
      <div className="flex-[3] flex flex-col gap-4 overflow-hidden">
        {/* Categories Bar */}
        <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
          <button className="px-4 py-1.5 bg-primary text-white rounded-full text-xs font-bold whitespace-nowrap">All Items</button>
          <button className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20 rounded-full text-xs font-bold whitespace-nowrap transition-colors">Smartphones</button>
          <button className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20 rounded-full text-xs font-bold whitespace-nowrap transition-colors">Accessories</button>
          <button className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20 rounded-full text-xs font-bold whitespace-nowrap transition-colors">Wearables</button>
          <button className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant hover:bg-primary-container/20 rounded-full text-xs font-bold whitespace-nowrap transition-colors">Tablets</button>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
          {/* Item 1 */}
          <div className="group relative bg-surface-container-lowest border border-slate-100 rounded-xl p-3 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-1">
            <span className="absolute top-2 right-2 material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>push_pin</span>
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined text-4xl">smartphone</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface line-clamp-1">iPhone 15 Pro Max</p>
              <p className="text-[10px] text-slate-400 font-medium">SKU: APP-15PM-256</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm font-black text-sky-900">$1,199.00</span>
              <button className="p-1.5 bg-primary text-white rounded-lg transition-transform active:scale-90">
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group bg-surface-container-lowest border border-slate-100 rounded-xl p-3 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined text-4xl">smartphone</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface line-clamp-1">Galaxy Z Fold 5</p>
              <p className="text-[10px] text-slate-400 font-medium">SKU: SAM-ZF5-512</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm font-black text-sky-900">$1,799.00</span>
              <button className="p-1.5 bg-primary text-white rounded-lg transition-transform active:scale-90">
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group bg-surface-container-lowest border border-slate-100 rounded-xl p-3 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined text-4xl">tablet_mac</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface line-clamp-1">iPad Pro 12.9" M2</p>
              <p className="text-[10px] text-slate-400 font-medium">SKU: APP-IPM2-129</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm font-black text-sky-900">$1,099.00</span>
              <button className="p-1.5 bg-primary text-white rounded-lg transition-transform active:scale-90">
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
              </button>
            </div>
          </div>

          {/* Item 4 */}
          <div className="group relative bg-surface-container-lowest border border-slate-100 rounded-xl p-3 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-1">
            <span className="absolute top-2 right-2 material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>push_pin</span>
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined text-4xl">headphones</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface line-clamp-1">Sony WH-1000XM5</p>
              <p className="text-[10px] text-slate-400 font-medium">SKU: SNY-XM5-BLK</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm font-black text-sky-900">$349.00</span>
              <button className="p-1.5 bg-primary text-white rounded-lg transition-transform active:scale-90">
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
              </button>
            </div>
          </div>

           {/* Item 5 */}
           <div className="group bg-surface-container-lowest border border-slate-100 rounded-xl p-3 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined text-4xl">watch</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface line-clamp-1">Pixel Watch 2</p>
              <p className="text-[10px] text-slate-400 font-medium">SKU: GOO-PW2-LTH</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm font-black text-sky-900">$349.99</span>
              <button className="p-1.5 bg-primary text-white rounded-lg transition-transform active:scale-90">
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
              </button>
            </div>
          </div>

           {/* Item 6 */}
           <div className="group bg-surface-container-lowest border border-slate-100 rounded-xl p-3 flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined text-4xl">watch</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface line-clamp-1">Apple Watch Ultra</p>
              <p className="text-[10px] text-slate-400 font-medium">SKU: APP-WATU-ORG</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm font-black text-sky-900">$799.00</span>
              <button className="p-1.5 bg-primary text-white rounded-lg transition-transform active:scale-90">
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side: Order Summary & Cart */}
      <div className="flex-[1.5] flex flex-col gap-4 bg-surface-container-lowest border-l border-slate-100 p-4 shadow-2xl relative min-w-[300px]">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-black text-sky-900 uppercase tracking-tight">Active Cart</h2>
          <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full font-bold text-slate-500">3 ITEMS</span>
        </div>

        {/* Quick Entry Section */}
        <div className="space-y-3 mb-4">
          <div className="relative">
            <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Quick Entry (IMEI/Serial)</label>
            <div className="flex gap-2">
              <input
                type="text"
                defaultValue="354892100984551"
                className="flex-1 bg-surface-container-low border-none rounded-lg px-3 py-2 text-sm font-mono text-on-surface focus:ring-1 focus:ring-secondary"
              />
              <div className="flex items-center px-3 bg-secondary-container/30 text-secondary rounded-lg">
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>
            <p className="text-[10px] text-secondary font-bold mt-1">Valid IMEI: iPhone 15 Pro Max (Allocated)</p>
          </div>

          <div className="relative">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Scanning next..."
                className="flex-1 bg-surface-container-low border-none rounded-lg px-3 py-2 text-sm font-mono focus:ring-1 focus:ring-error"
              />
              <div className="flex items-center px-3 bg-error-container/30 text-error rounded-lg opacity-50">
                <span className="material-symbols-outlined text-sm">error</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
          {/* Item 1 */}
          <div className="group flex flex-col gap-2 p-3 bg-surface-container-low rounded-xl relative">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center text-slate-300">
                 <span className="material-symbols-outlined">smartphone</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-sky-900 truncate">iPhone 15 Pro Max</p>
                <p className="text-[10px] text-slate-500 font-mono">IMEI: 354892100984551</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black">$1,199.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center bg-white rounded-lg border border-slate-200">
                <button className="px-2 py-1 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xs">remove</span></button>
                <span className="px-2 text-xs font-bold">1</span>
                <button className="px-2 py-1 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xs">add</span></button>
              </div>
              <button className="flex items-center gap-1 px-2 py-1 text-error text-[10px] font-bold uppercase hover:bg-error-container/20 rounded-md transition-colors">
                <span className="material-symbols-outlined text-xs">delete</span>
                Reason
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group flex flex-col gap-2 p-3 bg-surface-container-low rounded-xl relative">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined">headphones</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-sky-900 truncate">Sony WH-1000XM5</p>
                <p className="text-[10px] text-slate-500">Accessories / Wireless</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black">$349.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center bg-white rounded-lg border border-slate-200">
                <button className="px-2 py-1 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xs">remove</span></button>
                <span className="px-2 text-xs font-bold">1</span>
                <button className="px-2 py-1 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xs">add</span></button>
              </div>
              <button className="flex items-center gap-1 px-2 py-1 text-error text-[10px] font-bold uppercase hover:bg-error-container/20 rounded-md transition-colors">
                <span className="material-symbols-outlined text-xs">delete</span>
                Reason
              </button>
            </div>
          </div>
        </div>

        {/* Summary & Payment Matrix */}
        <div className="mt-auto border-t border-slate-100 pt-4 space-y-4">
          <div className="space-y-1 px-2">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Subtotal</span>
              <span>$1,548.00</span>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Tax (8%)</span>
              <span>$123.84</span>
            </div>
            <div className="flex justify-between text-lg font-black text-sky-900 pt-2 border-t border-slate-100 mt-2">
              <span>Total</span>
              <span>$1,671.84</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button className="flex flex-col items-center gap-2 p-3 bg-surface-container-high rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-[10px] font-black uppercase">Cash</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">credit_card</span>
              <span className="text-[10px] font-black uppercase">Card</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-3 bg-surface-container-high rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
              <span className="material-symbols-outlined">account_balance</span>
              <span className="text-[10px] font-black uppercase">BNPL</span>
            </button>
          </div>

          <button className="w-full bg-secondary py-4 text-white rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-secondary/30 active:scale-[0.98] transition-all">
            Complete Checkout
          </button>
        </div>
      </div>

      {/* Floating Quick Actions */}
      <div className="fixed bottom-8 right-[32rem] z-50 hidden xl:block">
        <button className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-2xl">calculate</span>
        </button>
      </div>
    </div>
  );
}
