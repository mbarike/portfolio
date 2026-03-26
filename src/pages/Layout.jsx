import React, { useState } from 'react';

import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';
import Apropos from './Apropos';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import { Outlet } from 'react-router-dom';

function Layout() {


  return (
  
    <div className='app'>
      <Navbar  />
  

      <main className="main">
          <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  
  );
}

export default Layout;