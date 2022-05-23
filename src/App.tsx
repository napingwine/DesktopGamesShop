import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs/AboutUs';
import MainPage from './pages/MainPage/MainPage';
import Events from './pages/Events/Events';
import Contacts from './pages/Contacts/Contacts';
import './styles/app.scss';
import Footer from './components/Footer/Footer';
import Catalogue from './pages/Catalogue/Catalogue';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/catalogue' element={<Catalogue/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;