
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send this to your newsletter service
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-blue-50 p-6 rounded-2xl">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 rounded-lg mr-3">
          <Mail className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold">Stay Updated</h3>
      </div>
      <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest cybersecurity insights and updates.</p>
      
      {isSubmitted ? (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center animate-fade-in">
          Thank you for subscribing!
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
              className="w-full p-3 pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <Button type="submit" variant="gradient" className="w-full">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
