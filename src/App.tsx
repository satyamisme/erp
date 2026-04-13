import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStore } from './store/useUserStore';
import { MainLayout } from './components/templates/MainLayout';
import { Dashboard } from './pages/dashboard';
import { POSCheckout } from './pages/pos';
import { SecureLogin } from './pages/SecureLogin';
import { InventoryMatrix } from './pages/inventory';
import { BatchJobs } from './pages/jobs';
import { RepairsHub } from './pages/repairs';
import { Customer360 } from './pages/customers';
import { InterStoreTransfers } from './pages/transfers';
import { FinanceZReport } from './pages/finance';
import { FeatureGovernance } from './pages/governance';

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
        <Route path="/login" element={<SecureLogin />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terminal" element={<POSCheckout />} />
          <Route path="/inventory" element={<InventoryMatrix />} />
          <Route path="/transfers" element={<InterStoreTransfers />} />
          <Route path="/jobs" element={<BatchJobs />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/repairs" element={<RepairsHub />} />
          <Route path="/customers" element={<Customer360 />} />
          <Route path="/finance" element={<FinanceZReport />} />
          <Route path="/governance" element={<FeatureGovernance />} />

          <Route path="*" element={<div className="p-8">Page Not Found / Under Construction</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
