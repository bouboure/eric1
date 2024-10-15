import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Store from './pages/Store';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import MobileHome from './pages/mobile/MobileHome';
import MobileBlog from './pages/mobile/MobileBlog';
import MobileStore from './pages/mobile/MobileStore';
import MobileGallery from './pages/mobile/MobileGallery';
import MobileContact from './pages/mobile/MobileContact';
import useDeviceDetect from './hooks/useDeviceDetect';

function App() {
  const { isMobile } = useDeviceDetect();

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header isMobile={isMobile} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
            <Route path="/blog" element={isMobile ? <MobileBlog /> : <Blog />} />
            <Route path="/store" element={isMobile ? <MobileStore /> : <Store />} />
            <Route path="/gallery" element={isMobile ? <MobileGallery /> : <Gallery />} />
            <Route path="/contact" element={isMobile ? <MobileContact /> : <Contact />} />
          </Routes>
        </main>
        <Footer isMobile={isMobile} />
      </div>
    </Router>
  );
}

export default App;