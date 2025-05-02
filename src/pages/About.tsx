
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Users, Code, Shield } from 'lucide-react';

const About = () => {
  return (
    <>
      <HeroSection 
        title="About Webtah Technologies" 
        subtitle="World-class cybersecurity + digital growth solutions"
        ctaText="Meet Our Team"
      />
      
      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Webtah, we're on a mission to provide world-class cybersecurity and digital growth solutions to businesses of all sizes. We believe that every organization deserves enterprise-grade security and stunning digital experiences.
                </p>
                <p className="text-gray-600">
                  We've combined our expertise in cybersecurity with creative design and development to offer a holistic approach to digital transformation. Our goal is to help you grow securely and efficiently in today's competitive digital landscape.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-webtah-mint rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-white rounded-full p-1">
                      <Shield size={18} className="text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Security First</h4>
                      <p className="text-gray-600">We believe security should be built in, not bolted on.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-white rounded-full p-1">
                      <Users size={18} className="text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Client Partnership</h4>
                      <p className="text-gray-600">We succeed when our clients succeed - it's that simple.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-white rounded-full p-1">
                      <Code size={18} className="text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Technical Excellence</h4>
                      <p className="text-gray-600">We stay at the forefront of technology to deliver the best solutions.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-webtah-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A diverse group of ethical hackers, creative designers, and skilled developers.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-soft">
                <div className="aspect-[4/3] bg-webtah-blue-dark/10"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl">Cybersecurity Team</h3>
                  <p className="text-gray-600 mt-2">
                    Our ethical hackers and security researchers stay ahead of emerging threats to protect your digital assets.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-lg overflow-hidden shadow-soft">
                <div className="aspect-[4/3] bg-webtah-blue-dark/10"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl">Design Team</h3>
                  <p className="text-gray-600 mt-2">
                    Creative designers who combine aesthetics with functionality to create engaging digital experiences.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-lg overflow-hidden shadow-soft">
                <div className="aspect-[4/3] bg-webtah-blue-dark/10"></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl">Development Team</h3>
                  <p className="text-gray-600 mt-2">
                    Skilled developers who build robust, secure, and scalable web applications and websites.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="section-padding bg-webtah-blue text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl mb-4">
                To be the go-to partner for secure digital transformation, helping businesses worldwide thrive in the digital space without compromising on security or user experience.
              </p>
              <p className="text-lg opacity-90">
                We're building a future where cybersecurity and digital excellence go hand in hand.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
