import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Newsletter from "./components/Newsletter";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return(
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
    </div>
  ) 
};

export default App;