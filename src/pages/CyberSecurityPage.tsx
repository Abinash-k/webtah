
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Lock, Eye, Bug, Database, Server, ArrowRight } from 'lucide-react';
import ServiceBox from '@/components/ServiceBox';
import TestimonialCard from '@/components/TestimonialCard';

const CyberSecurityPage = () => {
  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black to-blue-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase bg-blue-800/40 px-3 py-1 rounded-full mb-6">Cyber Security</span>
              <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
                Proactive <span className="text-blue-400">Security</span> <br />Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                We specialize in proactive cybersecurity solutions designed to expose, 
                mitigate, and neutralize digital threats before they strike.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 hover:scale-105 transition-all">
                  Get Protected Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:scale-105 transition-all">
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
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Cybersecurity concept" 
                  className="rounded-lg shadow-2xl border border-blue-800/30 w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
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
                description="We simulate sophisticated cyber attacks to identify vulnerabilities in your systems before real attackers can exploit them."
                imageSrc="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              />
              
              <ServiceBox 
                title="Vulnerability Assessment" 
                icon={<Lock />}
                color="blue"
                description="Comprehensive scanning and analysis to identify, categorize, and prioritize security weaknesses in your IT environment."
                imageSrc="https://images.unsplash.com/photo-1562813733-b31f1c359edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              />
              
              <ServiceBox 
                title="Red Team Operations" 
                icon={<Eye />}
                color="blue"
                description="Elite security professionals simulate advanced, multi-layered attacks to test your complete defense capabilities."
                imageSrc="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
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
                      <Bug className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Web Application Testing</h4>
                      <p className="text-sm text-gray-600">OWASP Top 10 vulnerabilities</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Database className="w-5 h-5 text-blue-600" />
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
                
                <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all group">
                  Request Assessment <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 opacity-10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Security lock" 
                  className="rounded-lg shadow-lg object-cover w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Security Approach */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Our Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-blue-600">Webtah</span> Security Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven cybersecurity methodology ensures comprehensive protection for your organization
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-blue-200"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all relative z-10 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 hover:bg-blue-500 hover:text-white transition-all">
                    <span className="font-bold text-blue-600 hover:text-white">1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">Identify</h3>
                  <p className="text-gray-600 text-center">We conduct a thorough assessment of your systems, applications, and network to identify potential vulnerabilities.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all relative z-10 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 hover:bg-blue-500 hover:text-white transition-all">
                    <span className="font-bold text-blue-600 hover:text-white">2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">Protect</h3>
                  <p className="text-gray-600 text-center">We implement comprehensive security measures to safeguard your digital assets from cyber threats.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all relative z-10 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 hover:bg-blue-500 hover:text-white transition-all">
                    <span className="font-bold text-blue-600 hover:text-white">3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">Detect</h3>
                  <p className="text-gray-600 text-center">Our advanced monitoring systems continuously scan for and detect potential security incidents.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all relative z-10 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8 hover:bg-blue-500 hover:text-white transition-all">
                    <span className="font-bold text-blue-600 hover:text-white">4</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">Respond</h3>
                  <p className="text-gray-600 text-center">Our expert team rapidly responds to and mitigates security incidents to minimize impact.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Security" 
                  className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Lock" 
                  className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Cybersecurity" 
                  className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Security concepts" 
                  className="rounded-lg shadow-md object-cover h-48 transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <span className="inline-block text-xs md:text-sm font-bold tracking-wider uppercase text-blue-600 mb-2">Key Benefits</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-blue-600">Webtah</span> Security</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We provide comprehensive cybersecurity solutions tailored to your specific needs and industry requirements.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-blue-100 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Proactive Security</h4>
                      <p className="text-gray-600">We identify and address vulnerabilities before they can be exploited.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-blue-100 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Monitoring</h4>
                      <p className="text-gray-600">Our security operations center provides around-the-clock monitoring and incident response.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-blue-100 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Team</h4>
                      <p className="text-gray-600">Our security professionals hold industry-leading certifications and have extensive experience.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-blue-100 rounded-full mt-1">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Customized Solutions</h4>
                      <p className="text-gray-600">We tailor our security services to meet your specific business needs and compliance requirements.</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all group">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
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
                image="https://images.unsplash.com/photo-1573497019236-61e7a3e1f341?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
              
              <TestimonialCard 
                quote="Their red team operations provided invaluable insights into our security gaps. The detailed reporting helped us prioritize our security investments." 
                author="Michael Reynolds" 
                role="CISO, TechCorp" 
                rating={5}
                delay={200}
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
              
              <TestimonialCard 
                quote="We sleep better at night knowing Webtah is monitoring our systems. Their incident response team detected and neutralized a threat before any damage occurred." 
                author="Sarah Johnson" 
                role="IT Director" 
                rating={5}
                delay={300}
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
              <p className="text-xl opacity-90 mb-8">
                Contact us today for a free security audit and consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 hover:scale-105 transition-all">
                  Get a Free Security Audit
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:scale-105 transition-all">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default CyberSecurityPage;
