import React from 'react';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import QuickLinks from './QuickLinks';

const quickLinks = [
  { href: '/about', text: 'About Us' },
  { href: '/countries', text: 'Countries' },
  { href: '/services', text: 'Services' },
  { href: '/contact', text: 'Contact' }
];

const countryLinks = [
  { href: '/germany', text: 'Germany' },
  { href: '/ukraine', text: 'Ukraine' },
  { href: '/russia', text: 'Russia' },
  { href: '/philippines', text: 'Philippines' }
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">PlanMyNEET</h3>
            <p className="text-primary-200 mb-4 font-body">
              Your trusted partner for MBBS abroad admissions. We help Indian students achieve their
              dreams of becoming successful medical professionals.
            </p>
            <SocialLinks />
          </div>
          
          <QuickLinks title="Quick Links" links={quickLinks} />
          <QuickLinks title="Popular Countries" links={countryLinks} />
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Contact Us</h4>
            <ContactInfo />
          </div>
        </div>
      </div>
      <div className="border-t border-primary-800">
        <div className="container mx-auto px-4 py-6 text-center text-primary-200 font-body">
          © {new Date().getFullYear()} PlanMyNEET. All rights reserved.
        </div>
      </div>
    </footer>
  );
}