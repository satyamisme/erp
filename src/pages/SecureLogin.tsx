import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';
import { Button } from '../components/atoms/Button';
import { Input } from '../components/atoms/Input';

const ROLES = [
  { value: 'SA', label: 'Super Admin' },
  { value: 'MGR', label: 'Store Manager' },
  { value: 'CSH', label: 'Cashier' },
  { value: 'TECH', label: 'Technician' },
  { value: 'INV', label: 'Inventory Staff' },
  { value: 'AUD', label: 'Security Auditor' },
];

export function SecureLogin() {
  const login = useUserStore(s => s.login);
  const navigate = useNavigate();
  const [role, setRole] = useState<'SA' | 'MGR' | 'CSH' | 'TECH' | 'INV' | 'AUD'>('SA');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);

    // Role-based routing
    if (role === 'TECH') navigate('/repairs');
    else if (role === 'INV') navigate('/inventory');
    else if (role === 'SA' || role === 'MGR') navigate('/dashboard');
    else navigate('/terminal');
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-surface-container selection:bg-primary-container selection:text-primary overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>
        </div>

        <main className="w-full max-w-[420px] z-10 flex flex-col gap-8 mx-4">
            <header className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-primary text-3xl icon-filled">terminal</span>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-black tracking-tighter text-primary uppercase">Lakki Terminal</h1>
                    <p className="text-[11px] font-semibold tracking-[0.1em] text-outline uppercase">Precision Cockpit • Auth Layer</p>
                </div>
            </header>

            <form onSubmit={handleLogin} className="glass-modal p-8 rounded-xl flex flex-col gap-6 shadow-2xl border border-outline-variant/30 bg-surface/80 backdrop-blur-md">
                <div>
                    <h2 className="text-lg font-bold text-on-surface tracking-tight mb-1">Operator Authentication</h2>
                    <p className="text-xs text-on-surface-variant">Initialize secure session via Terminal OS protocol.</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-outline uppercase tracking-wider pl-1">Operator Role (Demo)</label>
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value as any)}
                          className="w-full bg-surface-container hover:bg-surface-container-highest focus:bg-surface border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary/50 rounded-lg py-3 px-4 text-sm text-on-surface transition-all outline-none"
                        >
                            {ROLES.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                        </select>
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center pl-1 pr-1">
                          <label className="text-[10px] font-bold text-outline uppercase tracking-wider">Access Key</label>
                          <a href="#" className="text-[10px] font-bold text-primary hover:underline">LOST KEY?</a>
                        </div>
                        <Input icon="key" type="password" placeholder="••••••••••••" defaultValue="1234" />
                    </div>
                </div>

                <div className="bg-surface-container-highest/50 p-3 rounded-lg flex items-start gap-3 border-l-2 border-primary">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">shield_person</span>
                    <div>
                        <p className="text-xs font-bold text-on-surface">MFA Active (ID 303)</p>
                        <p className="text-[10px] text-on-surface-variant leading-tight">Hardware token bypassed for demo.</p>
                    </div>
                </div>

                <Button type="submit" className="w-full group py-6 text-xs uppercase tracking-widest gap-2">
                    INITIALIZE COCKPIT
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Button>
            </form>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 p-8 flex justify-between items-end pointer-events-none z-0">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <div className="text-[10px] font-mono text-outline/40 leading-none">
                        BRANCH: <span className="text-primary font-bold">STABLE/04-VULCAN</span>
                    </div>
                    <div className="h-px w-8 bg-outline-variant/20"></div>
                    <div className="text-[10px] font-mono text-outline/40 leading-none">
                        REV: <span className="text-on-surface font-bold">882.04.11</span>
                    </div>
                </div>
                <div className="text-[9px] text-outline/30 uppercase tracking-[0.2em] font-medium">Lakki Security Systems © 2024</div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full border border-outline-variant/10">
                <span className="material-symbols-outlined text-[14px] text-secondary icon-filled">verified_user</span>
                <span className="text-[10px] font-black text-on-surface tracking-tight">K8S CLUSTER SECURE</span>
            </div>
        </footer>
    </div>
  );
}
