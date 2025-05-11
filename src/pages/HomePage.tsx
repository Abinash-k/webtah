
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Code, TrendingUp, Server, Bug, Lock, Eye } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import ServiceBox from '@/components/ServiceBox';

const HomePage = () => {
  return (
    <>
      {/* Hero Section with Gradient Overlay and Pattern */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black to-blue-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-blue-800/40 px-3 py-1 rounded-full mb-6">Comprehensive Digital Solutions</span>
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                Web, Marketing & <span className="text-blue-400">Security</span> <br />Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                We provide comprehensive digital services from web development and digital marketing 
                to advanced cybersecurity to protect your business in the digital world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300">
                  Our Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  Get Free Audit
                </Button>
              </div>
              
              <div className="flex items-center mt-12">
                <div className="flex -space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                    alt="Team member" 
                    className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" className="mr-1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm opacity-90">Trusted by 1200+ clients</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 -right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Digital solutions concept" 
                  className="rounded-lg shadow-2xl border border-blue-800/30 w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision & Mission</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Our Vision</h3>
                <p className="text-lg text-gray-700">
                  To become a leading force in cyber defense, web development, and digital transformation, enabling businesses worldwide to grow securely and confidently in an increasingly complex digital landscape. We envision a world where organizations can innovate without fear of cyber threats.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To provide world-class digital services that protect and grow organizations in the digital economy. We're committed to delivering excellence through technical expertise, business understanding, and client partnership across web development, digital marketing, and cybersecurity.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Core Offerings</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-blue-600">Services</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceBox 
                title="Web Development" 
                icon={<Code />}
                color="blue"
                link="/services/web-development"
                description="Custom websites and web applications built for performance, user experience, and business growth."
                imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                imageAlt="Web development concept"
              />
              
              <ServiceBox 
                title="Digital Marketing" 
                icon={<TrendingUp />}
                color="purple"
                link="/services/digital-marketing"
                description="Data-driven marketing strategies to increase your online visibility, drive traffic, and convert visitors into customers."
                imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                imageAlt="Digital marketing concept"
              />
              
              <ServiceBox 
                title="Cyber Security" 
                icon={<Shield />}
                color="blue"
                link="/services/cyber-security"
                description="Proactive security solutions designed to protect your digital assets from evolving cyber threats."
                imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                imageAlt="Cybersecurity concept"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Expert Web Development</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Web Solutions</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our development team creates stunning, high-performance websites and web applications that deliver results for your business.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Website Design</h4>
                      <p className="text-sm text-gray-600">Tailored to your brand</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">E-Commerce Solutions</h4>
                      <p className="text-sm text-gray-600">Drive online sales</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Web Applications</h4>
                      <p className="text-sm text-gray-600">Custom functionality</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">CMS Development</h4>
                      <p className="text-sm text-gray-600">Easy content management</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/services/web-development">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                    Learn More About Web Development
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 opacity-10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Web development" 
                  className="rounded-lg shadow-lg object-cover w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 opacity-10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Digital marketing" 
                  className="rounded-lg shadow-lg object-cover w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-purple-600 mb-2">Growth-Driven Marketing</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Marketing <span className="text-purple-600">Strategies</span></h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our data-driven digital marketing services help your business grow online, increase visibility, and acquire new customers.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Search className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Search Engine Optimization</h4>
                      <p className="text-sm text-gray-600">Rank higher in search results</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Pay-Per-Click Advertising</h4>
                      <p className="text-sm text-gray-600">Targeted ad campaigns</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Social Media Marketing</h4>
                      <p className="text-sm text-gray-600">Build your online presence</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Content Marketing</h4>
                      <p className="text-sm text-gray-600">Engage your audience</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/services/digital-marketing">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300">
                    Learn More About Digital Marketing
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Elite Protection</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive <span className="text-blue-600">Cyber Security</span></h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our in-depth security solutions protect your digital assets from evolving cyber threats.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Penetration Testing</h4>
                      <p className="text-sm text-gray-600">Identify vulnerabilities</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Bug className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Vulnerability Assessment</h4>
                      <p className="text-sm text-gray-600">Comprehensive scanning</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Eye className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Red Team Operations</h4>
                      <p className="text-sm text-gray-600">Advanced attack simulation</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Lock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Security Consulting</h4>
                      <p className="text-sm text-gray-600">Expert guidance</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/services/cyber-security">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                    Learn More About Cyber Security
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 opacity-10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Cybersecurity" 
                  className="rounded-lg shadow-lg object-cover w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Client Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients <span className="text-blue-600">Say</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Feedback from organizations that trust our expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="Webtah delivered an exceptional website that perfectly represents our brand. Their attention to detail and responsiveness made the process smooth from start to finish." 
                author="Sarah Johnson" 
                role="Marketing Director" 
                rating={5}
                delay={100}
                image="https://images.unsplash.com/photo-1573497019236-61e7a3e1f341?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
              
              <TestimonialCard 
                quote="Their digital marketing team transformed our online presence. Their data-driven approach increased our organic traffic by 200% in just six months." 
                author="Michael Reynolds" 
                role="CEO, TechCorp" 
                rating={5}
                delay={200}
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
              
              <TestimonialCard 
                quote="We sleep better at night knowing Webtah is protecting our systems. Their cybersecurity team detected and neutralized a threat before any damage occurred." 
                author="Jessica Brown" 
                role="IT Director" 
                rating={5}
                delay={300}
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
                <p className="text-xl opacity-90 mb-8">
                  Let's talk about your business needs and how we can help you grow online.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 hover:scale-105 transition-all duration-300">
                    Get a Free Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Team working together" 
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

export default HomePage;
