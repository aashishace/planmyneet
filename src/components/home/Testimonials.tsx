import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    university: "Heidelberg University, Germany",
    year: "2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    text: "PlanMyNEET made my dream of studying MBBS in Germany a reality. Their counseling and support throughout the process was invaluable."
  },
  {
    name: "Rahul Patel",
    university: "First Moscow State Medical University",
    year: "2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    text: "The team's expertise in handling documentation and visa processes made my journey smooth. I'm grateful for their guidance."
  },
  {
    name: "Anjali Desai",
    university: "University of Manila",
    year: "2022",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    text: "From NEET counseling to university admission, PlanMyNEET's step-by-step support was crucial in achieving my goals."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
            Student Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-body">
            Hear from our students who successfully started their MBBS journey abroad
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 font-display">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 font-body">{testimonial.university}</p>
                  <p className="text-sm text-indigo-600 font-body">Batch of {testimonial.year}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-indigo-100" />
                <p className="text-gray-600 relative z-10 font-body">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}