
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Webtah Technologies transformed our cybersecurity posture. Their penetration testing uncovered vulnerabilities we had no idea existed.",
    author: "Jessica Brown",
    role: "CTO",
    company: "FinSecure Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "Their red team operations provided invaluable insights into our security gaps. The detailed reporting helped us prioritize our security investments.",
    author: "Michael Reynolds",
    role: "CISO",
    company: "TechCorp",
    rating: 5,
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "We sleep better at night knowing Webtah is monitoring our systems. Their incident response team detected and neutralized a threat before any damage occurred.",
    author: "Sarah Johnson",
    role: "IT Director",
    company: "Global Retail Ltd.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The development team at Webtah delivered our new website ahead of schedule and with features that exceeded our expectations.",
    author: "David Chen",
    role: "Marketing Director",
    company: "Innovate Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "Working with Webtah has been a game-changer for our organization. Their security-first approach to web development gives us peace of mind.",
    author: "Emma Wilson",
    role: "CEO",
    company: "Future Finance",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

interface TestimonialsSliderProps {
  title?: string;
  subtitle?: string;
}

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ 
  title = "What Our Clients Say",
  subtitle = "Feedback from organizations that trust our expertise"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Client Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              
              <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex mb-8">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  {testimonials[activeIndex].image ? (
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md mr-5"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-5">
                      {testimonials[activeIndex].author.split(' ').map(name => name[0]).join('')}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].author}</h4>
                    <p className="text-gray-600">
                      {testimonials[activeIndex].role}
                      {testimonials[activeIndex].company && `, ${testimonials[activeIndex].company}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={goToPrev}
                className="p-3 bg-white rounded-full shadow hover:shadow-md transition-all hover:bg-blue-50"
              >
                <ChevronLeft size={24} className="text-blue-600" />
              </button>
              
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button 
                    key={i} 
                    className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
              
              <button 
                onClick={goToNext}
                className="p-3 bg-white rounded-full shadow hover:shadow-md transition-all hover:bg-blue-50"
              >
                <ChevronRight size={24} className="text-blue-600" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
