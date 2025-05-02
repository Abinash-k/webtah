
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="text-center">
      <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-webtah-blue/10">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-webtah-blue">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-sm text-webtah-text-secondary">{role}</p>
    </div>
  );
};

export default TeamMember;
