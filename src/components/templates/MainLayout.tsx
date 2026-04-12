import { Outlet } from 'react-router-dom';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';

export function MainLayout() {
  return (
    <div className="flex h-screen bg-surface-container text-on-surface overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen relative">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
