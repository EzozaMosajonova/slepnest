import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  useEffect(() => {
    // Sahifa yuklanishi bilan yuqoriga qaytarish
    window.scrollTo(0, 0);

    // AOS animatsiyasini ishga tushirish
    Aos.init({
      duration: 1000,  // Animatsiya davomiyligi
      once: true,  // Faqat bir marta animatsiya bo'lishi
      offset: 200,  // Animatsiya qachon boshlanishi
    });

    Aos.refresh(); // AOS'ni yangilash
  }, []);

  return (
    <div>
      <Header />
        {/* Bu Outlet, router'da belgilangan ichki yo'nalishlarni render qiladi */}
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;
