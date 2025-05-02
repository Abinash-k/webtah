
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Globe, Check, Users, Code, ArrowRight } from 'lucide-react';
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

      {/* Introduction Section */}
      <section className="section-padding bg-webtah-lavender">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Webtah Technologies helps businesses thrive in the digital era by offering two critical services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-soft flex flex-col items-center">
                  <Shield size={40} className="text-webtah-blue-dark mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cybersecurity Solutions</h3>
                  <p className="text-center text-webtah-text-secondary">to defend against modern threats</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-soft flex flex-col items-center">
                  <Globe size={40} className="text-webtah-blue-dark mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Web Design & Development</h3>
                  <p className="text-center text-webtah-text-secondary">to build, grow, and market your brand online</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Build Digital Presence Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Build Your Digital Presence — Securely and Strategically</h2>
              <p className="text-xl text-center text-webtah-text-secondary mb-8 italic">"We don't just protect businesses — we help them grow securely."</p>
              <p className="text-lg text-center mb-8">
                Whether you're a startup, SMB, or enterprise, we tailor every service to your specific needs — combining technical excellence with a deep understanding of business growth.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-webtah-cream">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
              <p className="text-xl text-webtah-text-secondary max-w-2xl mx-auto">
                We provide top-tier solutions to protect and grow your digital presence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="p-8">
                  <div className="mb-6">
                    <Shield size={40} className="text-webtah-blue-dark" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Cybersecurity Services</h3>
                  <p className="mb-6 text-webtah-text-secondary">Protect what matters. Stay one step ahead.</p>
                  <p className="mb-6">
                    We simulate real-world cyberattacks, identify vulnerabilities, and help you build cyber resilience.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Penetration Testing (Web, Network, Mobile, WiFi)</span>
                    </li>
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Red Teaming & Ethical Hacking</span>
                    </li>
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Cloud & Infrastructure Security Assessments</span>
                    </li>
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Incident Response & Threat Hunting</span>
                    </li>
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Security Awareness & Compliance Training</span>
                    </li>
                  </ul>
                  <Link to="/cybersecurity" className="btn-gradient inline-flex items-center">
                    Get a free cybersecurity consultation today
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="p-8">
                  <div className="mb-6">
                    <Globe size={40} className="text-webtah-blue-dark" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Design & Development Services</h3>
                  <p className="mb-6 text-webtah-text-secondary">Your online success starts here.</p>
                  <p className="mb-6">
                    We design powerful digital platforms that attract, engage, and convert — while integrating seamless marketing strategies to grow your visibility.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Website Design & Development</span>
                    </li>
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Web Applications & Custom Platforms</span>
                    </li>
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Social Media Marketing (Facebook, Instagram)</span>
                    </li>
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>SEO, SEMrush, Meta Ads & Google Ads</span>
                    </li>
                    <li className="check-list">
                      <Check size={20} className="text-webtah-blue-dark" />
                      <span>Content Strategy & Analytics</span>
                    </li>
                  </ul>
                  <Link to="/development" className="btn-gradient inline-flex items-center">
                    Book a free audit of your current website & digital marketing
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-webtah-peach">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Webtah Technologies?</h2>
              <p className="text-xl text-webtah-text-secondary max-w-2xl mx-auto">
                We combine advanced technical capabilities with a client-first mindset.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={200}>
              <FeatureCard
                title="Certified Cyber Experts"
                description="Our team includes OSCP, CEH, CISSP, and other certified professionals with real-world experience."
                icon={<Users size={28} />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <FeatureCard
                title="Creative & Technical Teams"
                description="Expert designers and developers working together to create cohesive digital experiences."
                icon={<Code size={28} />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <FeatureCard
                title="Transparent Process"
                description="Clear communication, detailed reporting, and actionable recommendations at every step."
                icon={<Check size={28} />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <FeatureCard
                title="End-to-End Partner"
                description="From security to development to marketing, we're your single source for digital growth."
                icon={<Shield size={28} />}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <FeatureCard
                title="Scalable Solutions"
                description="Services that grow with your business, from startup to enterprise scale."
                icon={<Globe size={28} />}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk</h2>
              <p className="text-xl mb-8">
                Ready to secure your future and grow your business online? Let Webtah Technologies show you how.
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
                <p className="text-webtah-text-secondary mb-8">
                  Have questions or ready to start your digital transformation journey? Reach out to our team and we'll get back to you as soon as possible.
                </p>
                <div className="bg-webtah-mint p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Our Office</h3>
                  <p className="text-webtah-text-secondary mb-1">
                    71-75 Shelton Street, Covent Garden,
                  </p>
                  <p className="text-webtah-text-secondary mb-4">
                    London, WC2H 9JQ, United Kingdom
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
