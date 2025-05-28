
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">Hilsourcenter</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Group Buying</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
      </nav>
      <div className="button-group">
        <button className="btn btn-primary">Buyer</button>
        <button className="btn btn-secondary">Supplier</button>
      </div>
    </header>
  );
};

export default Header;
