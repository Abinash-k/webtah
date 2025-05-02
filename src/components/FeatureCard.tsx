
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="feature-card flex flex-col items-center text-center">
      <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-full bg-webtah-mint text-webtah-blue-dark">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-webtah-text-secondary">{description}</p>
    </div>
  );
};

export default FeatureCard;
