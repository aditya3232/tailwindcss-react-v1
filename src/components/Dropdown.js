// ? artinya if true (menampilkan styling)
// : artinya else false (hidden)
import React from 'react';
import { Link } from 'react-router-dom';

// dropdown terdapat props
const Dropdown = ({ isOpen, toggle }) => {
  return (
    // (arti dari {isOpen ? '' : '') if isOpen maka menampilkan dropdown, else maka hidden dropdown
    // disini juga ada handler onClick
    // jadi intinya, ketika dropdown di klik maka akan menyembunyikan dropdown, karena onClick bernilai True
    // isOpen bernilai awal false
    <div className={isOpen ? 'grid grid-rows-3 text-center items-center bg-yellow-500' : 'hidden'} onClick={toggle}>
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
  );
};

export default Dropdown;
