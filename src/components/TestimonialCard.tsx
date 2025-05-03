
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  delay?: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, rating, delay = 0, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <div 
        className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2"
        style={{ 
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : ''
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} ${
                isHovered && i < rating ? 'animate-pulse' : ''
              }`}
            />
          ))}
        </div>
        
        <blockquote className="text-lg text-webtah-text-secondary mb-6">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center">
          {image ? (
            <img 
              src={image} 
              alt={author}
              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow"
            />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-webtah-blue to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow">
              {author.split(' ').map(name => name[0]).join('')}
            </div>
          )}
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-webtah-text-secondary">{role}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default TestimonialCard;
