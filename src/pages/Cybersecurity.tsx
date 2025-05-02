
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Globe, Check, Users } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Cybersecurity = () => {
  return (
    <>
      <HeroSection 
        title="Cybersecurity Services" 
        subtitle="Military-grade protection for your digital assets"
        ctaText="Get a Free Consultation"
      />
      
      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Security Solutions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Protect your business with our full range of cybersecurity services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                title="Penetration Testing"
                description="Thorough security assessments of your networks, web applications, mobile apps, and WiFi infrastructure to identify vulnerabilities before attackers do."
                icon={<Shield size={24} />}
                link="/contact"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <ServiceCard
                title="Vulnerability Assessment"
                description="Comprehensive evaluation of your cloud security posture, host configurations, and overall security architecture to identify potential weaknesses."
                icon={<Shield size={24} />}
                link="/contact"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <ServiceCard
                title="Red Teaming"
                description="Simulated cyber attacks that test your organization's detection and response capabilities using real-world adversary tactics and techniques."
                icon={<Shield size={24} />}
                link="/contact"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <ServiceCard
                title="Incident Response"
                description="Rapid response to security incidents, threat hunting, and post-incident analysis to minimize damage and prevent future breaches."
                icon={<Shield size={24} />}
                link="/contact"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <ServiceCard
                title="Compliance & Training"
                description="Security awareness training for your team and assistance with regulatory compliance requirements like GDPR, HIPAA, PCI DSS, and more."
                icon={<Shield size={24} />}
                link="/contact"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section-padding bg-webtah-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Webtah Security Advantage</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Why our cybersecurity services stand out from the competition.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Military-Grade Defense</h3>
                <p className="text-gray-600">
                  Our security protocols and methodologies are based on military and intelligence agency standards, providing the highest level of protection.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Detailed Reporting</h3>
                <p className="text-gray-600">
                  Comprehensive, easy-to-understand reports with clear remediation steps and prioritized vulnerabilities based on risk.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Certified Experts</h3>
                <p className="text-gray-600">
                  Our team includes OSCP, CEH, and CISSP certified professionals with experience protecting Fortune 500 companies.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Continuous Support</h3>
                <p className="text-gray-600">
                  We don't just find issues - we help you fix them with ongoing guidance and support throughout remediation.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Business-Focused Approach</h3>
                <p className="text-gray-600">
                  We understand your business needs and align our security recommendations with your organizational goals.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Latest Threat Intelligence</h3>
                <p className="text-gray-600">
                  We stay updated on emerging threats and vulnerabilities to provide you with the most current protection.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-webtah-blue-dark to-webtah-blue text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
              <p className="text-xl mb-8">
                Get in touch today for a free cybersecurity consultation. Our experts will help you identify vulnerabilities and create a comprehensive security plan.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-webtah-blue-dark hover:bg-opacity-90 text-lg px-8 py-3">
                  Request a Free Consultation
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Cybersecurity;
