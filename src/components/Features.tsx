import React from 'react';
import { GraduationCap, Globe, BadgeCheck, Users } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: "Expert Counseling",
    description: "Get guidance from experienced education counselors specialized in medical admissions abroad"
  },
  {
    icon: Globe,
    title: "Global Universities",
    description: "Access to top medical universities across multiple countries with quality education"
  },
  {
    icon: BadgeCheck,
    title: "Verified Programs",
    description: "All universities and programs are MCI/NMC approved and globally recognized"
  },
  {
    icon: Users,
    title: "Complete Support",
    description: "End-to-end assistance from application to visa processing and travel arrangements"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PlanMyNEET?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive support to make your dream of studying MBBS abroad a reality
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <feature.icon className="w-12 h-12 text-indigo-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}