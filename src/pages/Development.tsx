import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Globe, Code, LayoutDashboard, Check, Shield, Server } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';

const Development = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-black to-blue-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-blue-800/40 px-3 py-1 rounded-full mb-6">Design & Development</span>
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                Web <span className="text-blue-400">Development</span> <br />Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Build, Grow, and Dominate Online with Secure Web Development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  View Portfolio
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
                <div className="bg-gradient-to-br from-blue-900 to-black p-8 rounded-lg shadow-2xl border border-blue-800/30 w-full max-w-md">
                  <div className="flex items-center justify-center mb-6">
                    <Code className="w-16 h-16 text-blue-400" />
                  </div>
                  <h3 className="text-xl text-white font-bold mb-4 text-center">Development Services</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300 text-sm">Custom Web Development</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300 text-sm">Secure Applications</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300 text-sm">E-commerce Solutions</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300 text-sm">Responsive Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Vision</h3>
                  <p className="text-lg">
                    To revolutionize digital experiences by creating secure, innovative, and high-performing web solutions that empower businesses to lead in their industries.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission</h3>
                  <p className="text-lg">
                    To deliver web development services that combine cutting-edge technology with security-first approach, ensuring our clients achieve their business objectives through robust digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-webtah-text-secondary">
                We design and develop powerful digital platforms that help you scale your business with clarity, 
                creativity, and performance. Whether you're launching a startup or growing an established brand — 
                we help you thrive online with security at the forefront.
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
      
      {/* Core Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-webtah-text-secondary max-w-2xl mx-auto">
                The principles that guide our development process and client relationships
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Security-First</h3>
                <p className="text-webtah-text-secondary text-center">
                  We integrate security at every stage of development, not as an afterthought.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-lg bg-green-50 text-green-700 flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Technical Excellence</h3>
                <p className="text-webtah-text-secondary text-center">
                  We maintain the highest standards of code quality and technical innovation.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-6">
                  <Server className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Client Partnership</h3>
                <p className="text-webtah-text-secondary text-center">
                  We build long-term relationships based on transparency, communication, and shared success.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-lg bg-orange-50 text-orange-700 flex items-center justify-center mx-auto mb-6">
                  <LayoutDashboard className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Result-Driven</h3>
                <p className="text-webtah-text-secondary text-center">
                  We focus on creating solutions that deliver measurable business outcomes.
                </p>
              </div>
            </ScrollReveal>
          </div>
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
