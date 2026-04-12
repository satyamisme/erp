import { create } from 'zustand';

interface Feature {
  id: number;
  name: string;
  enabled: boolean;
  roles: string[];
}

interface FeatureState {
  features: Feature[];
  init: (features: Feature[]) => void;
  toggleFeature: (id: number) => void;
  hasPermission: (id: number, role: string | undefined) => boolean;
}

export const useFeatureStatusStore = create<FeatureState>((set, get) => ({
  features: [],
  init: (features) => set({ features }),
  toggleFeature: (id) => set((state) => ({
    features: state.features.map(f => f.id === id ? { ...f, enabled: !f.enabled } : f)
  })),
  hasPermission: (id, role) => {
    if (!role) return false;
    if (role === 'SA') return true; // Super Admin overrides all
    const feat = get().features.find(f => f.id === id);
    if (!feat) return false;
    return feat.roles.includes(role);
  }
}));
