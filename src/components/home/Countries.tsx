import React from 'react';
import { countries } from '../../data/countries';

export default function Countries() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore top countries offering quality medical education at affordable costs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                <div className="flex justify-between text-sm">
                  <span>{country.universities} Universities</span>
                  <span>{country.students} Students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}