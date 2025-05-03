
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ChevronDown, Lock, Play } from 'lucide-react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) - 0.5;
        const y = ((e.clientY - top) / height) - 0.5;
        
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 animate-gradient-shift">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-violet-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-500/15 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Digital circuit pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-20"></div>
        
        {/* Floating cybersecurity-related icons */}
        <div className="absolute top-1/4 right-1/4 text-white/30 animate-float" style={{ animationDelay: '0.5s' }}>
          <Lock size={32} />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-white/30 animate-float" style={{ animationDelay: '1.2s' }}>
          <Shield size={40} />
        </div>
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
              className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group"
              onClick={onCtaClick}
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-blue-100 to-white group-hover:translate-x-0"></span>
              <span className="relative flex items-center">
                {ctaText}
                <Shield className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </span>
            </Button>
            
            {showSecondaryButton && (
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-semibold group"
              >
                <span className="relative flex items-center">
                  Security Audit
                  <Play className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            )}
          </div>
        </div>

        {/* Enhanced 3D Lock Animation with parallax effect */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block">
          <div 
            className={`relative w-64 h-64 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 20}deg) rotateX(${-mousePosition.y * 20}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="absolute inset-0 bg-blue-600/20 rounded-2xl transform rotate-12 scale-105" style={{ transform: `translateZ(-20px) rotate(12deg)` }}></div>
            <div className="absolute inset-0 bg-blue-500/30 rounded-2xl transform rotate-6 scale-102" style={{ transform: `translateZ(-10px) rotate(6deg)` }}></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl" style={{ transform: `translateZ(0px)` }}>
              <Shield size={128} className="text-white mx-auto animate-pulse" />
              <p className="text-white text-center mt-4 font-semibold">Proactive Protection</p>
              
              {/* Floating cybersecurity-related elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.7s' }}>
                <Lock size={20} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <Play size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce cursor-pointer">
          <ChevronDown size={30} className="text-white" />
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-1 h-16 bg-blue-500/50 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/6 w-1 h-24 bg-purple-500/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default HeroSection;
