import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-primary-800 font-display tracking-tight">
            PlanMyNEET
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-primary-700 font-body">Home</a>
            <a href="/mbbs-abroad" className="text-gray-700 hover:text-primary-700 font-body">MBBS Abroad</a>
            <a href="/about" className="text-gray-700 hover:text-primary-700 font-body">About Us</a>
            <a href="/services" className="text-gray-700 hover:text-primary-700 font-body">Services</a>
            <a href="/neet-predictor" className="text-gray-700 hover:text-primary-700 font-body">NEET Rank Predictor</a>
            <a href="/contact" className="text-gray-700 hover:text-primary-700 font-body">Contact</a>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition font-body">
              Get Counseling
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-700 hover:text-primary-700 font-body">Home</a>
              <a href="/mbbs-abroad" className="text-gray-700 hover:text-primary-700 font-body">MBBS Abroad</a>
              <a href="/about" className="text-gray-700 hover:text-primary-700 font-body">About Us</a>
              <a href="/services" className="text-gray-700 hover:text-primary-700 font-body">Services</a>
              <a href="/neet-predictor" className="text-gray-700 hover:text-primary-700 font-body">NEET Rank Predictor</a>
              <a href="/contact" className="text-gray-700 hover:text-primary-700 font-body">Contact</a>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition font-body">
                Get Counseling
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}