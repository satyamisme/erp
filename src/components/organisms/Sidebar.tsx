import { Link, useLocation } from 'react-router-dom';
import { useUserStore } from '../../store/useUserStore';
import { cn } from '../../lib/utils';

export function Sidebar() {
  const { pathname } = useLocation();
  const logout = useUserStore(s => s.logout);
  const user = useUserStore(s => s.currentUser);

  const links = [
    { to: '/dashboard', icon: 'dashboard', label: 'Overview' },
    { to: '/terminal', icon: 'point_of_sale', label: 'Terminal' },
    { to: '/repairs', icon: 'build', label: 'Repairs' },
    { to: '/inventory', icon: 'inventory_2', label: 'Inventory' },
    { to: '/transfers', icon: 'local_shipping', label: 'Logistics' },
    { to: '/customers', icon: 'groups', label: 'CRM' },
    { to: '/finance', icon: 'account_balance', label: 'Finance' },
    { to: '/governance', icon: 'gavel', label: 'Governance' },
  ];

  return (
    <aside className="w-64 bg-surface-lowest border-r border-outline-variant/20 flex flex-col h-full shrink-0 shadow-sm z-50">
      <div className="p-6 pb-8">
        <h1 className="text-xl font-black text-primary tracking-tighter uppercase">Terminal OS</h1>
        <p className="text-[10px] text-outline font-bold tracking-widest uppercase mt-1">Station 01</p>
      </div>

      <nav className="flex-1 overflow-y-auto space-y-1 px-3">
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={cn(
              "flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors group",
              pathname.startsWith(l.to)
                ? "bg-primary/10 text-primary font-bold border-l-4 border-primary"
                : "text-on-surface-variant hover:bg-surface-container"
            )}
          >
            <span className={cn("material-symbols-outlined mr-3", pathname.startsWith(l.to) && "icon-filled")}>
              {l.icon}
            </span>
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-outline-variant/20 mt-auto flex justify-between items-center bg-surface-container-low/50">
        <div>
          <p className="text-xs font-bold text-on-surface">{user?.name}</p>
          <p className="text-[10px] text-secondary font-bold uppercase">{user?.role}</p>
        </div>
        <button onClick={logout} className="text-outline hover:text-error transition-colors" title="Logout">
          <span className="material-symbols-outlined">logout</span>
        </button>
      </div>
    </aside>
  );
}
