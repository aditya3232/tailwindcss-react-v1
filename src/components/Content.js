// imagenya diimport
import React from 'react';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';

const Content = () => {
  return (
    <>
      <div className="menu-card">
        {/* Image 1 */}
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        {/* Nama barang 1 */}
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Bennedict with Bread</h2>
          <p className="mb-2">Roti panggang dengan telur ceplok</p>
          <span>Rp 20.000</span>
        </div>
      </div>
      <div className="menu-card">
        {/* Image 2 */}
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        {/* Nama barang 2 */}
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Muffins dengan telur ceplok</p>
          <span>Rp 40.000</span>
        </div>
      </div>
    </>
  );
};

export default Content;
