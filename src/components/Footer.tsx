import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PlanMyNEET</h3>
            <p className="text-indigo-200 mb-4">
              Your trusted partner for MBBS abroad admissions. We help Indian students achieve their
              dreams of becoming successful medical professionals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-200"><Facebook size={20} /></a>
              <a href="#" className="hover:text-indigo-200"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-200"><Instagram size={20} /></a>
              <a href="#" className="hover:text-indigo-200"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-indigo-200 hover:text-white">About Us</a></li>
              <li><a href="/countries" className="text-indigo-200 hover:text-white">Countries</a></li>
              <li><a href="/services" className="text-indigo-200 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-indigo-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Countries</h4>
            <ul className="space-y-2">
              <li><a href="/germany" className="text-indigo-200 hover:text-white">Germany</a></li>
              <li><a href="/ukraine" className="text-indigo-200 hover:text-white">Ukraine</a></li>
              <li><a href="/russia" className="text-indigo-200 hover:text-white">Russia</a></li>
              <li><a href="/philippines" className="text-indigo-200 hover:text-white">Philippines</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                info@planmyneet.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                123, Medical Center Road,
                Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-indigo-800">
        <div className="container mx-auto px-4 py-6 text-center text-indigo-200">
          © {new Date().getFullYear()} PlanMyNEET. All rights reserved.
        </div>
      </div>
    </footer>
  );
}