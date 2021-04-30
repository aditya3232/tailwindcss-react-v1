// gunakan snippet rafce (penulisan ES6)
// menu Navbar jika tidak dilayar desktop tidak keluar
// flex secara default item akan horizontal
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      {/* Nama website */}
      <Link to="/">EGG</Link>
      {/* icon open dropdown menu */}
      <div className="px-4 cursor-pointer md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      {/* menu Navbar */}
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/">
          Menu
        </Link>
        <Link className="p-4" to="/">
          About
        </Link>
        <Link className="p-4" to="/">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
