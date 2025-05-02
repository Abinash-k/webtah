
import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, rating, delay = 0 }) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 hover:shadow-hover transition-all duration-300">
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        
        <blockquote className="text-lg text-webtah-text-secondary mb-6">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-webtah-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
            {author.split(' ').map(name => name[0]).join('')}
          </div>
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
