import { NavLink, Outlet, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/pos', icon: 'point_of_sale', label: 'POS' },
  { path: '/repair', icon: 'build', label: 'Repair' },
  { path: '/inventory', icon: 'inventory_2', label: 'Inventory' },
  { path: '/governance', icon: 'gavel', label: 'Governance' },
  { path: '/crm', icon: 'groups', label: 'CRM' },
  { path: '/health', icon: 'monitor_heart', label: 'Health' },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden bg-surface text-on-surface">
      {/* SideNavBar */}
      <aside className="w-64 flex flex-col h-full py-4 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 z-50 shrink-0">
        <div className="px-6 mb-8">
          <h1 className="text-lg font-bold text-sky-900 dark:text-sky-400">Lakki Terminal</h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Precision Cockpit</p>
        </div>

        <nav className="flex-1 space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 gap-3 transition-colors duration-150 active:scale-95 ${
                  isActive
                    ? 'border-l-4 border-sky-900 bg-sky-50 dark:bg-sky-900/20 text-sky-900 dark:text-sky-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  {item.icon}
                </span>
                <span className="font-medium text-sm">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="px-2 mt-auto border-t border-slate-100 dark:border-slate-800 pt-4 space-y-1">
          <button className="w-full flex items-center px-4 py-3 gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium text-sm">Settings</span>
          </button>
          <button className="w-full flex items-center px-4 py-3 gap-3 text-error hover:bg-error-container/20 transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* TopNavBar */}
        <header className="h-16 flex items-center justify-between px-6 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/20 dark:border-slate-700/20 z-40 shrink-0">
          <div className="flex items-center gap-6 flex-1">
            <span className="text-xl font-black tracking-tighter text-sky-900 dark:text-sky-100 uppercase hidden md:inline-block">
              Terminal OS
            </span>
            <div className="relative w-full max-w-md group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                type="text"
                placeholder="Omni-search commands..."
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-lg pl-10 pr-4 py-2 text-sm transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:text-sky-700 transition-all">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="p-2 text-slate-500 hover:text-sky-700 transition-all">
              <span className="material-symbols-outlined">admin_panel_settings</span>
            </button>

            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200 dark:border-slate-700">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-sky-900 dark:text-sky-100">John Cashier</p>
                <p className="text-[10px] text-slate-500">Station 04-A</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-primary-container shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeUI4W5awKLnS10N0Ox_nj6b7aOMPDHHrzMxON025lXoVODe-ZejVsNwEoP57qfLDmV8CatxEutH8LKYNJct1IcgoFdv5tfMXmfeiqK5nQCjGqxLkTRBWZbvzsfmbO-4E-iS-_6LpiGdnn8bequ7sG8-QjQU3SsdHi3voDVxjp98S6qNhPHLd1uElr4mpKo_FaJOl0rcYXSClVWsKPC2n_TuklswF10Mzmi5X5jiYrfX_fwO0P2pxhfW1Wv616ltj4tNyogsjTFhk"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto bg-surface relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
