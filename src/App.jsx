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
import { VariationLinkProvider } from "./context";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route
            path="/"
            element={
              <VariationLinkProvider showVariationLink={true}>
                <MainLayout>
                  <ProductPage />
                </MainLayout>
              </VariationLinkProvider>
            }
          />
          <Route
            path="/inventory"
            element={
              <VariationLinkProvider showVariationLink={false}>
                <MainLayout namePage={"Kiểm hàng"}>
                  <InventoryCheckPage />
                </MainLayout>
              </VariationLinkProvider>
            }
          />
          <Route
            path="/import"
            element={
              <VariationLinkProvider showVariationLink={false}>
                <MainLayout namePage={"Nhập hàng"}>
                  <ImportPage />
                </MainLayout>
              </VariationLinkProvider>
            }
          />
          <Route
            path="/export"
            element={
              <VariationLinkProvider showVariationLink={false}>
                <MainLayout namePage={"Xuất hàng"}>
                  <ExportPage />
                </MainLayout>
              </VariationLinkProvider>
            }
          />
          <Route
            path="/defective"
            element={
              <VariationLinkProvider showVariationLink={false}>
                <MainLayout namePage={"Hàng lỗi"}>
                  <DefectiveGoodsPage />
                </MainLayout>
              </VariationLinkProvider>
            }
          />
          <Route
            path="/transfer"
            element={
              <VariationLinkProvider showVariationLink={false}>
                <MainLayout namePage={"Chuyển kho"}>
                  <WarehouseTransferPage />
                </MainLayout>
              </VariationLinkProvider>
            }
          />
          <Route
            path="/history"
            element={
              <VariationLinkProvider showVariationLink={false}>
                <MainLayout namePage={"Lịch sử xuất nhập"}>
                  <ImportExportHistoryPage />
                </MainLayout>
              </VariationLinkProvider>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
