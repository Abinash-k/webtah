
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Users, Code, Shield, Check, Target, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/TestimonialCard';
import VisionMission from '@/components/VisionMission';

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-black to-blue-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-blue-800/40 px-3 py-1 rounded-full mb-6">About Us</span>
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                About <span className="text-blue-400">Webtah</span> <br />Technologies
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Securing Your Future. Building Your Digital Success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black">
                  Meet Our Team
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white">
                  Our Process
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Cybersecurity professional"
                className="rounded-lg shadow-2xl border border-blue-700/30 w-full max-w-md mx-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Vision and Mission */}
      <VisionMission />
      
      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-webtah-lavender">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a wide range of digital services to help businesses thrive in today's technology-driven world
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Code size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  We create custom, responsive, and high-performance websites and web applications tailored to your business needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Custom Website Development</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">E-commerce Solutions</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Progressive Web Applications</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/services/web-development">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Digital Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Data-driven marketing strategies to increase your online visibility, attract qualified leads, and boost conversions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Search Engine Optimization (SEO)</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Social Media Marketing</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">PPC Advertising & Analytics</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/services/digital-marketing">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Cyber Security */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cyber Security</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security solutions to protect your business from modern cyber threats and ensure data integrity.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Penetration Testing & Red Teaming</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Security Assessments & Audits</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2" />
                    <p className="text-sm">Incident Response & Recovery</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/services/cyber-security">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Our Goals Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Objectives</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Goals</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What drives us forward and shapes our approach to every project we undertake
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Short-term Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Client Success</h4>
                      <p className="text-gray-600">Deliver exceptional results for every client project to establish strong relationships and reputation.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Team Growth</h4>
                      <p className="text-gray-600">Expand our team of experts to enhance our service capabilities and technical expertise.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovation Focus</h4>
                      <p className="text-gray-600">Stay at the forefront of technology trends to offer cutting-edge solutions.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Long-term Vision</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Industry Leadership</h4>
                      <p className="text-gray-600">Become a recognized leader in cybersecurity and digital transformation services.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Global Expansion</h4>
                      <p className="text-gray-600">Extend our reach to serve clients across global markets with localized expertise.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Technology Impact</h4>
                      <p className="text-gray-600">Develop proprietary technologies and methodologies that reshape digital security standards.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
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
            <div className="bg-webtah-mint rounded-lg p-8 mt-8">
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
              <div className="mt-8 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Cybersecurity lock" 
                  className="rounded-lg shadow-md object-cover w-full h-32"
                />
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Digital security" 
                  className="rounded-lg shadow-md object-cover w-full h-32"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Client Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients <span className="text-blue-600">Say</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Feedback from organizations that trust our cybersecurity expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="Webtah Technologies transformed our cybersecurity posture. Their penetration testing uncovered vulnerabilities we had no idea existed." 
                author="Jessica Brown" 
                role="CTO, FinSecure Inc." 
                rating={5}
                delay={100}
              />
              
              <TestimonialCard 
                quote="Their red team operations provided invaluable insights into our security gaps. The detailed reporting helped us prioritize our security investments." 
                author="Michael Reynolds" 
                role="CISO, TechCorp" 
                rating={5}
                delay={200}
              />
              
              <TestimonialCard 
                quote="We sleep better at night knowing Webtah is monitoring our systems. Their incident response team detected and neutralized a threat before any damage occurred." 
                author="Sarah Johnson" 
                role="IT Director" 
                rating={5}
                delay={300}
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Business professional" 
                className="rounded-lg shadow-md object-cover w-full h-48"
              />
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Female professional" 
                className="rounded-lg shadow-md object-cover w-full h-48"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Security professional" 
                className="rounded-lg shadow-md object-cover w-full h-48"
              />
              <img 
                src="https://images.unsplash.com/photo-1633269540827-728e0512c343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Cybersecurity concept" 
                className="rounded-lg shadow-md object-cover w-full h-48"
              />
            </div>
          </ScrollReveal>
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
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Data analysis" 
                  className="mt-4 rounded-md shadow-sm object-cover w-full h-32"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Agile Delivery</h3>
                <p className="text-webtah-text-secondary">
                  We adapt quickly to changing needs and priorities without compromising quality.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Team collaboration" 
                  className="mt-4 rounded-md shadow-sm object-cover w-full h-32"
                />
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
                <div className="mt-4">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Team consultation" 
                    className="rounded-md shadow-sm object-cover w-full h-40"
                  />
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
                <div className="mt-4">
                  <img 
                    src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Data privacy" 
                    className="rounded-md shadow-sm object-cover w-full h-40"
                  />
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
                <Button className="bg-white text-webtah-blue-dark text-lg px-8 py-3">
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
