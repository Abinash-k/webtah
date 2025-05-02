
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Globe, Code, LayoutDashboard } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Development = () => {
  return (
    <>
      <HeroSection 
        title="Web Design & Development" 
        subtitle="Creating beautiful, functional, and secure digital experiences"
        ctaText="Start Your Project"
      />
      
      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From simple websites to complex web applications, we build digital products that drive results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                title="Website Design"
                description="Mobile-first, fast-loading, and SEO-optimized websites that convert visitors into customers. We create stunning designs tailored to your brand and business goals."
                icon={<Globe size={24} />}
                link="/contact"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <ServiceCard
                title="Web Application Development"
                description="Custom CRMs, dashboards, e-commerce platforms, and other web applications built with modern frameworks and security best practices."
                icon={<Code size={24} />}
                link="/contact"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <ServiceCard
                title="E-Commerce Solutions"
                description="End-to-end e-commerce websites and platforms that provide a seamless shopping experience, secure payment processing, and easy inventory management."
                icon={<LayoutDashboard size={24} />}
                link="/contact"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <ServiceCard
                title="Digital Marketing"
                description="Comprehensive digital marketing services including SEO, social media management, Google & Meta ads, and detailed analytics reporting."
                icon={<Globe size={24} />}
                link="/contact"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-webtah-gray">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A transparent and collaborative approach to bringing your vision to life.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="feature-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-webtah-blue-dark text-white flex items-center justify-center text-lg font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We start by understanding your business goals, target audience, and project requirements through detailed discussions.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="feature-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-webtah-blue-dark text-white flex items-center justify-center text-lg font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-gray-600">
                  We create wireframes and design mockups for your approval, ensuring the visual direction aligns with your brand identity.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="feature-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-webtah-blue-dark text-white flex items-center justify-center text-lg font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p className="text-gray-600">
                  Our team builds your website or application using modern technologies and following security best practices.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="feature-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-webtah-blue-dark text-white flex items-center justify-center text-lg font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
                <p className="text-gray-600">
                  After thorough testing, we deploy your project and provide ongoing maintenance and support.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modern, robust technologies that ensure security, performance, and scalability.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-webtah-mint rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-webtah-blue-dark">JS</span>
                </div>
                <h3 className="font-semibold text-center">JavaScript</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={150}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-webtah-mint rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-webtah-blue-dark">R</span>
                </div>
                <h3 className="font-semibold text-center">React</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-webtah-mint rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-webtah-blue-dark">N</span>
                </div>
                <h3 className="font-semibold text-center">Node.js</h3>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={250}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-webtah-mint rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-webtah-blue-dark">WP</span>
                </div>
                <h3 className="font-semibold text-center">WordPress</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl mb-8">
                Let's discuss your project and create a roadmap for your digital success. Book your free website and marketing audit today.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-webtah-blue-dark hover:bg-opacity-90 text-lg px-8 py-3">
                  Book Your Free Audit
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Development;
