
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  showSecondaryButton?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  backgroundImage,
  showSecondaryButton = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-violet-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-20"></div>
      </div>

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
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {title}
          </h1>
          <p 
            className={`text-xl md:text-2xl text-blue-100 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: '200ms' }}
          >
            {subtitle}
          </p>
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
            
            {showSecondaryButton && (
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-semibold"
              >
                Security Audit
              </Button>
            )}
          </div>
        </div>

        {/* 3D Lock Animation */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block">
          <div className={`relative w-64 h-64 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="absolute inset-0 bg-blue-600/20 rounded-2xl transform rotate-12 scale-105"></div>
            <div className="absolute inset-0 bg-blue-500/30 rounded-2xl transform rotate-6 scale-102"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <Shield size={128} className="text-white mx-auto animate-pulse" />
              <p className="text-white text-center mt-4 font-semibold">Proactive Protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA for "Get Free Audit" */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Button 
          className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Get Free Audit
        </Button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce cursor-pointer">
          <ChevronDown size={30} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
