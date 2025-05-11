
import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  animation = 'fade-up' 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-left':
        return 'animate-fade-in-left';
      case 'fade-right':
        return 'animate-fade-in-right';
      case 'zoom-in':
        return 'animate-zoom-in';
      case 'fade-up':
      default:
        return 'animate-fade-in-up';
    }
  };
  
  return (
    <div 
      ref={ref} 
      className={`reveal ${getAnimationClass()}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
