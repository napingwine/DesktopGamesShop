import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import MainPage from './pages/MainPage';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import Footer from './components/Footer/Footer';
import Catalogue from './pages/Catalogue/Catalogue';
import Menu from './components/Menu/Menu';
import './styles/app.scss';
import Cart from './pages/Cart/Cart';

const RoutesSection = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/events' element={<Events />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/catalogue' element={<Catalogue />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
};

const App = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    burgerMenuOpen ? document.body.classList.add('popup-active') : document.body.classList.remove('popup-active')
  }, [burgerMenuOpen]);

  return (
    <div className='app'>
      <Header setBurgerMenuOpen={setBurgerMenuOpen} burgerMenuOpen={burgerMenuOpen}/>
      <Navbar setBurgerMenuOpen={setBurgerMenuOpen} burgerMenuOpen={burgerMenuOpen} />
      <main className="main-content">
        <RoutesSection />
      </main>
      <Footer />
      <div className={`menu ${burgerMenuOpen ? 'active' : 'inert'}`} onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
        {burgerMenuOpen && <Menu burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} />}
      </div>
    </div>
  );
};

export default App;
