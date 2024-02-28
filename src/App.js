import './App.css';


import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Shop from "./Pages/Shop";
import Product from './Pages/Product';
import ShopCategory  from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoinSingup from './Pages/LoginSingup';

import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from "./components/Assets/banner_kids.png"
import Footer from './components/Footer/Footer';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />}/>
      <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />}/>

      <Route path="Product" element={<Product/>}>
         <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoinSingup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
