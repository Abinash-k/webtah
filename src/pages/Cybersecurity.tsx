import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Check, Users } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Cybersecurity = () => {
  return (
    <>
      <HeroSection 
        title="Cybersecurity Services" 
        subtitle="Elite Protection for a Digital-First World"
        ctaText="Get a Free Consultation"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-webtah-text-secondary">
                We specialize in proactive, deep-dive cybersecurity solutions designed to expose, mitigate, and
                neutralize digital threats before they strike. Our mission is to protect your organization's critical
                assets with military-grade tactics and industry-certified expertise.
              </p>
            </div>
          </ScrollReveal>

          {/* 1. Penetration Testing */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white mr-3">1</span>
                    Penetration Testing
                  </h2>
                  <p className="text-xl font-medium text-webtah-blue-dark mb-6">Expose vulnerabilities before attackers do.</p>
                  <p className="text-lg text-webtah-text-secondary mb-8">
                    Our ethical hackers simulate real-world cyberattacks to identify your security gaps — from
                    infrastructure to applications and wireless networks.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Cybersecurity professional working" 
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="service-category bg-webtah-lavender">
                  <h3>Network Penetration Testing</h3>
                  <ul className="space-y-2">
                    <li className="check-list">
                      <Check size={18} />
                      <span>Internal & external network analysis</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Firewall & router misconfigurations</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Privilege escalation & lateral movement</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Active Directory exploitation</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Custom payload injection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="service-category bg-webtah-peach">
                  <h3>Web Application Testing</h3>
                  <ul className="space-y-2">
                    <li className="check-list">
                      <Check size={18} />
                      <span>OWASP Top 10 vulnerabilities</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Logic flaws, broken authentication</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>SQL Injection, Cross-Site Scripting (XSS), CSRF</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Manual code review & automated scanning</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Secure API testing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="service-category bg-webtah-mint">
                  <h3>Mobile Application Testing</h3>
                  <ul className="space-y-2">
                    <li className="check-list">
                      <Check size={18} />
                      <span>Dynamic & static analysis (Android/iOS)</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>API endpoints, insecure data storage</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Code decompilation & reverse engineering</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Root/jailbreak bypass simulations</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Session hijacking attempts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="service-category bg-webtah-cream">
                  <h3>WiFi Network Testing</h3>
                  <ul className="space-y-2">
                    <li className="check-list">
                      <Check size={18} />
                      <span>Rogue AP detection</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>WPA2/WPA3 cracking</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Evil twin & man-in-the-middle attacks</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>MAC spoofing and sniffing</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Signal leakage & guest network separation audit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Vulnerability Assessment */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Network security visualization" 
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="lg:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white mr-3">2</span>
                    Vulnerability Assessment
                  </h2>
                  <p className="text-xl font-medium text-webtah-blue-dark mb-6">Comprehensive visibility. Informed decisions.</p>
                  <p className="text-lg text-webtah-text-secondary mb-8">
                    We scan, categorize, and prioritize all security exposures in your IT environment. From cloud to on-prem, we give you a clear remediation roadmap.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="service-category bg-webtah-lavender">
                  <h3>Cloud Security Assessment</h3>
                  <ul className="space-y-2">
                    <li className="check-list">
                      <Check size={18} />
                      <span>AWS / Azure / GCP config reviews</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Misconfigured S3 buckets, IAM roles, and public exposure</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Security posture evaluation</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Monitoring & alerting verification</span>
                    </li>
                  </ul>
                </div>
                
                <div className="service-category bg-webtah-peach">
                  <h3>Host Build Review</h3>
                  <ul className="space-y-2">
                    <li className="check-list">
                      <Check size={18} />
                      <span>OS hardening verification</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Service audits & unnecessary ports detection</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Patch management audit</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Antivirus/firewall status</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>CIS Benchmark alignment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Red Teaming */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white mr-3">3</span>
                    Red Teaming
                  </h2>
                  <p className="text-xl font-medium text-webtah-blue-dark mb-6">Real attackers don't follow rules — neither do we.</p>
                  <p className="text-lg text-webtah-text-secondary mb-8">
                    Our red team emulates advanced threat actors to test your full defense stack — people, processes, and technology.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Hacker in hoodie" 
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-webtah-mint p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Attack Methods</h3>
                  <ul className="space-y-2">
                    <li className="check-list">
                      <Check size={18} />
                      <span>Social engineering (phishing, vishing)</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Physical access testing</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Stealth malware injection</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Evasion of EDR, firewalls, and antivirus</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>C2 (command & control) channels and pivoting</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-webtah-cream p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Deliverables</h3>
                  <ul className="space-y-2">
                    <li className="check-list">
                      <Check size={18} />
                      <span>Attack narrative with real-life exploit paths</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Detection and response analysis</span>
                    </li>
                    <li className="check-list">
                      <Check size={18} />
                      <span>Strategic guidance for long-term resilience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 4. Incident Response */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Security operations center" 
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="lg:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white mr-3">4</span>
                    Incident Response & Threat Hunting (Add-On)
                  </h2>
                  <p className="text-xl font-medium text-webtah-blue-dark mb-6">Breach containment and digital forensics.</p>
                  <p className="text-lg text-webtah-text-secondary mb-8">
                    Rapid response teams for live breaches or suspicious activity.
                  </p>
                </div>
              </div>
              
              <div className="bg-webtah-lavender p-6 rounded-lg mb-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <li className="check-list">
                    <Check size={18} />
                    <span>Root cause analysis</span>
                  </li>
                  <li className="check-list">
                    <Check size={18} />
                    <span>Memory & log forensics</span>
                  </li>
                  <li className="check-list">
                    <Check size={18} />
                    <span>Malware analysis</span>
                  </li>
                  <li className="check-list">
                    <Check size={18} />
                    <span>Evidence preservation</span>
                  </li>
                  <li className="check-list">
                    <Check size={18} />
                    <span>Full containment and remediation</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* 5. Security Awareness */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-webtah-blue flex items-center justify-center text-white mr-3">5</span>
                    Security Awareness & Compliance Training
                  </h2>
                  <p className="text-xl font-medium text-webtah-blue-dark mb-6">Your employees: your first line of defense.</p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Team training session" 
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-webtah-peach p-6 rounded-lg mb-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <li className="check-list">
                    <Check size={18} />
                    <span>Phishing simulation</span>
                  </li>
                  <li className="check-list">
                    <Check size={18} />
                    <span>Cyber hygiene training</span>
                  </li>
                  <li className="check-list">
                    <Check size={18} />
                    <span>Policy awareness</span>
                  </li>
                  <li className="check-list">
                    <Check size={18} />
                    <span>Executive threat briefings</span>
                  </li>
                  <li className="check-list">
                    <Check size={18} />
                    <span>ISO 27001, SOC 2, PCI-DSS, HIPAA compliance guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-webtah-mint">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
              <p className="text-xl text-webtah-text-secondary max-w-2xl mx-auto">
                The Webtah Security Advantage
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Certified Experts</h3>
                <p className="text-webtah-text-secondary">
                  Our team includes OSCP, CEH, CISSP, PNPT, CREST certified professionals with experience protecting Fortune 500 companies.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Manual-first Testing</h3>
                <p className="text-webtah-text-secondary">
                  We prioritize hands-on testing over automated tools to find vulnerabilities that scanners miss.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Enterprise-grade Reporting</h3>
                <p className="text-webtah-text-secondary">
                  Comprehensive, easy-to-understand reports with clear remediation steps and prioritized vulnerabilities based on risk.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">100% Confidentiality</h3>
                <p className="text-webtah-text-secondary">
                  NDA-backed services with strict data handling protocols and privacy controls.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Tailored Packages</h3>
                <p className="text-webtah-text-secondary">
                  Custom security solutions for businesses of all sizes, from SMEs to large enterprises.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={100}>
              <img 
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Cybersecurity professional" 
                className="rounded-lg shadow-md object-cover w-full h-40"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Security lock" 
                className="rounded-lg shadow-md object-cover w-full h-40"
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <img 
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Network security" 
                className="rounded-lg shadow-md object-cover w-full h-40"
              />
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <img 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Security professional at work" 
                className="rounded-lg shadow-md object-cover w-full h-40"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-webtah-blue-dark to-webtah-blue text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
              <p className="text-xl mb-8">
                Get in touch today for a free cybersecurity consultation. Our experts will help you identify vulnerabilities and create a comprehensive security plan.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-webtah-blue-dark hover:bg-opacity-90 text-lg px-8 py-3">
                  Request a Free Consultation
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Cybersecurity;
