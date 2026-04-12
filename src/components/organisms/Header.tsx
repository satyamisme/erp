import { useLocation } from 'react-router-dom';
import { useUserStore } from '../../store/useUserStore';

export function Header() {
  const { pathname } = useLocation();
  const user = useUserStore(s => s.currentUser);

  // Capitalize path for simple title
  const title = pathname.split('/')[1]?.toUpperCase() || 'DASHBOARD';

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 sticky top-0 z-40 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-black text-primary tracking-tight">{title}</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group cursor-pointer hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
          <div className="w-64 bg-surface-container border border-outline-variant/20 rounded-full py-1.5 pl-10 pr-4 text-xs text-outline group-hover:border-primary/50 transition-colors flex justify-between items-center">
            Search (Ctrl+K)...
            <kbd className="bg-surface-container-highest px-1.5 rounded text-[9px] font-bold">⌘K</kbd>
          </div>
        </div>

        <div className="flex items-center gap-4 border-l border-outline-variant/20 pl-6">
          <button className="relative text-outline hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-sky-900 leading-none">Lakki Terminal</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{user?.role} Level</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center font-bold text-primary text-xs shadow-sm ring-1 ring-primary/20">
              {user?.role || 'US'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
