import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from './store/useUserStore';
import { MainLayout } from './components/templates/MainLayout';
import { Dashboard } from './pages/dashboard';
import { POSCheckout } from './pages/pos';

const AuthPlaceholder = () => {
    const login = useUserStore(s => s.login);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-surface-container gap-4">
            <h1 className="text-3xl font-black text-primary">Terminal Auth</h1>
            <button onClick={() => login('SA')} className="px-6 py-3 bg-primary text-white font-bold rounded">Login as Super Admin</button>
        </div>
    );
};
const FeatureStatus = () => <div className="p-8">Governance & Feature Matrix</div>;
const Inventory = () => <div className="p-8">Inventory Management</div>;
const Repairs = () => <div className="p-8">Repair Hub</div>;
const Customers = () => <div className="p-8">CRM & Customer 360</div>;
const Finance = () => <div className="p-8">Z-Report & Finance</div>;
const Transfers = () => <div className="p-8">Inter-Store Transfers</div>;
const Purchases = () => <div className="p-8">Supply Chain & Purchases</div>;

const ProtectedRoute = () => {
    const isAuth = useUserStore(s => s.isAuthenticated);
    if (!isAuth) return <Navigate to="/login" replace />;
    return <MainLayout />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPlaceholder />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terminal" element={<POSCheckout />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/governance" element={<FeatureStatus />} />

          <Route path="*" element={<div className="p-8">Page Not Found / Under Construction</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
