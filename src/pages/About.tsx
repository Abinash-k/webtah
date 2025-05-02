
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Users, Code, Shield, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <>
      <HeroSection 
        title="About Webtah Technologies" 
        subtitle="Securing Your Future. Building Your Digital Success."
        ctaText="Meet Our Team"
      />
      
      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Core Mission</h2>
                <p className="text-webtah-text-secondary mb-6">
                  At Webtah Technologies, we are more than just a technology company — we are your long-term digital security and growth partner. Founded by a team of cybersecurity professionals and digital innovators, we help businesses protect their most valuable assets while also empowering them to thrive in the digital economy.
                </p>
                <p className="text-webtah-text-secondary mb-6">
                  To provide world-class cybersecurity services that safeguard organizations from modern threats, while also delivering cutting-edge digital solutions that fuel business growth.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-webtah-mint rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Who We Are</h3>
                <p className="text-webtah-text-secondary mb-6">
                  We are a team of ethical hackers, cybersecurity analysts, creative designers, and full-stack developers united by a passion for technology and driven by results. Whether we're simulating cyberattacks to expose security flaws or designing high-converting websites, we approach every challenge with technical excellence and business-first thinking.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-white rounded-full p-1">
                      <Shield size={18} className="text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Cybersecurity Services</h4>
                      <p className="text-webtah-text-secondary">From penetration testing and red teaming to vulnerability assessments and incident response, we proactively secure your IT infrastructure.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-white rounded-full p-1">
                      <Code size={18} className="text-webtah-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Design & Development</h4>
                      <p className="text-webtah-text-secondary">We design stunning, responsive websites and build powerful web applications that are optimized for performance, user experience, and digital marketing success.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Why Us Section */}
      <section className="section-padding bg-webtah-lavender">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Us?</h2>
              <p className="text-xl text-webtah-text-secondary max-w-2xl mx-auto">
                What sets us apart from other digital agencies and cybersecurity firms
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">One-stop shop</h3>
                <p className="text-webtah-text-secondary">
                  For design, development & marketing - all your digital needs under one roof.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Experienced Teams</h3>
                <p className="text-webtah-text-secondary">
                  Creative and technical professionals who excel in their specialties.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Conversion-focused</h3>
                <p className="text-webtah-text-secondary">
                  We build digital assets that don't just look good, but drive business results.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Transparent Reporting</h3>
                <p className="text-webtah-text-secondary">
                  Clear, concise reports that explain technical issues in business terms.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Agile Delivery</h3>
                <p className="text-webtah-text-secondary">
                  We adapt quickly to changing needs and priorities without compromising quality.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Affordable Packages</h3>
                <p className="text-webtah-text-secondary">
                  Tailored solutions for every business stage and budget requirement.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-xl text-webtah-text-secondary max-w-2xl mx-auto">
                How we work with clients to deliver exceptional results
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-webtah-cream p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Consultative</h3>
                <p className="text-webtah-text-secondary mb-2">
                  We don't just deliver services — we provide guidance and strategy.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white">
                    <Check size={20} />
                  </div>
                  <p className="ml-4 text-webtah-text-secondary">We listen first, then recommend solutions</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-webtah-cream p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Customized</h3>
                <p className="text-webtah-text-secondary mb-2">
                  Every solution is tailored to your unique business goals and risks.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white">
                    <Check size={20} />
                  </div>
                  <p className="ml-4 text-webtah-text-secondary">No one-size-fits-all packages</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-webtah-cream p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Confidential</h3>
                <p className="text-webtah-text-secondary mb-2">
                  Your trust is our top priority — we work under strict NDAs and data privacy standards.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white">
                    <Check size={20} />
                  </div>
                  <p className="ml-4 text-webtah-text-secondary">Security built into everything we do</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-webtah-cream p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Certified</h3>
                <p className="text-webtah-text-secondary mb-2">
                  Our team holds industry-recognized certifications (OSCP, CEH, CISSP, PNPT, CREST etc.) to ensure top-tier delivery.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white">
                    <Check size={20} />
                  </div>
                  <p className="ml-4 text-webtah-text-secondary">Proven expertise you can trust</p>
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
                To become a leading force in cyber defense and digital transformation, enabling businesses worldwide to grow securely and confidently.
              </p>
              <p className="text-lg opacity-90 mb-8">
                Whether you're a startup needing a secure online launch or an enterprise strengthening your cyber resilience — Webtah Technologies is your trusted partner in the digital journey.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-webtah-blue-dark hover:bg-opacity-90 text-lg px-8 py-3">
                  Let's Grow Together
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
