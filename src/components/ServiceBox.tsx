
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceBoxProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  link?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ 
  title, 
  icon, 
  color, 
  link = "/cybersecurity", 
  description,
  imageSrc,
  imageAlt
}) => {
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
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group">
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      
      <div className={`w-16 h-16 rounded-lg ${getColorClass()} flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}>
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
      </div>
      
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}
      
      <Link to={link} className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-3 hover:underline transition-all duration-300">
        Learn More <span className="transition-transform duration-300">→</span>
      </Link>
    </div>
  );
};

export default ServiceBox;
