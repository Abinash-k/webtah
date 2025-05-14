
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { 
      name: 'Designing', 
      path: '/services/designing',
      description: 'Creative design solutions that elevate your digital presence.'
    },
    { 
      name: 'Web Development', 
      path: '/services/web-development',
      description: 'Custom websites and web applications built for performance.'
    },
    { 
      name: 'Digital Marketing', 
      path: '/services/digital-marketing',
      description: 'Grow your online presence with data-driven marketing strategies.'
    },
    { 
      name: 'Cyber Security', 
      path: '/services/cyber-security',
      description: 'Protect your digital assets with our comprehensive security solutions.'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/a57b75a4-315c-4872-8581-9fa0227a354d.png" 
            alt="Webtah Logo" 
            className="h-10" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home */}
          <Link 
            to="/" 
            className={`text-black hover:text-blue-700 transition-colors relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 hover:before:w-full before:bg-blue-700 before:transition-all ${location.pathname === '/' ? 'text-blue-700 font-medium' : ''}`}
          >
            Home
          </Link>

          {/* Services Dropdown for Desktop */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`text-black hover:text-blue-700 ${location.pathname.includes('/services') ? 'text-blue-700 font-medium' : ''}`}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {serviceLinks.map((service) => (
                      <li key={service.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.path}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              location.pathname === service.path ? "bg-blue-50" : ""
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* About */}
          <Link 
            to="/about" 
            className={`text-black hover:text-blue-700 transition-colors relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 hover:before:w-full before:bg-blue-700 before:transition-all ${location.pathname === '/about' ? 'text-blue-700 font-medium' : ''}`}
          >
            About
          </Link>
          
          {/* Contact */}
          <Link 
            to="/contact" 
            className={`text-black hover:text-blue-700 transition-colors relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 hover:before:w-full before:bg-blue-700 before:transition-all ${location.pathname === '/contact' ? 'text-blue-700 font-medium' : ''}`}
          >
            Contact
          </Link>
          
          <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium py-3 px-8 rounded-md">Get a Free Audit</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link 
              to="/" 
              className={`text-black hover:text-blue-700 w-full py-2 ${location.pathname === '/' ? 'text-blue-700 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="w-full border-t border-gray-200 pt-2">
              <p className="font-medium mb-2">Services:</p>
              {serviceLinks.map((service) => (
                <Link 
                  key={service.name} 
                  to={service.path} 
                  className={`text-black hover:text-blue-700 w-full py-2 pl-3 flex items-center ${location.pathname === service.path ? 'text-blue-700 font-medium' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {service.name}
                </Link>
              ))}
            </div>
            <Link 
              to="/about" 
              className={`text-black hover:text-blue-700 w-full py-2 ${location.pathname === '/about' ? 'text-blue-700 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-black hover:text-blue-700 w-full py-2 ${location.pathname === '/contact' ? 'text-blue-700 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full" onClick={() => setIsMenuOpen(false)}>
              Get a Free Audit
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
