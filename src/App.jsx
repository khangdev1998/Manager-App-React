import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ExportPage from "./pages/ExportPage";
import InventoryCheckPage from "./pages/InventoryCheckPage";
import ImportPage from "./pages/ImportPage";
import WarehouseTransferPage from "./pages/WarehouseTransferPage";
import DefectiveGoodsPage from "./pages/DefectiveGoodsPage";
import ImportExportHistoryPage from "./pages/ImportExportHistoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/inventory" element={<InventoryCheckPage />} />
            <Route path="/import" element={<ImportPage />} />
            <Route path="/export" element={<ExportPage />} />
            <Route path="/defective" element={<DefectiveGoodsPage />} />
            <Route path="/transfer" element={<WarehouseTransferPage />} />
            <Route path="/history" element={<ImportExportHistoryPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
