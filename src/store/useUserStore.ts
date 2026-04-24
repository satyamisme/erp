import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  role: 'SA' | 'MGR' | 'CSH' | 'TECH' | 'INV' | 'AUD';
}

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  isAuthenticated: false,
  token: null,
  login: (user, token) => set({
    currentUser: user,
    token,
    isAuthenticated: true
  }),
  logout: () => set({ currentUser: null, token: null, isAuthenticated: false }),
}));
