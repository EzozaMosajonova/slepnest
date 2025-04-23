import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 200,
    });

    Aos.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
