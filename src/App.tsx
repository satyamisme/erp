import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

// Screens
import { POSCheckout } from './pages/POSCheckout';
import { ExecutiveCockpit } from './pages/ExecutiveCockpit';
import { InventoryMatrix } from './pages/InventoryMatrix';
import { BatchJobManager } from './pages/BatchJobManager';
import { CommandPalette } from './pages/CommandPalette';
import { RepairHub } from './pages/RepairHub';
import { SecureLogin } from './pages/SecureLogin';
import { Customer360 } from './pages/Customer360';
import { InterStoreTransfer } from './pages/InterStoreTransfer';
import { GovernanceSecurity } from './pages/GovernanceSecurity';
import { SystemHealth } from './pages/SystemHealth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SecureLogin />} />

        {/* Main App Layout Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/pos" replace />} />

          <Route path="pos" element={<POSCheckout />} />
          <Route path="repair" element={<RepairHub />} />

          <Route path="inventory">
            <Route index element={<InventoryMatrix />} />
            <Route path="transfer" element={<InterStoreTransfer />} />
          </Route>

          <Route path="governance" element={<GovernanceSecurity />} />

          <Route path="crm">
            <Route index element={<Customer360 />} />
          </Route>

          <Route path="health" element={<SystemHealth />} />

          <Route path="executive" element={<ExecutiveCockpit />} />
          <Route path="batch" element={<BatchJobManager />} />
          <Route path="command" element={<CommandPalette />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
