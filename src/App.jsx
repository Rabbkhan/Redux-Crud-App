import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/cart' element={<Cart/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
