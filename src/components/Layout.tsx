
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to add gradient classes to alternating sections
  useEffect(() => {
    const applyGradients = () => {
      const sections = document.querySelectorAll('section');
      const gradientClasses = [
        'bg-light-blue-gradient', 
        'bg-teal-gradient', 
        'bg-royal-blue-gradient', 
        'bg-blue-teal-gradient',
        'bg-light-teal-gradient',
        'bg-gentle-blue-gradient'
      ];
      
      // Apply different gradient to alternating sections
      sections.forEach((section, index) => {
        if (!section.classList.contains('bg-gradient-to-r') && 
            !section.classList.contains('bg-black') && 
            !section.classList.contains('bg-blue-900')) {
          
          const gradientClass = gradientClasses[index % gradientClasses.length];
          section.classList.add(gradientClass);
        }
      });
    };
    
    // Apply gradients and run again if DOM changes
    applyGradients();
    
    // Create a mutation observer to watch for new sections
    const observer = new MutationObserver(() => {
      applyGradients();
    });
    
    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating "Get Free Audit" button with enhanced 3D hover effect */}
      <div 
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
        style={{
          transform: isScrolled ? `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${-mousePosition.x * 10}deg)` : 'none'
        }}
      >
        <Button 
          variant="gradient" 
          size="lg" 
          className="shadow-glow bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          Get Free Audit
        </Button>
      </div>
    </div>
  );
};

export default Layout;
