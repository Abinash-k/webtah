
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  onCtaClick,
  backgroundImage 
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      )}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-webtah-blue to-webtah-blue-dark bg-clip-text text-transparent animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
          <Button 
            className="btn-gradient text-lg animate-fade-in" 
            style={{ animationDelay: '400ms' }}
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-webtah-blue-dark">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="relative h-full">
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-32 w-20 h-20 bg-blue-600/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-blue-700/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
