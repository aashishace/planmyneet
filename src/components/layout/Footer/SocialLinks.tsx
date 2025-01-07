import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="#" className="hover:text-indigo-200"><Facebook size={20} /></a>
      <a href="#" className="hover:text-indigo-200"><Twitter size={20} /></a>
      <a href="#" className="hover:text-indigo-200"><Instagram size={20} /></a>
      <a href="#" className="hover:text-indigo-200"><Linkedin size={20} /></a>
    </div>
  );
}