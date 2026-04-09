
export function Customer360() {
  return (
    <div className="p-8 min-h-full bg-surface-container-low">
      {/* Header / Breadcrumbs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <nav className="flex text-[10px] font-bold text-slate-400 mb-2 tracking-widest uppercase">
            <span className="hover:text-primary cursor-pointer transition-colors">Directory</span>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-primary-container">Customer Profile</span>
          </nav>
          <h2 className="text-3xl font-black text-sky-900 tracking-tight flex flex-wrap items-center gap-4">
            Elena Vance
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full flex items-center">
              <span className="material-symbols-outlined text-sm mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              VIP GOLD TIER
            </span>
          </h2>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-surface-container-lowest text-sky-900 text-xs font-bold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center shadow-sm">
            <span className="material-symbols-outlined mr-2 text-sm">share</span>
            EXPORT DATA
          </button>
          <button className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center">
            <span className="material-symbols-outlined mr-2 text-sm">edit</span>
            MODIFY PROFILE
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Core Identity */}
        <div className="col-span-1 lg:col-span-3 space-y-6">
          {/* Profile Identity Card */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-slate-200/40">
            <div className="h-24 bg-gradient-to-r from-primary to-primary-container"></div>
            <div className="px-6 pb-6 -mt-12">
              <div className="h-24 w-24 rounded-2xl border-4 border-white overflow-hidden shadow-md bg-white mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQGkJXLUXDkh5SdnwO2dX0lnnN58iODEnPdb3vWjsUScr8YeUd6YAl1PthKYjqNC_tNCyt5cQW-s68Y3sXLLrSz8Wot3NsbaBusrB8BVgLtYwm39EFigb1F9tprabFPFoAWarKuVqgMbdNDudVS74cuNXsVGHrrKW3q2cKrqt7elPZSYdXeojLejsUNS9CVPZiI2SajT9pLyCSg4vQrJ663lTPe4evSwTHPnmkjfXe_msqZOW-8jCAk-2iHBCWxVrHAupQg0oVIkA"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Omnichannel Sync</p>
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 border border-green-100" title="WhatsApp Connected">
                      <span className="material-symbols-outlined text-sm">chat</span>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100" title="Email Active">
                      <span className="material-symbols-outlined text-sm">mail</span>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-200" title="SMS Enabled">
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
                    <span className="text-xs font-bold text-secondary">98/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Last Seen</span>
                    <span className="text-xs font-bold text-sky-900">2h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Family Linked Accounts */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-slate-200/40 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest">Family Linking</h3>
              <button className="text-slate-400 hover:text-primary transition-colors">
                 <span className="material-symbols-outlined text-sm">add_circle</span>
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center group cursor-pointer">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvyg7JZKhGbLCiy9gEZng-vtKIu3PqJ3-LGBxX6r8jzS-G9m6zSbhyzlPR_5AtxzHUYAu_iP96avBFKvqXr38useIW1zilpfU_M-9_mWQUYqqgq9zu0qNaxn0fgBDYEaiaK4I2s8TGH7QQSDn3PlzzNt3NIjuJA3jjSg9R8TPKQUT5BVqNIqecZHIvoAqQh91X1TrehDU5kVqFCl0uxkyVlOGbQmgwVoA7rYEcLe9tSpL7E8HMzGjFwiOiC-HGtCV9i2a_zfJkFws"
                  alt="Child Account"
                  className="h-8 w-8 rounded-full border border-slate-200 object-cover mr-3"
                />
                <div>
                  <p className="text-xs font-bold text-sky-900 group-hover:text-primary transition-colors">Eli Vance</p>
                  <p className="text-[10px] text-slate-400">Child Account (Restricted)</p>
                </div>
              </div>
              <div className="flex items-center group cursor-pointer">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3i_DI5JD5COtQbBX_ViEtJndfBrnVu_g8A9Sco6rzM6kbNxzpc7sNkvssZ1dtgWW5k5tBNQW6ORwyDxItSpGOBtwfM8QVITdXW4yfhdWBXXTR3P45HnyXgexpx8n3C1FJNt70lcZneanp2NFO02C1fxVAr6AVHw6sSfNfTopYRWoGMPCIAbk1T8U8jjs530C7IQBHM7cXlQ4KHJLqPSr-ie7jVuIqfLSSEyOLwrf7_RZjXHbCGxq1rzRXYAxrtLXLD13jr8VV_AM"
                  alt="Spouse Account"
                  className="h-8 w-8 rounded-full border border-slate-200 object-cover mr-3"
                />
                <div>
                  <p className="text-xs font-bold text-sky-900 group-hover:text-primary transition-colors">Isaac Kleiner</p>
                  <p className="text-[10px] text-slate-400">Spouse (Authorized Buyer)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Data & Activity */}
        <div className="col-span-1 lg:col-span-6 space-y-6">
          {/* Bento Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-primary p-4 rounded-xl text-white flex flex-col justify-between shadow-sm">
              <p className="text-[10px] font-bold opacity-60 tracking-widest uppercase">LTV Summary</p>
              <h4 className="text-2xl font-black mt-2 tracking-tighter">$14,842.00</h4>
              <div className="flex items-center mt-2 text-[10px] font-bold text-secondary-fixed">
                <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span>
                +12% vs LY
              </div>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Loyalty Points</p>
              <h4 className="text-2xl font-black mt-2 text-sky-900 tracking-tighter">8,250 <span className="text-sm font-medium text-slate-400">pts</span></h4>
              <div className="flex items-center mt-2 text-[10px] font-bold text-tertiary">
                Expires in 42 days
              </div>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Total Repairs</p>
              <h4 className="text-2xl font-black mt-2 text-sky-900 tracking-tighter">14</h4>
              <div className="flex items-center mt-2 text-[10px] font-bold text-slate-500">
                Avg cycle: 3.2 days
              </div>
            </div>
          </div>

          {/* Active Repairs */}
          <div className="bg-surface-container-lowest rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-5 flex justify-between items-center bg-slate-50/50 border-b border-slate-100">
              <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest">Active Repair Pipeline</h3>
              <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">2 IN-PROGRESS</span>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-slate-50 transition-colors">
                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-500">laptop_mac</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <h4 className="text-sm font-bold text-sky-900 truncate">MacBook Pro 16" - Logic Board Repair</h4>
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded whitespace-nowrap self-start sm:self-auto">AWAITING PARTS</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-orange-400 h-full w-[65%]"></div>
                  </div>
                </div>
                <div className="sm:text-right">
                  <p className="text-[10px] font-bold text-slate-400">EST. PICKUP</p>
                  <p className="text-xs font-black text-sky-900">OCT 24</p>
                </div>
              </div>

              <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-slate-50 transition-colors">
                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-500">smartphone</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <h4 className="text-sm font-bold text-sky-900 truncate">iPhone 14 Pro - Screen Swap</h4>
                    <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded whitespace-nowrap self-start sm:self-auto">READY</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-secondary h-full w-[100%]"></div>
                  </div>
                </div>
                <div className="sm:text-right">
                  <p className="text-[10px] font-bold text-slate-400">EST. PICKUP</p>
                  <p className="text-xs font-black text-sky-900">TODAY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase History */}
          <div className="bg-surface-container-lowest rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-5 flex justify-between items-center bg-white border-b border-slate-100">
              <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest">Transaction Ledger</h3>
              <div className="flex space-x-2">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">filter_list</span>
                </button>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">search</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoice</th>
                    <th className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Product / Service</th>
                    <th className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors group cursor-pointer">
                    <td className="px-5 py-3 text-xs font-medium text-slate-500 whitespace-nowrap">12 Sep 2023</td>
                    <td className="px-5 py-3 text-xs font-bold text-primary whitespace-nowrap">INV-88219</td>
                    <td className="px-5 py-3 min-w-[200px]">
                      <p className="text-xs font-bold text-sky-900">Apple Watch Ultra 2</p>
                      <p className="text-[10px] text-slate-400">SKU: AWU2-SIL-49</p>
                    </td>
                    <td className="px-5 py-3 text-xs font-black text-sky-900 text-right whitespace-nowrap">$846.94</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors group cursor-pointer">
                    <td className="px-5 py-3 text-xs font-medium text-slate-500 whitespace-nowrap">04 Aug 2023</td>
                    <td className="px-5 py-3 text-xs font-bold text-primary whitespace-nowrap">INV-87102</td>
                    <td className="px-5 py-3 min-w-[200px]">
                      <p className="text-xs font-bold text-sky-900">Standard Support Care</p>
                      <p className="text-[10px] text-slate-400">Subscription - Annual</p>
                    </td>
                    <td className="px-5 py-3 text-xs font-black text-sky-900 text-right whitespace-nowrap">$199.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors group cursor-pointer">
                    <td className="px-5 py-3 text-xs font-medium text-slate-500 whitespace-nowrap">22 Jun 2023</td>
                    <td className="px-5 py-3 text-xs font-bold text-primary whitespace-nowrap">INV-86544</td>
                    <td className="px-5 py-3 min-w-[200px]">
                      <p className="text-xs font-bold text-sky-900">iPhone 14 Pro Max Case</p>
                      <p className="text-[10px] text-slate-400">Accessories - Leather</p>
                    </td>
                    <td className="px-5 py-3 text-xs font-black text-sky-900 text-right whitespace-nowrap">$59.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-center">
              <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest transition-all">View 11 more entries</button>
            </div>
          </div>
        </div>

        {/* Right Column: Gallery & Technical */}
        <div className="col-span-1 lg:col-span-3 space-y-6">
          {/* Device Gallery */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest mb-4">Device Fleet Gallery</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="group relative rounded-lg overflow-hidden h-24 cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0QDYZcap5WX7VkSWMIhxdGAxSubuLnja9GEk8seObQWckREk6uY09_pf1r_aXEjY64joHHp9uGnxFT4RF61thqunOgKxLHj4BDgYfDlI_qgMOvig3YWxMLAZNZzuOzMQTYu-Pid6hKmW1VPvlJYTlyrelNo1ggIa8_wMaiZ_u9RG9tZIIN0uKQDeTtnl9HPgK6N0gWG4bOq26te5zP6OBtHk2XPOR8hR1-YPu_nZt7nRwgUCjUzZk9zDz480asL1J9Za017tgZwM"
                  alt="iPhone 14 Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] text-white font-bold uppercase">iPhone 14 Pro</span>
                </div>
              </div>
              <div className="group relative rounded-lg overflow-hidden h-24 cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsCkf1yuTK1uCk3xFsKSb3rnr2Yh2R3ctzZt43DQw3-iv2ECIdN0RqJVuiA9FgppddqUtzGoo0iEWTvfSUUq_G9ORLHWLPC0jDg1Fn58gBvLkR071YwyLEvkhHapFZDiY1WTjufkyO6KwXmv3ZQ3eDXIJpKzrIe2t-ltjLIfq55MeooxBujx71AGn8k2qrGs_HILCM82tRYmqW_WeeLOfpjFKt26FsekqguMNOPGMy6l_R2uugIJ1tsi46GASCElMU_cP4i7Wyx1E"
                  alt="MacBook Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] text-white font-bold uppercase">MacBook Pro 16</span>
                </div>
              </div>
              <div className="group relative rounded-lg overflow-hidden h-24 cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ZiiCNwAeqO7wclOukhTrLUs_JDzipz16R29rYLABFbQjwSayYEhh_BurRm0kDQJsWGVO94ggQvDg6vBMPZp8vBBbdJ-zlkV3mR3MYmA8AArs-MRuakK3P6SksJdNpNmJy0nEnlqtQfxFPfSqBybtTqF-agrogN4FYWKgwZ10kuWRCWMwGJ-dbKvA81A8CVlHHiiFt6mZw8obtuL008xObLN9pWWVu1JQoq1QV5bS1pilJ844WXyVMQ-uI82mLxWAARlk617k7ok"
                  alt="Watch Ultra"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] text-white font-bold uppercase">Watch Ultra 2</span>
                </div>
              </div>
              <button className="bg-slate-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-colors cursor-pointer h-24">
                <span className="material-symbols-outlined text-lg">add_a_photo</span>
                <span className="text-[8px] font-bold uppercase mt-1">Add New</span>
              </button>
            </div>
          </div>

          {/* Recent Communications Log */}
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-black text-sky-900 uppercase tracking-widest mb-4">Engagement Log</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 shrink-0">
                  <span className="material-symbols-outlined text-[14px]">mail</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-sky-900">Repair Status Update Sent</p>
                  <p className="text-[10px] text-slate-400">3 hours ago • Automator</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 shrink-0">
                  <span className="material-symbols-outlined text-[14px]">chat</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-sky-900">Incoming WhatsApp Query</p>
                  <p className="text-[10px] text-slate-400">Yesterday, 4:12 PM • Rep: Sarah K.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mr-3 shrink-0">
                  <span className="material-symbols-outlined text-[14px]">call</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-sky-900">Outbound Call - Success</p>
                  <p className="text-[10px] text-slate-400">3 days ago • Rep: Mike R.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Health Check - Technical Meta */}
          <div className="bg-primary-container p-5 rounded-xl text-white shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[10px] font-black uppercase tracking-widest opacity-80">Tech Health Score</h3>
              <span className="text-xs font-bold">82%</span>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-4">
              <div className="bg-secondary h-full w-[82%] shadow-[0_0_8px_rgba(27,109,36,0.8)]"></div>
            </div>
            <p className="text-[10px] leading-relaxed opacity-80">
              Fleet contains 1 outdated OS and 2 devices with nearing battery cycles (iPhone, Watch). Recommended upgrade pitch ready.
            </p>
          </div>
        </div>
      </div>

      {/* Float FAB Contextual Action */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-50 hidden lg:flex">
        <button className="h-14 w-14 rounded-full bg-secondary text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative">
          <span className="material-symbols-outlined text-2xl">add</span>
          <span className="absolute right-16 bg-white text-sky-900 px-3 py-1 rounded shadow-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">New Ticket</span>
        </button>
      </div>
    </div>
  );
}
