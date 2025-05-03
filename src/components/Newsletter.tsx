
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send this to your newsletter service
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div 
      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-md transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div 
          className={`p-3 ${isHovered ? 'bg-blue-600 text-white' : 'bg-blue-100'} rounded-lg mr-3 transition-all duration-500`}
        >
          <Mail className={`h-5 w-5 ${isHovered ? 'text-white' : 'text-blue-600'} animate-pulse`} />
        </div>
        <h3 className="text-xl font-bold">Stay Updated</h3>
      </div>
      <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest cybersecurity insights and updates.</p>
      
      {isSubmitted ? (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center animate-fade-in flex items-center justify-center">
          <CheckCircle className="mr-2 h-5 w-5" />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              required
              className="w-full p-3 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          </div>
          <Button 
            type="submit" 
            variant="gradient" 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
          >
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
