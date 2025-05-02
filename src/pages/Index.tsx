
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Globe, Check, Users, Code } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <>
      <HeroSection 
        title="Empowering Secure Digital Growth" 
        subtitle="Your Trusted Partner in Cybersecurity & Digital Transformation"
        ctaText="Get a Free Audit"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide top-tier solutions to protect and grow your digital presence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={200}>
              <ServiceCard
                title="Cybersecurity Solutions"
                description="Advanced threat protection and security solutions to keep your business safe in an increasingly hostile digital world."
                icon={<Shield size={24} />}
                link="/cybersecurity"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <ServiceCard
                title="Web Design & Development"
                description="Modern, responsive websites and web applications designed to convert visitors into customers."
                icon={<Globe size={24} />}
                link="/development"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-webtah-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We combine advanced technical capabilities with a client-first mindset.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={200}>
              <FeatureCard
                title="Certified Experts"
                description="Our team includes OSCP, CEH, and CISSP certified professionals with real-world experience."
                icon={<Users size={28} />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <FeatureCard
                title="Transparent Process"
                description="Clear communication and no hidden fees. You'll always know what we're doing and why."
                icon={<Check size={28} />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <FeatureCard
                title="End-to-End Partner"
                description="From security to development to marketing, we're your single source for digital growth."
                icon={<Code size={28} />}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-webtah-blue-dark to-webtah-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk – Ready to grow securely?</h2>
              <p className="text-xl mb-8">
                Get in touch today for a free consultation on how we can help your business thrive in the digital space.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-webtah-blue-dark hover:bg-opacity-90 text-lg px-8 py-3">
                  Contact Us
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions or ready to start your digital transformation journey? Reach out to our team and we'll get back to you as soon as possible.
                </p>
                <div className="bg-webtah-mint p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Our Office</h3>
                  <p className="text-gray-700 mb-1">
                    71-75 Shelton Street, Covent Garden,
                  </p>
                  <p className="text-gray-700 mb-4">
                    London, WC2H 9JQ
                  </p>
                  <div className="mb-2">
                    <span className="font-medium">Email:</span>{" "}
                    <a href="mailto:support@webtah.com" className="text-webtah-blue-dark hover:underline">
                      support@webtah.com
                    </a>
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span>{" "}
                    <a href="tel:+447587814969" className="text-webtah-blue-dark hover:underline">
                      +44 7587 814969
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-lg shadow-soft p-6">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
