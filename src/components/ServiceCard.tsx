
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  link?: string;
  color?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link = "/", 
  color = "blue",
  imageSrc,
  imageAlt
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'bg-blue-50 text-blue-600';
      case 'green': return 'bg-green-50 text-green-700';
      case 'purple': return 'bg-purple-50 text-purple-700';
      case 'orange': return 'bg-orange-50 text-orange-700';
      case 'red': return 'bg-red-50 text-red-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-500 text-center group transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-md relative">
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className={`w-full h-48 object-cover transition-all duration-700 ${isHovered ? 'scale-110 filter saturate-150' : 'scale-100'}`}
          />
        </div>
      )}
      
      <div 
        className={`w-16 h-16 rounded-lg ${getColorClass()} flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
          isHovered ? 'rotate-12 scale-110' : ''
        }`}
      >
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
      </div>
      
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}
      
      <Link 
        to={link} 
        className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-3 hover:underline transition-all duration-300"
      >
        Learn More <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
