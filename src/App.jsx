import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;