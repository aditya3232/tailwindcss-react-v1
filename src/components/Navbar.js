// gunakan snippet rafce (penulisan ES6)
// menu Navbar jika tidak dilayar desktop tidak keluar
// flex secara default item akan horizontal
import React from 'react';
import { Link } from 'react-router-dom';

// komponen navbar ada props toggle. sehingga navbar akan dapat melempar data ke toggle di komponen app.js
// agar dapat terhubung, dengan app.js, maka toggle juga harus dilempar di <Navbar toggle={toggle} />
const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      {/* Nama website */}
      <Link to="/" className="pl-8">
        ENDOK
      </Link>
      {/* icon open dropdown menu. diicon ini ada handler onClik yg memanggil fungsi toggle */}
      {/* svg hanya akan muncul ketika layar dibawah md, jika md atau diatasnya maka hidden */}
      {/* ketika svg diklik maka akan menampilkan dropdown, */}
      {/* karena variabel toggle berisi isOpen, yang mana isOpen bernilai true ketika diklik, */}
      {/* sehingga akan menampilkan dropdown */}
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      {/* (md:block hidden) artinya akan menyembunyikan link ketika layar md*/}

      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/menu">
          Menu
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
