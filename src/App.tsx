import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Countries from './components/home/Countries';
import Testimonials from './components/home/Testimonials';
import Footer from './components/layout/Footer';
import MbbsAbroad from './pages/MbbsAbroad';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Countries />
              <Testimonials />
            </>
          } />
          <Route path="/mbbs-abroad" element={<MbbsAbroad />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;