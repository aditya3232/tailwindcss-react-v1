// useState & useEffect merupakan Hooks
// useState akan mengolah data didalam komponen itu sendiri
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  // isOpen merupakan tempat menyimpan data awal (atau data saat ini)
  // setIsOpen merupakan fungsi untuk memperbarui data awal yg terletak di variabel toggle
  // (false) merupakan data awal dari isOpen

  const [isOpen, setIsOpen] = useState(false);

  // ini merupakan fungsi untuk memperbarui data saat ini
  // fungsi ini akan  menjadi opposite data isOpen (akan menjadi berlawanan dengan data isOpen)
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect adalah efek samping dari sebuah fungsi
  // useEffect disini menghilangkan tampilan dropdown menu ketika layar dilebarkan
  // karena dropdown menu tidak akan hilang ketika sudah terender
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i, resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      {/* navbar & dropdown akan mempassing data (toggle/isOpen) ke komponen mereka masing" */}
      <Navbar toggle={toggle} />
      {/* dropdown displaynya akan hidden ketika diklik */}
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

// catatan useEffect

// Ketika Anda ingin melakukan sesuatu setelah setiap render seperti efek samping (yaitu mengambil data dari API),
// Anda dapat meneruskan efek tersebut ke useEffecthook,
// kemudian React akan membuat catatan tentang fungsi yang Anda berikan ke hook dan itu akan memanggil fungsi itu setelah melakukan pembaruan DOM

// catatan router

// Route bisa dituliskan seperti ini <Route>...</Route>
// didalam titik" ini diisi dengan komponen apa yg akan ditampilkan dalam path yg ditentukan
// dengan begitu kita dapat menerapkan Route ke komponen 404 Not Found yg tidak menampilkan komponen navbar dan footer

// catatan <NavLink to="">...</NavLink>: digunakan untuk membuat tombol link menuju path
