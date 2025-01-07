import React from 'react';
import { Phone, Mail, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <div className="bg-indigo-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@planmyneet.com" className="flex items-center gap-1">
              <Mail size={14} />
              <span>info@planmyneet.com</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="/login">Student Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-indigo-900">PlanMyNEET</div>
            <div className="hidden md:flex gap-6">
              <a href="/" className="text-gray-700 hover:text-indigo-900">Home</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-900">About Us</a>
              <a href="/countries" className="text-gray-700 hover:text-indigo-900">Countries</a>
              <a href="/services" className="text-gray-700 hover:text-indigo-900">Services</a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-900">Contact</a>
            </div>
            <button className="md:hidden">
              <Menu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}