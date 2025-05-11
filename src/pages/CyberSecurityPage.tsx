
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Bug, Lock, Eye, AlertTriangle } from 'lucide-react';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import FeatureCard from '@/components/FeatureCard';

const CyberSecurityPage = () => {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800" 
        title="Advanced Cyber Security Solutions"
        subtitle="Protect your business from evolving digital threats with our comprehensive security services."
        ctaText="Get Protected Now"
        showSecondaryButton={true}
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Enterprise-Grade Protection</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Security Solutions</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our team of experienced security professionals provides tailored cyber security solutions to protect your organization from the most advanced cyber threats. We employ a multi-layered security approach to safeguard your critical assets.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Threat Detection</h4>
                      <p className="text-sm text-gray-600">Advanced monitoring</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Bug className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Vulnerability Analysis</h4>
                      <p className="text-sm text-gray-600">Identify weaknesses</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Lock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Data Protection</h4>
                      <p className="text-sm text-gray-600">Secure sensitive info</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Eye className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Monitoring</h4>
                      <p className="text-sm text-gray-600">Continuous vigilance</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  Schedule a Security Assessment
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 opacity-10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Cyber security protection" 
                  className="rounded-lg shadow-lg object-cover w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Security Services</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Protection for Your Business</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a full range of cybersecurity services to protect your organization from the evolving threat landscape
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Penetration Testing" 
                icon={<Bug />}
                description="Identify vulnerabilities in your systems before hackers do with our thorough penetration testing services."
              />
              
              <FeatureCard 
                title="Security Audits" 
                icon={<Shield />}
                description="Comprehensive assessment of your security posture to identify gaps and provide actionable recommendations."
              />
              
              <FeatureCard 
                title="Managed Security" 
                icon={<Lock />}
                description="24/7 monitoring and management of your security infrastructure to detect and respond to threats in real-time."
              />
              
              <FeatureCard 
                title="Incident Response" 
                icon={<AlertTriangle />}
                description="Rapid response to security incidents to minimize damage and restore normal operations quickly."
              />
              
              <FeatureCard 
                title="Security Training" 
                icon={<Eye />}
                description="Educate your employees on security best practices and how to recognize and avoid security threats."
              />
              
              <FeatureCard 
                title="Compliance Solutions" 
                icon={<Shield />}
                description="Ensure your organization meets regulatory requirements and industry standards for data security."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Client Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Organizations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See what our clients have to say about our cybersecurity services
              </p>
            </div>
            
            <TestimonialsSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
                <p className="text-xl opacity-90 mb-8">
                  Contact us today for a free security consultation and take the first step toward comprehensive protection.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 hover:scale-105 transition-all duration-300">
                    Schedule a Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                    Learn About Our Process
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-700 rounded-full opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Security team working" 
                  className="rounded-lg shadow-2xl border border-blue-700/30 object-cover w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default CyberSecurityPage;
