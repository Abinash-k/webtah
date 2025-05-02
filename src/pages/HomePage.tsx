
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Lock, Eye, Code, Server, Bug } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import FeatureCard from '@/components/FeatureCard';
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
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-400 border-2 border-blue-900"></div>
                  ))}
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
                <div className="bg-gradient-to-br from-blue-900 to-black p-8 rounded-lg shadow-2xl border border-blue-800/30 w-full max-w-md">
                  <div className="flex items-center justify-center mb-6">
                    <Shield className="w-16 h-16 text-blue-400" />
                  </div>
                  <h3 className="text-xl text-white font-bold mb-4 text-center">Cyber Defense System</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300 text-sm">Advanced Threat Detection</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300 text-sm">Penetration Testing</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300 text-sm">Security Assessment</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300 text-sm">24/7 Monitoring & Response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Penetration Testing</h3>
                <p className="text-gray-600 mb-6">
                  We simulate sophisticated cyber attacks to identify vulnerabilities in your systems before real attackers can exploit them.
                </p>
                <Link to="/development" className="text-blue-600 font-medium flex items-center gap-2 hover:underline">
                  Learn More <span className="text-lg">→</span>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Vulnerability Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive scanning and analysis to identify, categorize, and prioritize security weaknesses in your IT environment.
                </p>
                <Link to="/development" className="text-blue-600 font-medium flex items-center gap-2 hover:underline">
                  Learn More <span className="text-lg">→</span>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Red Team Operations</h3>
                <p className="text-gray-600 mb-6">
                  Elite security professionals simulate advanced, multi-layered attacks to test your complete defense capabilities.
                </p>
                <Link to="/contact" className="text-blue-600 font-medium flex items-center gap-2 hover:underline">
                  Learn More <span className="text-lg">→</span>
                </Link>
              </div>
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
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Security Process</h3>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="min-w-[32px] h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">1</div>
                      <div>
                        <h4 className="font-bold mb-1">Discovery & Reconnaissance</h4>
                        <p className="text-gray-600 text-sm">Thorough mapping of attack surfaces and potential entry points</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="min-w-[32px] h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">2</div>
                      <div>
                        <h4 className="font-bold mb-1">Vulnerability Scanning</h4>
                        <p className="text-gray-600 text-sm">Automated and manual identification of security weaknesses</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="min-w-[32px] h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">3</div>
                      <div>
                        <h4 className="font-bold mb-1">Exploitation & Testing</h4>
                        <p className="text-gray-600 text-sm">Ethical hacking to validate security gaps and assess impact</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="min-w-[32px] h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">4</div>
                      <div>
                        <h4 className="font-bold mb-1">Reporting & Remediation</h4>
                        <p className="text-gray-600 text-sm">Detailed findings and actionable recommendations</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="bg-gradient-to-br from-blue-800 to-black p-8 rounded-lg shadow-2xl border border-blue-700/30">
                  <h3 className="text-2xl font-bold mb-6 text-center">Security Health Check</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Network Vulnerability Scan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Web Application Assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Security Policy Review</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Executive Summary Report</span>
                    </li>
                  </ul>
                  <div className="mt-8 text-center">
                    <span className="block text-2xl font-bold mb-2">Free</span>
                    <span className="block text-sm opacity-80 mb-4">For qualified businesses</span>
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      Request Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
