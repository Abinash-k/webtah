
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Globe, Code, LayoutDashboard, Check } from 'lucide-react';

const Development = () => {
  return (
    <>
      <HeroSection 
        title="Design & Development" 
        subtitle="Build, Grow, and Dominate Online."
        ctaText="Start Your Project"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-webtah-text-secondary">
                We design and develop powerful digital platforms that help you scale your business with clarity, 
                creativity, and performance. Whether you're launching a startup or growing an established brand — 
                we help you thrive online.
              </p>
            </div>
          </ScrollReveal>

          {/* 1. Website Design */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white mr-3">1</span>
                Website Design
              </h2>
              <p className="text-xl font-medium text-webtah-blue-dark mb-6">Turn clicks into customers.</p>
              <p className="text-lg text-webtah-text-secondary mb-8">
                We create custom, responsive websites that blend visual appeal with user experience — optimized 
                for conversion and mobile-first from day one.
              </p>
              
              <div className="bg-webtah-lavender p-8 rounded-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="service-item flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-white rounded-full">
                      <Code size={24} className="text-webtah-blue" />
                    </div>
                    <h3 className="font-medium text-webtah-text-primary">UX/UI focused design</h3>
                  </div>
                  
                  <div className="service-item flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-white rounded-full">
                      <Globe size={24} className="text-webtah-blue" />
                    </div>
                    <h3 className="font-medium text-webtah-text-primary">Responsive layout</h3>
                    <p className="text-sm text-webtah-text-secondary">(desktop/tablet/mobile)</p>
                  </div>
                  
                  <div className="service-item flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-white rounded-full">
                      <Code size={24} className="text-webtah-blue" />
                    </div>
                    <h3 className="font-medium text-webtah-text-primary">SEO-friendly structure</h3>
                  </div>
                  
                  <div className="service-item flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-white rounded-full">
                      <Code size={24} className="text-webtah-blue" />
                    </div>
                    <h3 className="font-medium text-webtah-text-primary">Fast loading times</h3>
                  </div>
                  
                  <div className="service-item flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-white rounded-full">
                      <Code size={24} className="text-webtah-blue" />
                    </div>
                    <h3 className="font-medium text-webtah-text-primary">Brand storytelling</h3>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Web Application Development */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white mr-3">2</span>
                Web Application Development
              </h2>
              <p className="text-xl font-medium text-webtah-blue-dark mb-6">From ideas to high-performance apps.</p>
              <p className="text-lg text-webtah-text-secondary mb-8">
                We build secure, scalable, and business-aligned web applications tailored to your workflow.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-3">Custom dashboards & CRM tools</h3>
                  <p className="text-webtah-text-secondary">
                    Tailored interfaces that streamline your business operations and improve productivity.
                  </p>
                </div>
                
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-3">Booking platforms & eCommerce</h3>
                  <p className="text-webtah-text-secondary">
                    Custom booking systems, portals, and online stores that drive conversions.
                  </p>
                </div>
                
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-3">Secure coding practices</h3>
                  <p className="text-webtah-text-secondary">
                    Security built in from the ground up to protect your data and users.
                  </p>
                </div>
                
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-3">API integrations</h3>
                  <p className="text-webtah-text-secondary">
                    Seamless connections to third-party services and existing systems.
                  </p>
                </div>
                
                <div className="feature-card">
                  <h3 className="text-lg font-semibold mb-3">Ongoing support</h3>
                  <p className="text-webtah-text-secondary">
                    Continuous maintenance, updates, and improvements to keep your app running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Digital Marketing */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white mr-3">3</span>
                Digital Marketing
              </h2>
              <p className="text-xl font-medium text-webtah-blue-dark mb-6">Make your brand impossible to ignore.</p>
              <p className="text-lg text-webtah-text-secondary mb-8">
                We drive traffic, generate leads, and grow your online presence through targeted campaigns and data-backed strategies.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-webtah-peach p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Services Include:</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-lg mb-2">Social Media Marketing</h4>
                    <p className="text-webtah-text-secondary mb-2">Facebook & Instagram strategy, post design, engagement campaigns</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-lg mb-2">Search Engine Optimization (SEO)</h4>
                    <p className="text-webtah-text-secondary mb-2">Keyword targeting, on-page optimization, technical audits</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-lg mb-2">Advertising Campaigns</h4>
                    <p className="text-webtah-text-secondary mb-2">Meta Ads, Facebook Ads, Google Ads (PPC), retargeting</p>
                  </div>
                </div>
                
                <div className="bg-webtah-mint p-6 rounded-lg">
                  <div className="mb-6">
                    <h4 className="font-medium text-lg mb-2">Website Optimization</h4>
                    <p className="text-webtah-text-secondary mb-2">Speed tuning, UX improvements, mobile performance</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-lg mb-2">Content Creation</h4>
                    <p className="text-webtah-text-secondary mb-2">Copywriting, blog strategy, landing pages</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-lg mb-2">Analytics & Reporting</h4>
                    <p className="text-webtah-text-secondary mb-2">Google Analytics, SEMrush insights, traffic & behavior monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-webtah-lavender">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-webtah-text-secondary max-w-2xl mx-auto">
                A transparent and collaborative approach to bringing your vision to life.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="feature-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-webtah-blue-dark text-white flex items-center justify-center text-lg font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-webtah-text-secondary">
                  We start by understanding your business goals, target audience, and project requirements through detailed discussions.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="feature-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-webtah-blue-dark text-white flex items-center justify-center text-lg font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-webtah-text-secondary">
                  We create wireframes and design mockups for your approval, ensuring the visual direction aligns with your brand identity.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="feature-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-webtah-blue-dark text-white flex items-center justify-center text-lg font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p className="text-webtah-text-secondary">
                  Our team builds your website or application using modern technologies and following security best practices.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="feature-card relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-webtah-blue-dark text-white flex items-center justify-center text-lg font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
                <p className="text-webtah-text-secondary">
                  After thorough testing, we deploy your project and provide ongoing maintenance and support.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Free Audit CTA */}
      <section className="section-padding bg-webtah-cream">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Free Website & Digital Audit</h2>
              <p className="text-xl mb-8">
                Let us analyze your current digital footprint — site performance, design gaps, and growth potential.
              </p>
              <Link to="/contact">
                <Button className="btn-gradient text-lg px-8 py-3">
                  Book a free audit now. No obligations
                </Button>
              </Link>
            </div>
          </ScrollReveal>
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
