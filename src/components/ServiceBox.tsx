
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceBoxProps {
  title: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, icon, color }) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'bg-blue-50 text-blue-700';
      case 'green': return 'bg-green-50 text-green-700';
      case 'purple': return 'bg-purple-50 text-purple-700';
      case 'orange': return 'bg-orange-50 text-orange-700';
      case 'red': return 'bg-red-50 text-red-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 text-center">
      <div className={`w-16 h-16 rounded-lg ${getColorClass()} flex items-center justify-center mx-auto mb-6`}>
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
      </div>
      
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      
      <Link to={title.toLowerCase().includes('security') ? '/cybersecurity' : '/development'} className="text-webtah-blue font-medium inline-flex items-center gap-1 hover:underline">
        Read More <span>→</span>
      </Link>
    </div>
  );
};

export default ServiceBox;
