
import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'; // Import your CSS styles

const App = () => {
  const [data, setData] = useState([
    { id: 101, title: 'Premium Ergonomic Office Chairs (Set of 50)', status: 'Open', expiry: '2025-05-30', quotes: 4, category: 'Office Furniture', description: 'High-quality ergonomic chairs with adjustable features for corporate offices', image: 'office-chairs' },
    { id: 102, title: 'Enterprise Laptops (Dell/HP, 100 units)', status: 'Pending', expiry: '2025-06-12', quotes: 2, category: 'Electronics', description: 'Latest generation business laptops with minimum 16GB RAM and 512GB SSD', image: 'laptops' },
    // Add other items...
  ]);

  return (
    <div className="App">
      <Header />
      <div className="top-section">
        <Aside />
        <HeroBanner />
      </div>
      <Main data={data} />
      <Footer />
    </div>
  );
};

export default App;
