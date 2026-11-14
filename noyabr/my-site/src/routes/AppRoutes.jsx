import { Routes, Route, BrowserRouter } from 'react-router'
import MainLayout from "../layouts/MainLayout";
import ShopLayout from '../layouts/ShopLayout';
import Home from "../pages/Home/Home";
import Article from "../pages/Article/Article"; 
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Product from "../pages/Product/Product";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route element={<ShopLayout />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}