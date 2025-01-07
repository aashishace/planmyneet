import React, { useState } from 'react';
import { 
  Globe, 
  Award, 
  Clock, 
  DollarSign, 
  MapPin, 
  Building, 
  Users, 
  BookOpen, 
  ChevronDown,
  GraduationCap,
  Landmark,
  Wallet,
  Home,
  Plane
} from 'lucide-react';
import { countries } from '../data/universities';
import type { Country, University } from '../types';

export default function MbbsAbroad() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find(c => c.name === event.target.value);
    setSelectedCountry(country || null);
    setSelectedUniversity(null);
  };

  const handleUniversityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const uni = selectedCountry?.universities.find(u => u.id === event.target.value);
    setSelectedUniversity(uni || null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Medical University"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-20 h-20 text-blue-300" strokeWidth={1.5} />
            </div>
            <h1 className="text-6xl font-bold mb-6 font-display">Study MBBS Abroad</h1>
            <p className="text-xl mb-12 font-body text-blue-100">Your Gateway to Global Medical Education</p>
            
            <div className="space-y-4 backdrop-blur-sm bg-white/10 p-8 rounded-2xl">
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
                <select
                  className="w-full max-w-md pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 font-body shadow-lg"
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country.name} value={country.name}>{country.name}</option>
                  ))}
                </select>
              </div>
              
              {selectedCountry && (
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />
                  <select
                    className="w-full max-w-md pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 font-body shadow-lg"
                    onChange={handleUniversityChange}
                  >
                    <option value="">Select University</option>
                    {selectedCountry.universities.map(uni => (
                      <option key={uni.id} value={uni.id}>{uni.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Country Overview */}
      {selectedCountry && !selectedUniversity && (
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Landmark className="w-10 h-10 text-blue-500" />
              <div>
                <h2 className="text-3xl font-bold font-display">MBBS in {selectedCountry.name}</h2>
                <p className="text-xl text-blue-600 font-body">{selectedCountry.slogan}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 font-display flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                Why Study in {selectedCountry.name}?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCountry.highlights.map((highlight, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition">
                    <p className="text-gray-800 font-body">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 font-display flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-green-500" />
                Quick Facts
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:border-blue-300 transition">
                  <MapPin className="w-6 h-6 text-red-500 mb-2" />
                  <p className="text-sm text-gray-600 mb-1 font-body">Capital</p>
                  <p className="font-semibold font-display">{selectedCountry.facts.capital}</p>
                </div>
                <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:border-blue-300 transition">
                  <Users className="w-6 h-6 text-purple-500 mb-2" />
                  <p className="text-sm text-gray-600 mb-1 font-body">Population</p>
                  <p className="font-semibold font-display">{selectedCountry.facts.population}</p>
                </div>
                <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:border-blue-300 transition">
                  <Wallet className="w-6 h-6 text-emerald-500 mb-2" />
                  <p className="text-sm text-gray-600 mb-1 font-body">Currency</p>
                  <p className="font-semibold font-display">{selectedCountry.facts.currency}</p>
                </div>
                <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:border-blue-300 transition">
                  <Users className="w-6 h-6 text-orange-500 mb-2" />
                  <p className="text-sm text-gray-600 mb-1 font-body">Indian Students</p>
                  <p className="font-semibold font-display">{selectedCountry.facts.indianStudents}</p>
                </div>
              </div>
            </div>

            {/* Universities List */}
            <div>
              <h3 className="text-2xl font-bold mb-6 font-display flex items-center gap-2">
                <Building className="w-6 h-6 text-blue-500" />
                Top Medical Universities
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCountry.universities.map((uni) => (
                  <div key={uni.id} className="bg-white border border-blue-100 rounded-xl overflow-hidden hover:shadow-xl transition group">
                    <img src={uni.image} alt={uni.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
                    <div className="p-6">
                      <h4 className="font-semibold mb-2 font-display text-lg">{uni.name}</h4>
                      <p className="text-gray-600 mb-3 font-body flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        {uni.city}
                      </p>
                      <p className="text-blue-600 font-semibold font-body flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {uni.totalFeeINR}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* University Details */}
      {selectedUniversity && (
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <button 
                onClick={() => setSelectedUniversity(null)}
                className="text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-2 font-body group"
              >
                <ChevronDown className="w-5 h-5 transform rotate-90 group-hover:-translate-x-1 transition-transform" />
                Back to Universities
              </button>
              <div className="flex items-center gap-4">
                <Building className="w-12 h-12 text-blue-500" />
                <div>
                  <h2 className="text-3xl font-bold mb-2 font-display">{selectedUniversity.name}</h2>
                  <p className="text-xl text-gray-600 font-body flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500" />
                    {selectedUniversity.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Information */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <DollarSign className="w-8 h-8 text-green-500 mb-3" />
                <h4 className="font-semibold mb-2 font-display">Tuition Fee</h4>
                <p className="text-2xl font-bold text-blue-600 font-body">
                  {selectedUniversity.tuitionFeeUSD 
                    ? `$${selectedUniversity.tuitionFeeUSD}/year`
                    : `₹${(selectedUniversity.tuitionFeeINR || 0).toLocaleString()}/year`}
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <Home className="w-8 h-8 text-orange-500 mb-3" />
                <h4 className="font-semibold mb-2 font-display">Hostel Fee</h4>
                <p className="text-2xl font-bold text-blue-600 font-body">
                  {selectedUniversity.hostelFeeUSD 
                    ? `$${selectedUniversity.hostelFeeUSD}/year`
                    : `₹${(selectedUniversity.hostelFeeINR || 0).toLocaleString()}/year`}
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <Wallet className="w-8 h-8 text-purple-500 mb-3" />
                <h4 className="font-semibold mb-2 font-display">Total Cost</h4>
                <p className="text-2xl font-bold text-blue-600 font-body">
                  {selectedUniversity.totalFeeINR}
                </p>
              </div>
            </div>

            {/* Admission Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 font-display flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-500" />
                Admission Process
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-blue-600">1</span>
                  </div>
                  <p className="font-body">NEET Qualification</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-green-600">2</span>
                  </div>
                  <p className="font-body">Document Submission</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-yellow-600">3</span>
                  </div>
                  <p className="font-body">Admission Letter</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-bold text-purple-600">4</span>
                  </div>
                  <p className="font-body">Visa Process</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="bg-blue-600 text-white px-12 py-4 rounded-xl font-semibold hover:bg-blue-700 transition font-body flex items-center gap-2 mx-auto">
                <Users className="w-5 h-5" />
                Get Free Counseling
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}