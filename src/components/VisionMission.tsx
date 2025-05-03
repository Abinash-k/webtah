
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Target } from 'lucide-react';

interface VisionMissionProps {
  variant?: 'default' | 'development';
}

const VisionMission: React.FC<VisionMissionProps> = ({ variant = 'default' }) => {
  const isDevVariant = variant === 'development';
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                  <Target size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700">
                {isDevVariant ? 
                  "To pioneer digital transformation initiatives that empower businesses with cutting-edge web solutions. We envision a world where organizations leverage technology to create seamless, secure, and engaging digital experiences." :
                  "To become a leading force in cyber defense and digital transformation, enabling businesses worldwide to grow securely and confidently in an increasingly complex digital landscape. We envision a world where organizations can innovate without fear of cyber threats."}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700">
                {isDevVariant ?
                  "To deliver exceptional web development services that transform ideas into powerful digital solutions. We're committed to combining technical excellence with creative design to help businesses establish a strong online presence and achieve their digital objectives." :
                  "To provide world-class cybersecurity services and innovative digital solutions that protect organizations from modern threats while empowering them to thrive in the digital economy. We're committed to delivering excellence through technical expertise, business understanding, and client partnership."}
              </p>
            </div>
          </div>
          
          {isDevVariant && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Innovation</h4>
                <p>We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Quality</h4>
                <p>We maintain the highest standards in code quality, performance, and user experience.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Client Focus</h4>
                <p>We prioritize understanding our clients' needs and exceeding their expectations.</p>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionMission;
