import { useUserStore } from '../store/useUserStore';

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = useUserStore.getState().token;
  const headers = new Headers(options.headers);

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(url, {
    ...options,
    headers
  });

  if (res.status === 401) {
    useUserStore.getState().logout();
  }

  return res;
};
