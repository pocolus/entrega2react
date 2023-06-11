// import Navbar from "./components/layout/navbar/Navbar";
// import FetchingDeDatosContainer from "./components/pages/fetchingDeDatos/FetchingDeDatosContainer";

import Layout from "./components/layout/Layout";
import ProductsListContainer from "./components/pages/productsList/ProductsListContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProductsListContainer />} />

        <Route path="/category/:categoryName" element={<ProductsListContainer />} />

        <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
        
        <Route path="/carrito" element={<CartContainer />} />
      </Route>

      <Route path="*" element={<h1>404 no Existe</h1>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;


 // <div>
    //  <Navbar />

    //   <ProductsListContainer />
    //   <ProductDetailContainer />
    //   {/* <FetchingDeDatosContainer /> */}
    // </div>