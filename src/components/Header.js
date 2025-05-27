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
      <button className="btn btn-primary">Login / Sign Up</button>
    </header>
  );
};

export default Header;
