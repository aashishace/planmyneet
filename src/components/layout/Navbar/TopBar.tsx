import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary-900 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm font-body">
        <div className="flex items-center gap-4">
          <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-primary-200">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@planmyneet.com" className="flex items-center gap-1 hover:text-primary-200">
            <Mail size={14} />
            <span>info@planmyneet.com</span>
          </a>
        </div>
        <div className="flex gap-4">
          <a href="/login" className="hover:text-primary-200">Student Login</a>
          <a href="/register" className="hover:text-primary-200">Register</a>
        </div>
      </div>
    </div>
  );
}