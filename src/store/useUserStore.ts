import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  role: 'SA' | 'MGR' | 'CSH' | 'TECH' | 'INV' | 'AUD';
}

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (role: User['role']) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  isAuthenticated: false,
  login: (role) => set({
    currentUser: { id: `USR-${Math.floor(Math.random() * 1000)}`, name: 'Demo User', role },
    isAuthenticated: true
  }),
  logout: () => set({ currentUser: null, isAuthenticated: false }),
}));
