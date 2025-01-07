import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
          alt="Medical students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-900/70" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Your Journey to MBBS Abroad Starts Here
          </h1>
          <p className="text-xl mb-8">
            Expert guidance for Indian students pursuing MBBS abroad. Get personalized counseling, 
            university selection, and complete admission support.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Get Free Counseling
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Explore Countries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}