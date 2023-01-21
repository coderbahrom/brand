import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DUMMY_PRODUCTS } from './data/data';
import HomePage from './pages/HomePage';
import SingleProduct from './pages/SingleProduct';
import Orders from './pages/Orders';
function App() {
  const [dummy, setDummy] = useState([]);
  const [searched, setSearched] = useState('');

  useEffect(() => {
    let result = DUMMY_PRODUCTS.filter((item) => {
      return item.company.includes(searched);
    });
    setDummy(result);
    console.log(searched);
  }, [searched]);

  return (
    <div className=''>
      <Navbar setSearched={setSearched} />
      <Routes>
        <Route
          exact
          path='/*'
          element={<HomePage dummy={dummy} setDummy={setDummy} />}
        />
        <Route exact path='products/:id' element={<SingleProduct />} />
        <Route exact path='orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
