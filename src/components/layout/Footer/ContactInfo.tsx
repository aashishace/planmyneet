import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
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
  );
}