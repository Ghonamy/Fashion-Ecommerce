import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import Men_Banner from "./Components/Assets/banner_mens.png";
import Women_Banner from "./Components/Assets/banner_women.png";
import Kids_Banner from "./Components/Assets/banner_kids.png";
import NavHeader from "./Components/NavHeader";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory Banner={Men_Banner} Category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory Banner={Women_Banner} Category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory Banner={Kids_Banner} Category="kid" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
