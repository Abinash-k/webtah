import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Lock, Eye, Code, Server, Bug } from 'lucide-react';
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
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-blue-800/40 px-3 py-1 rounded-full mb-6">Elite Cybersecurity</span>
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                Proactive <span className="text-blue-400">Security</span> <br />Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                We specialize in proactive cybersecurity solutions designed to expose, 
                mitigate, and neutralize digital threats before they strike.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Get Protected Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Security Audit
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
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Cybersecurity concept" 
                  className="rounded-lg shadow-2xl border border-blue-800/30 w-full max-w-md object-cover"
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
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Our Vision</h3>
                <p className="text-lg text-gray-700">
                  To become a leading force in cyber defense and digital transformation, enabling businesses worldwide to grow securely and confidently in an increasingly complex digital landscape. We envision a world where organizations can innovate without fear of cyber threats.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  To provide world-class cybersecurity services and innovative digital solutions that protect organizations from modern threats while empowering them to thrive in the digital economy. We're committed to delivering excellence through technical expertise, business understanding, and client partnership.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cybersecurity Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Comprehensive Protection</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced <span className="text-blue-600">Cybersecurity</span> Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our elite team of security experts provides comprehensive protection for your organization's digital assets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceBox 
                title="Penetration Testing" 
                icon={<Shield />}
                color="blue"
                link="/cybersecurity"
                description="We simulate sophisticated cyber attacks to identify vulnerabilities in your systems before real attackers can exploit them."
                imageSrc="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                imageAlt="Security professional at work"
              />
              
              <ServiceBox 
                title="Vulnerability Assessment" 
                icon={<Lock />}
                color="blue"
                link="/cybersecurity"
                description="Comprehensive scanning and analysis to identify, categorize, and prioritize security weaknesses in your IT environment."
                imageSrc="https://images.unsplash.com/photo-1562813733-b31f1c359edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                imageAlt="Vulnerability scan results"
              />
              
              <ServiceBox 
                title="Red Team Operations" 
                icon={<Eye />}
                color="blue"
                link="/contact"
                description="Elite security professionals simulate advanced, multi-layered attacks to test your complete defense capabilities."
                imageSrc="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                imageAlt="Hacker in hoodie"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Security Assessment Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Elite Protection</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Security Assessment</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our in-depth security assessment identifies vulnerabilities across your entire digital ecosystem, from network infrastructure to cloud systems and web applications.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Network Security</h4>
                      <p className="text-sm text-gray-600">Internal & external testing</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Web Application Testing</h4>
                      <p className="text-sm text-gray-600">OWASP Top 10 vulnerabilities</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Bug className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Malware Analysis</h4>
                      <p className="text-sm text-gray-600">Advanced threat detection</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Lock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Cloud Security</h4>
                      <p className="text-sm text-gray-600">AWS/Azure/GCP reviews</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Request Assessment
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 opacity-10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Security lock" 
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Cybersecurity Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive security and protection services to defend your business against evolving cyber threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <ServiceBox 
                title="Security Assessments" 
                icon={<Shield />}
                color="blue"
              />
              <ServiceBox 
                title="Penetration Testing" 
                icon={<Bug />}
                color="blue"
              />
              <ServiceBox 
                title="Cloud Security" 
                icon={<Server />}
                color="blue"
              />
              <ServiceBox 
                title="Security Training" 
                icon={<Eye />}
                color="blue"
              />
              <ServiceBox 
                title="Incident Response" 
                icon={<Lock />}
                color="blue"
              />
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Laptop with code" 
                className="rounded-lg shadow-lg object-cover w-full h-48"
              />
              <img 
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Cybersecurity concept" 
                className="rounded-lg shadow-lg object-cover w-full h-48"
              />
              <img 
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Security team meeting" 
                className="rounded-lg shadow-lg object-cover w-full h-48"
              />
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Team working on laptops" 
                className="rounded-lg shadow-lg object-cover w-full h-48"
              />
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
            
            <div className="mt-16 text-center">
              <h3 className="font-bold text-xl mb-6">Meet Some of Our Team Members</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1533674689012-136b487b7736?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
                <p className="text-xl opacity-90 mb-8">
                  Let's talk about your cybersecurity needs and how we can help protect your business from evolving threats.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90">
                    Schedule a Security Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1626176970224-a289adfc1690?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Security experts meeting" 
                  className="rounded-lg shadow-2xl border border-blue-700/30 object-cover w-full"
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
