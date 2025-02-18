import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductDetail from "./pages/ProductDetail/index.tsx";
import { ShoppingCartProvider } from "./context/index.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage/index.tsx";

createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </BrowserRouter>
  </ShoppingCartProvider>
);
